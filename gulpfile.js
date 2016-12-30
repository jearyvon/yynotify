/**
 * Created by findl on 2016/12/30.
 */
var gulp = require('gulp'),
    sass =require('gulp-sass');
gulp.task('default',function () {
   return gulp.src('src/sass/*.scss').pipe(sass()).pipe(gulp.dest('dist/css/'));
});