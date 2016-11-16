var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    cleanCSS        = require('gulp-clean-css'),
    rename          = require('gulp-rename');

var cssTask = function() {
  return gulp.src('./_src/assets/scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./_src/assets/css'))
    .pipe(cleanCSS({ processImport: false }))
    .pipe(rename({suffix: '.min' }))
    .pipe(gulp.dest('./_src/assets/css'));
}

gulp.task('css', cssTask);
module.exports = cssTask;
