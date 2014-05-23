var gulp         = require('gulp');
var minifyHTML   = require('gulp-minify-html');
var paths        = require('../util/paths.js');


gulp.task('minify-html', function() {

	var opts = {
		// comments: true,
		// spare: true
		conditionals: true
	};

	gulp.src(paths.dist+'*.html')
		.pipe(minifyHTML(opts))
		.pipe(gulp.dest(paths.dist))

});