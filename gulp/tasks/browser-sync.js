var gulp = require('gulp');
var browserSync = require('browser-sync');
var paths = require('../util/paths.js');

gulp.task('browser-sync', function() {

    browserSync.init(null, {
	// browserSync.init([paths.http+'**/*.css', paths.http+'**/*.html'], {
      server: {
        baseDir: paths.dist
      }
    });

});