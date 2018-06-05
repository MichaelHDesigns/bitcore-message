'use strict';

var gulp = require('gulp');
var feathercoreTasks = require('feathercore-build');

feathercoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
