var gulp = require('gulp');
var paths        = require('../util/paths.js');

gulp.task('copy-vendor', function(){
	gulp.src(paths.copyvendor)
	.pipe(gulp.dest(paths.dist+'static/js/vendor'));
});
