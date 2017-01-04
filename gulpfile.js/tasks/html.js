var gulp            = require('gulp'),
    nunjucksRender  = require('gulp-nunjucks-render'),
    child           = require('child_process');

// var htmlTask = function () {
//   return gulp.src(['./src/views/*.html'])
//     .pipe(nunjucksRender({
//       path: ['./src/views/']
//     }))
//     .pipe(gulp.dest('./docs/'));
// }
//

var buildTask = function(done) {
  const jekyll = child.spawn('jekyll', ['build'], {
    stdio: 'inherit'
  });
}

gulp.task('jekyll', buildTask);

module.exports = buildTask;
