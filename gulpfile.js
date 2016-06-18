'use strict';

const $    = require('gulp-load-plugins')();
const gulp = require('gulp');

gulp.task('js', () => {
    return gulp.src('lib/**/*.js')
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.eslint.failAfterError())
});

gulp.task('default', ['js']);
