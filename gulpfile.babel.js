// eslint-disable import/no-extraneous-dependencies
const gulp = require('gulp');
const awspublish = require('gulp-awspublish');
const cloudfront = require('gulp-cloudfront');
const RevAll = require('gulp-rev-all');
const debug = require('debug')('app:build:aws');

const bucket = process.env.DEPLOY_BUCKET;
const distributionId = process.env.CF_DISTRO_ID;

gulp.task('copy-assets', () => (
  gulp.src('src/assets/*')
  .pipe(gulp.dest('dist/assets/'))
));

gulp.task('publish', ['copy-assets'], () => {
  debug('preparing to publish bucket=%s, distribution=%s', bucket, distributionId);

  // create a new publisher using S3 options
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
  const publisher = awspublish.create({ params: { Bucket: bucket } });
  const headers = { 'Cache-Control': 'max-age=315360000, no-transform, public' };

  const publish = gulp.src('dist/**/*')
    .pipe(RevAll.revision())
    .pipe(awspublish.gzip())
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());

  return distributionId ?
    publish.pipe(cloudfront({ bucket, distributionId })) :
    publish;
});
