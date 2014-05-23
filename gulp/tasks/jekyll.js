var gulp = require('gulp');

// Start a `jekyll build` task
// From: http://stackoverflow.com/questions/21293999/use-jekyll-with-gulp
gulp.task('jekyll', function() {

	require('child_process').spawn('jekyll', ['build'], {stdio: 'inherit'});

});
