const gulp = require('gulp');
const sass = require('gulp-sass');
const concatCss = require('gulp-concat-css');

gulp.task('sass', function () {
    return gulp.src('./src/sass/*.scss')
      .pipe(sass({includePaths: require('node-normalize-scss').includePaths}).on('error', sass.logError))
      .pipe(concatCss('style.css'))
      .pipe(gulp.dest('./public/dist/css'));

  });

gulp.task('default', ['sass']);