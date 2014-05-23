var gulp = require('gulp');

gulp.task('jekyll-watch', function() {

	// require('child_process').spawn('jekyll', ['build', '--watch'], {stdio: 'inherit'});

	// Running with gh-pages specific Jekyll
	// https://help.github.com/articles/using-jekyll-with-pages#installing-jekyll
	// $> bundle exec jekyll build --watch
	require('child_process').spawn('bundle', ['exec', 'jekyll', 'build', '--watch'], {stdio: 'inherit'});

});
