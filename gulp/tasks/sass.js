var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var gutil        = require('gulp-util');
var sass         = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss    = require('gulp-minify-css');
var rename       = require('gulp-rename');
var browserSync  = require('browser-sync');
var paths        = require('../util/paths.js');

var onError = function (err) {  
	gutil.beep();
	gutil.log(gutil.colors.red(err.message));
	// console.log(err);
	this.emit('end'); // why is this needed?
};

gulp.task('sass', function() {
    return gulp.src(paths.scss+'style.scss')
		.pipe(plumber({ errorHandler: onError }))
        // .pipe(sass({includePaths: ['scss']}))
		// .pipe(sass({ sourcemap: true, style: 'compact', noCache: true }))
		.pipe(sass({ style: 'compressed' }))
		.pipe(autoprefixer('> 5%', 'last 2 version', 'ie 9'))
		.pipe(minifycss())
		.pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.css))
		.pipe(gulp.dest(paths.dist+'static/css/'))
        .pipe(browserSync.reload({stream:true}));
});
