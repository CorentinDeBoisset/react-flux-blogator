var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    babelify = require('babelify'),
    size = require('gulp-size');
    uglify = require('gulp-uglify'),
    stylus = require('gulp-stylus'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat');

gulp.task('bundle', function() {
    return browserify('./src/client.jsx')
        .transform('babelify', {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(size())
        .pipe(gulp.dest('./www'));
});

gulp.task('stylus', function () {
  gulp.src('./src/style/app.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({'include css': true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./www'));
});

gulp.task('vendors-css', function(){
    gulp.src([
        './bower_components/reflex-grid/css/reflex.min.css',
        './bower_components/normalize-css/normalize.css'
    ])
        .pipe(concat('vendors.css'))
        .pipe(gulp.dest('./www'))
});

gulp.task('default', ['bundle', 'stylus', 'vendors-css'], function () {
    gulp.watch(['src/**/*.js', 'src/**/*.jsx'],['bundle']);
    gulp.watch(['src/**/*.styl', 'src/**/*.css'],['stylus']);
});
