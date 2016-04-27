var gulp       = require('gulp'),
    util       = require('gulp-util'),
    concat     = require('gulp-concat'),
    cssnano    = require('gulp-cssnano'),
    rename     = require('gulp-rename'),
    uglify     = require('gulp-uglify'),
    autoprefix = require('gulp-autoprefixer');

gulp.task('lib', function () {
  return gulp.src([
    './bower_components/angular/angular.min.js',
    './bower_components/angular-ui-router/release/angular-ui-router.min.js'
  ])
  .pipe(concat('lib.js'))
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./public/lib'));
});

gulp.task('lib-post', function () {
  return gulp.src([
    './bower_components/angular-animate/angular-animate.min.js'
  ])
  .pipe(concat('lib-post.js'))
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./public/lib'));
});

gulp.task('css', function () {
  return gulp.src(['./src/css/main.css'])
  .pipe(autoprefix())
  .pipe(cssnano())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./public/css'))
});

gulp.task('scripts', function() {
  return gulp.src([
    './src/js/app.js'
  ])
  .pipe(concat('app.js'))
  .pipe(uglify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./public/js'));
});

gulp.task('scripts-post', function() {
  return gulp.src([
    './src/js/controllers/topicCtrl.js',
    './src/js/controllers/threadCtrl.js',
    './src/js/directives/topicItem.js',
    './src/js/directives/threadQuestion.js',
    './src/js/services/content.js'
  ])
  .pipe(concat('app-post.js'))
  .pipe(uglify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function() {
  gulp.watch('./src/css/*.css', ['css']);
  gulp.watch('./src/js/**/*.js', ['scripts', 'scripts-post']);
});

gulp.task('build', ['lib', 'lib-post', 'css', 'scripts', 'scripts-post']);
