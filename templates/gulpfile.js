
/**
 * Module dependencies.
 */

var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');
var stylus = require('gulp-stylus');
var cssmin = require('gulp-cssmin');
var header = require('gulp-header');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

/**
 * File `headers`.
 */

var enlarged = [
  '/**',
  ' * <%= pkg.name %>',
  ' * <%= pkg.description %>',
  ' * <%= pkg.homepage %>',
  ' * (c) <%= year %> <%= pkg.author %>',
  ' */',
  ''
].join('\n');

var shortened = [
  '/* <%= pkg.name %>',
  '<%= pkg.homepage %>',
  '<%= pkg.author %> */\n'
].join(' - ');

/**
 * Files.
 */

var files = {
  scripts: ['./js/main.js'],
  styles: ['./css/**/*.styl'],
  out: './dist'
};

/**
 * Task: JS.
 */

gulp.task('js', function(){
  var year = new Date().getFullYear();
  var pkg = require('./package.json');
  var out = files.out + '/js';

  gulp
    .src(files.scripts)
    .pipe(concat('scripts.js'))
    .pipe(header(enlarged, { pkg: pkg, year: year }))
    .pipe(gulp.dest(out))
    .pipe(uglify())
    .pipe(header(shortened, { pkg: pkg }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(out));
});

/**
 * Task: CSS.
 */

gulp.task('css', function(){
  var year = new Date().getFullYear();
  var pkg = require('./package.json');
  var out = files.out + '/css';

  gulp
    .src(files.styles)
    .pipe(stylus())
    .pipe(prefix())
    .pipe(header(enlarged, { pkg: pkg, year: year }))
    .pipe(gulp.dest(out))
    .pipe(cssmin())
    .pipe(header(shortened, { pkg: pkg }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(out));
});

/**
 * Task: Default.
 */

gulp.task('default', ['css', 'js'], function(){
  console.log('FIN!');
});
