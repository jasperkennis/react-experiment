var gulp = require('gulp'),
  babel = require('gulp-babel');

gulp.task('es6', function () {
  return gulp.src('src/js/app.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch('src/js/*.js', ['es6']);
});

gulp.task('default', ['es6', 'watch']);
