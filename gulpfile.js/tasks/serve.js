var browserSync = require('browser-sync').create();
var gulp = require('gulp');

var serveTask = function() {
  browserSync.init({

      // Static Server
      server: {
        baseDir: "./docs"
      },

      // proxy: '',

      files: [
        './build/public/css/*.css'
      ],

      ghostMode: {
          clicks: false,
          forms: false,
          scroll: false
      },

      notify: false,
      open: "internal"
  });

  gulp.watch('./docs/*.html').on('change', browserSync.reload);
  // gulp.watch('./dist/public/js/*.js').on('change', browserSync.reload);
}

gulp.task('serve', ['css'], serveTask);
module.exports = serveTask;
