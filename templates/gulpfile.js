
/**
 * Module dependencies.
 */

var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');
var browserify = require('gulp-browserify');
var stylus = require('gulp-stylus');
var cssmin = require('gulp-cssmin');
var header = require('gulp-header');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var now = new Date();
var date = [now.getDay(), now.getMonth(), now.getFullYear()].join('.');

/**
 * File `headers`.
 */

var enlarged = [
  '/**',
  ' * <%= pkg.name %>',
  ' * <%= pkg.description %>',
  ' * (c) <%= date %> - v<%= pkg.version %>',
  ' */\n',
].join('\n');

var shortened = [
  '/* <%= pkg.name %> - <%= date %> - v<%= pkg.version %> */\n',
];

/**
 * Files.
 */

var files = {
  scripts: ['./assets/scripts/main.js'],
  styles: ['./assets/styles/**/*.styl'],
  out: './build'
};

/**
 * Browers
 */

var browsers = [
  '> 1%',
  'last 2 versions',
  'Firefox ESR',
  'IE 9'
];

/**
 * Task: JS.
 */

gulp.task('js', function(){
  var pkg = require('./package.json');
  var out = files.out + '/scripts';

  gulp
    .src(files.scripts)
    .pipe(browserify())
    .pipe(header(enlarged, { pkg: pkg, date: date }))
    .pipe(gulp.dest(out))
    .pipe(uglify())
    .pipe(header(shortened, { pkg: pkg, date: date }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(out));
});

/**
 * Task: CSS.
 */

gulp.task('css', function(){
  var pkg = require('./package.json');
  var out = files.out + '/styles';

  gulp
    .src(files.styles)
    .pipe(stylus())
    .pipe(prefix({ browsers: browsers }))
    .pipe(header(enlarged, { pkg: pkg, date: date }))
    .pipe(gulp.dest(out))
    .pipe(cssmin())
    .pipe(header(shortened, { pkg: pkg, date: date }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(out));
});

/**
 * Task: Watch
 */

gulp.task('watch', function(){
  gulp.watch(files.styles, ['css']);
  gulp.watch(files.scripts, ['js']);
});

/**
 * Task: Default.
 */

gulp.task('build', ['css', 'js'], function(){
  console.log('FIN!');
});
