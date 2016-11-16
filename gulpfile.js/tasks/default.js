var gulp = require('gulp');

var defaultTask = ['jekyll', 'serve', 'watch'];
// var buildTask = ['html', 'css'];

gulp.task('default', defaultTask);
// gulp.task('build', buildTask);

module.exports = defaultTask;
