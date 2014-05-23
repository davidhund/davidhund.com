// Example:
// npm install gulp -g
// cd my-project
// npm install gulp --save-dev
// npm install gulp-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-clean gulp-notify gulp-rename gulp-cache browser-sync --save-dev

// Most of this is taken from: 
// http://markgoodyear.com/2014/01/getting-started-with-gulp/


var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var notify = require('gulp-notify');

// Handy file paths
var paths = {
	scss: "./static/scss/",
	css:  "./static/css/",
	img:  "./static/img/",
	js:   "./static/js/",
	bower: "./bower_components/",
	jekyll: [
		"*.md",
		"./_includes/*",
		"./_layouts/*",
		"./_posts/*"
	],
	dist: "./_site/"
};

// Vendor deps. to move into `_static/js/vendor/`
// These are not concatenated
paths.copyvendor = [
	paths.bower+"jquery/dist/jquery.min.js",
	paths.bower+"html5shiv/dist/html5shiv.js",
	paths.bower+"prism/prism.js",
	paths.bower+"prism/themes/prism.css"
];

// TASK: Sass task, will run when any SCSS files change & BrowserSync will auto-update browsers
gulp.task('sass', function () {
    gulp.src(paths.scss+'app.scss')
        // .pipe(sass({includePaths: ['scss']}))
		.pipe(sass({ style: 'expanded' }))
		.pipe(autoprefixer('> 5%', 'last 2 version', 'ie 9'))
		.pipe(minifycss())
		.pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.css))
		.pipe(gulp.dest(paths.dist+'static/css/'))
        .pipe(browserSync.reload({stream:true}));
});


// TASK: JEKYLL
// Start a `jekyll build` task
// From: http://stackoverflow.com/questions/21293999/use-jekyll-with-gulp
gulp.task('jekyll', function() {
	require('child_process').spawn('jekyll', ['build'], {stdio: 'inherit'});
});
gulp.task('jekyll-watch', function() {
	require('child_process').spawn('jekyll', ['build', '--watch'], {stdio: 'inherit'});
});


// TASK: WATCH
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


// TASK: browser-sync
// https://github.com/shakyShane/gulp-browser-sync
gulp.task('browser-sync', function() {
    browserSync.init(null, {
    // browserSync.init(paths.dist+'static/css/*.css', {
      server: {
        baseDir: "_site"
      }
    });
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});


// TASK: copy vendor
// AUTOMATICALLY RUN: on `postinstall` by `npm install`
// Copies certain bower dependancies to /static/js/vendor
gulp.task('copy-vendor', function(){
	gulp.src(paths.copyvendor)
	.pipe(gulp.dest(paths.dist+'static/js/vendor'));
});

// TASK: default
// gulp.task('default', ['jekyll-watch', 'watch','browser-sync']);
// Default task to be run with `gulp`
// gulp.task('default', ['jekyll-watch', 'watch', 'browser-sync'], function () {
gulp.task('default', ['watch', 'browser-sync'], function () {
	// gulp.watch(paths.scss+'**/*.scss', ['sass']);
	// gulp.watch(paths.dist+'**/*.html', ['bs-reload']);
});
