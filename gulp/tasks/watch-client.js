const gulp = require('gulp');
const gutil = require('gulp-util');
const config = require('../config');

const watchify = require('watchify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const lload = require('gulp-livereload');
const source = require('vinyl-source-stream');
const lrload = require('livereactload');
const browserifyConf = require('./browserify_config');

gulp.task('watch-client', () => {
    // watch js and lint
    gulp.watch(config.client.all, ['lint-client-tdd', 'test-client-tdd']);

    // watch html
    gulp.watch(config.client.html, ['copy-html']);

    // watch assets
    gulp.watch(config.client.assets, ['copy-assets']);

    // watch sass
    lload.listen();
    gulp.watch(config.client.styles, ['sass']);


    // watch client js
    lrload.monitor(config.client.dist.path + '/' + config.client.dist.bundle, {displayNotification: true});

    const b = browserifyConf();
    b.transform.push(lrload);
    b.debug = true;
    b.fullPaths = true;

    const watcher = watchify(browserify(b));
    function bundle() {
        return watcher
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Bundling Error'))
            .pipe(source(config.client.dist.bundle))
            .pipe(buffer())
            .pipe(gulp.dest(config.client.dist.path));
    }

    watcher.on('update', bundle);
    watcher.on('log', gutil.log);
    watcher.on('error', gutil.log.bind(gutil, 'Watcher Error'));
    return bundle();
});
