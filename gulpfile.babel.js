// eslint-disable import/no-extraneous-dependencies
const gulp = require('gulp');
const awspublish = require('gulp-awspublish');
const cloudfront = require('gulp-cloudfront');
const RevAll = require('gulp-rev-all');

const debug = require('debug')('app:build:aws');

const DISTRIBUTIONS = {
  integration: process.env.INTEG_DISTRIBUTION_ID,
  production: process.env.PROD_DISTRIBUTION_ID,
};
const BUCKETS = {
  integration: process.env.INTEG_DEPLOY_BUCKET,
  production: process.env.PROD_DEPLOY_BUCKET,
};

gulp.task('copy-assets', () => (
  gulp.src('src/assets/*')
  .pipe(gulp.dest('dist/assets/'))
));

gulp.task('publish', ['copy-assets'], () => {
  debug('preparing to publish');
  const { env: { NODE_ENV: stage } } = process;
  if (!stage) {
    throw new Error('NODE_ENV must be defined');
  }

  const bucket = BUCKETS[stage];
  debug('Bucket', bucket);

  // create a new publisher using S3 options
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
  const publisher = awspublish.create({ params: { Bucket: bucket } });
  const headers = { 'Cache-Control': 'max-age=315360000, no-transform, public' };

  debug('publishing');

  const publish = gulp.src('dist/**/*')
    .pipe(RevAll.revision())
    .pipe(awspublish.gzip())
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());

  const distributionId = DISTRIBUTIONS[stage];
  return distributionId ?
    publish.pipe(cloudfront({ bucket, distributionId })) :
    publish;
});
