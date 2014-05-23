var gulp  = require('gulp');
var paths = require('../util/paths.js');

gulp.task('watch', function() {
	// Watch and compile .scss files. 
	// Move compiled .css to 'dist'
	// gulp.watch(paths.scss+'**/*.scss', ['sass', 'copy-css-dist']);
	gulp.watch(paths.scss+'**/*.scss', ['sass']);

	// Watch and handle .js files
	// gulp.watch(paths.js+'**/*.js', ['scripts']);

	// Watch and optimize .img files
	// gulp.watch(paths.img+'**/*', ['images']);

	// Watch Jekyll Files and rebuild
	gulp.watch(paths.jekyll, ['jekyll']);

	// Reload when HTML in 'dist' folder changes
	gulp.watch(paths.dist+'**/*.html', ['bs-reload']);
});
