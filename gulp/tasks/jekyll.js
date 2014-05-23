var gulp = require('gulp');

// Start a `jekyll build` task
// From: http://stackoverflow.com/questions/21293999/use-jekyll-with-gulp
gulp.task('jekyll', function() {

	// require('child_process').spawn('jekyll', ['build'], {stdio: 'inherit'});

	// Running with gh-pages specific Jekyll
	// https://help.github.com/articles/using-jekyll-with-pages#installing-jekyll
	// $> bundle exec jekyll serve
	require('child_process').spawn('bundle', ['exec', 'jekyll', 'build'], {stdio: 'inherit'});

});
