var gulp        = require('gulp'),
    jshint      = require('gulp-jshint'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename');
    

// define the default task and add the watch task to it
gulp.task('default', ['compress']);


// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('dist/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});


// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('dist/*.js', ['compress']);
});


gulp.task('compress', ['jshint'], function () {
    return gulp.src('dist/timeago.js')
    .pipe(uglify())
    .pipe(rename("timeago.min.js"))
    .pipe(gulp.dest('dist/'));
});