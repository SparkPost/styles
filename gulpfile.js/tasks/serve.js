var browserSync = require('browser-sync').create();
var gulp = require('gulp');

var rebuildTask = function() {
  browserSync.reload();
}

var serveTask = function() {
  browserSync.init({

      // Static Server
      server: {
        baseDir: "./_site"
      },

      // proxy: '',

      files: [
        './_site/assets/css/*.css'
      ],

      ghostMode: {
          clicks: false,
          forms: false,
          scroll: false
      },

      notify: false,
      open: "internal"
  });

  gulp.watch('./_site/*.html').on('change', browserSync.reload);
  // gulp.watch('./dist/public/js/*.js').on('change', browserSync.reload);
}

gulp.task('serve', ['css'], serveTask);
module.exports = serveTask;
