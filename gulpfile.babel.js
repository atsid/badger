import gulp from 'gulp';
import RevAll from 'gulp-rev-all';
import awspublish from 'gulp-awspublish';
import cloudfront from 'gulp-cloudfront';

const debug = require('debug')('app:build:aws');

gulp.task('publish', () => {
  debug('preparing to publish');
  const bucket = process.env.DEPLOY_BUCKET;
  const key = process.env.AWS_ACCESS_KEY_ID;
  const secret = process.env.AWS_SECRET_ACCESS_KEY;
  const distributionId = process.env.DEPLOY_DISTRIBUTION_ID;

  // create a new publisher using S3 options
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
  const publisher = awspublish.create({
    params: {
      Bucket: bucket,
    },
  });
  const headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public',
  };

  debug('publishing');
  const revall = new RevAll();
  return gulp.src('./public/**/*')
    .pipe(revall.revision())
    .pipe(awspublish.gzip())
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter())
    .pipe(cloudfront({ bucket, key, secret, distributionId }));
});
