var gulp = require('gulp');

gulp.task('jekyll-watch', function() {

	require('child_process').spawn('jekyll', ['build', '--watch'], {stdio: 'inherit'});

});
