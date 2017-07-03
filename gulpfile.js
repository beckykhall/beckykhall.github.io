var gulp = require('gulp');

// Dev dependencies
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');

// Sass compilation
gulp.task('sass',function(){
	return gulp.src('styles/scss/*.scss')
		.pipe(sass({style: 'expanded'}).on('error',sass.logError))
		.pipe(gulp.dest('styles/css'));
});

// JS linting
gulp.task('scripts',function(){
	return gulp.src('js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Watch files for changes
gulp.task('watch',function(){
	gulp.watch('js/*.js',['scripts']);
	gulp.watch('styles/scss/*.scss',['sass']);
});

// Default task
gulp.task('default', ['sass', 'scripts', 'watch']);