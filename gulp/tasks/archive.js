const gulp = require('gulp');
const zip = require('gulp-zip');

gulp.task('archive', () => {
  return gulp.src([
    '{client,config,public,scripts,server}/**/*',
    'index.js',
    'package.json',
    'README.md',
    'npm-shrinkwrap.json'
  ])
    .pipe(zip('badger.zip'))
    .pipe(gulp.dest('dist'));
});
