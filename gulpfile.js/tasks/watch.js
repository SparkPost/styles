var gulp = require('gulp');

var watchTask = function(){
  gulp.watch('./_src/assets/js/_entry.js',   ['javascript']);
  gulp.watch('./_src/assets/scss/**/*.scss', ['css']);
  // gulp.watch('./_src/**/*.html',                   ['jekyll-rebuild']);
};

gulp.task('watch', watchTask);
module.exports = watchTask;
