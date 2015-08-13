const gulp = require('gulp');
const gutil = require('gulp-util');
const nodemon = require('gulp-nodemon');
const _ = require('lodash');

gulp.task('nodemon', () => {
    return nodemon({
        script: 'index',
        ext: 'js',
        env: _.merge({ DEBUG: 'app*,jefferson*,mountie*' }, process.env),
        tasks: ['lint-server', 'test-server'],
    })
        .on('error', (err) => gutil.log('nodemon error', err))
        .on('restart', () => gutil.log('restarting server'));
});

gulp.task('develop', ['watch-client', 'nodemon']);
