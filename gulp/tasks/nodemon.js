const gulp = require('gulp');
const gutil = require('gulp-util');
const nodemon = require('gulp-nodemon');
const config = require('config');

gulp.task('nodemon', () => {
    return nodemon({
        script: 'index',
        ext: 'js',
        env: {
            'DEBUG': process.env.DEBUG || 'app*,jefferson*,mountie*',
            'GITHUB_TOKEN': config.github.token,
            'GITHUB_ORG': config.github.org,
        },
        tasks: ['lint-server', 'test-server'],
    })
        .on('error', (err) => gutil.log('nodemon error', err))
        .on('restart', () => gutil.log('restarting server'));
});

gulp.task('develop', ['watch-client', 'nodemon']);
