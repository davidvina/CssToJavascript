// https://css-tricks.com/gulp-for-beginners/

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

// paths for css only
var path = {
  src: 'app/',
  dest: 'app/',
};

gulp.task('sass', function () {
  return gulp.src(path.src + 'scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({

        //options
        outputStyle: 'compressed',
      })
      .on('error', sass.logError) // prevent stop task
    ) // Using gulp-sass
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(path.dest + 'css'))
    .pipe(browserSync.reload({
      stream: true,
    }));
});

//var sass = require('gulp-ruby-sass');
// // sass with ruby sass
// gulp.task('sass', function () {
//     sass(path.src + 'scss/**/*.scss', { sourcemap: true })
//         .on('error', sass.logError)
//
//         // for inline sourcemaps
//         .pipe(sourcemaps.write())
//
//         // for file sourcemaps
//         .pipe(sourcemaps.write('./maps', {
//             includeContent: false,
//             sourceRoot: 'source',
//           }))
//         .pipe(gulp.dest('result'));
//   });

gulp.task('initBrowserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'app',
      directory: true,
    },
  });
});

// initBrowserSync and sass tasks runs before
gulp.task('default', ['initBrowserSync', 'sass'], function () {

  // compile scss if changes on **/*.scss
  gulp.watch(path.src + '**/*.scss', ['sass']);

  // watch html
  gulp.watch(path.src + '**/*.html', browserSync.reload);

  // watch javascript
  gulp.watch(path.src + '**/*.js', browserSync.reload);

});
