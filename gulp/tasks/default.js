var gulp = require('gulp');

// TASK: default
// gulp.task('default', ['jekyll-watch', 'watch','browser-sync']);
// Default task to be run with `gulp`
// gulp.task('default', ['jekyll-watch', 'watch', 'browser-sync'], function () {
gulp.task('default', ['watch', 'browser-sync'], function () {
	// gulp.watch(paths.scss+'**/*.scss', ['sass']);
	// gulp.watch(paths.dist+'**/*.html', ['bs-reload']);
});
