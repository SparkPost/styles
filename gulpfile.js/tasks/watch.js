var gulp = require('gulp');

var watchTask = function(){
  gulp.watch('./src/assets/js/_entry.js',   ['javascript']);
  gulp.watch('./src/assets/scss/**/*.scss', ['css']);
};

gulp.task('watch', watchTask);
module.exports = watchTask;
