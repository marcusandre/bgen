
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
 * Task: JS.
 */

gulp.task('js', function(){
  var pkg = require('./package.json');
  var out = files.out + '/js';

  gulp
    .src(files.scripts)
    .pipe(concat('scripts.js'))
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
  var out = files.out + '/css';

  gulp
    .src(files.styles)
    .pipe(stylus())
    .pipe(prefix())
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
