var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build-css', function () {
  return gulp.src('./src/scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['build-css']);
})

gulp.task('default', ['build-css','watch']);
