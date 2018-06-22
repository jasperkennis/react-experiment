var gulp = require('gulp'),
  babel = require('gulp-babel'),
  webpack = require('webpack-stream');

gulp.task('es6', function () {
  gulp.src('src/js/app.js')
    .pipe(babel())
    .pipe(gulp.dest('build/'));

  return gulp.src('build/app.js')
    .pipe(webpack({
      output: {
        filename: 'app.js',
      }
    }))
    .pipe(gulp.dest('dist/'));;
});

gulp.task('watch', function () {
  gulp.watch('src/js/*.js', ['es6']);
});

gulp.task('default', ['es6', 'watch']);
