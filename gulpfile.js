'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-hth');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
