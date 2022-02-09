'use strict';

var gulp = require('gulp');
var hthcoreTasks = require('hthcore-build');

hthcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
