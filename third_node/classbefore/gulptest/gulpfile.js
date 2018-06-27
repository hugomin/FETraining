var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var babel = require("gulp-babel");
gulp.task('default',['js','css'],function(){
    console.log("start")
})
gulp.task('js', function() {
  gulp.src('src/script/*.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(concat("all.main.js"))
    .pipe(gulp.dest('build'));
});
gulp.task('css', function() {
    console.log(123)
    gulp.src('src/styles/*.css')
      .pipe(cleanCSS())
      .pipe(concat("all.main.css"))
      .pipe(gulp.dest('build'));
  });