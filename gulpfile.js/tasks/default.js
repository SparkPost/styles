var gulp = require('gulp');

var defaultTask = ['serve', 'html', 'watch'];
// var buildTask = ['html', 'css'];

gulp.task('default', defaultTask);
// gulp.task('build', buildTask);

module.exports = defaultTask;
