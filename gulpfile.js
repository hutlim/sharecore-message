'use strict';

var gulp = require('gulp');
var sharecoreTasks = require('sharecore-build');

sharecoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
