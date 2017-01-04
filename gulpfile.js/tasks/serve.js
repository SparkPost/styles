var browserSync = require('browser-sync').create();
var gulp = require('gulp');

var rebuildTask = function() {
  browserSync.reload();
}

var serveTask = function() {
  browserSync.init({

      // Static Server
      server: {
        baseDir: "./docs"
      },

      // proxy: '',

      files: [
        './docs/assets/css/*.css'
      ],

      ghostMode: {
          clicks: false,
          forms: false,
          scroll: false
      },

      notify: false,
      open: "internal"
  });

  gulp.watch('./docs/*.html', debounce(browserSync.reload), 1000);
  // gulp.watch('./docs/assets/js/*.js').on('change', browserSync.reload);
}

function debounce(fn, delay) {
  var timer = null;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

gulp.task('serve', ['javascript', 'css'], serveTask);
module.exports = serveTask;
