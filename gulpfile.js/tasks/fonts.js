var gulp = require('gulp');

var fontsTask = function() {
  return gulp.src('./node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('./build/public/fonts'))
};

gulp.task('fonts', fontsTask);
module.exports = fontsTask;
