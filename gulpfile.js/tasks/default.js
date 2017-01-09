var gulp = require('gulp');

var defaultTask = ['jekyll', 'serve', 'watch'];

gulp.task('default', defaultTask);
module.exports = defaultTask;
