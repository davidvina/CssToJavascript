var gulp = require('gulp');
var sass = require('gulp-sass');

var path = {
  src: 'scss/',
  dest: 'css/',
};

gulp.task('sass', function () {
    return gulp.src(path.src + '/**/*.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest(path.dest));
  });

gulp.task('watch', function () {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // Other watchers
});
