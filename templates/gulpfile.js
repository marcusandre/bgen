
/**
 * Module dependencies.
 */

var gulp = require('gulp');
var header = require('gulp-header');

// enlarged `header`
var enlarged = [
  '/**',
  ' * <%= pkg.name %>',
  ' * <%= pkg.description %>',
  ' * <%= pkg.homepage %>',
  ' * (c) <%= year %> <%= pkg.author %>',
  ' */',
  ''
].join('\n');

// shortened `header`
var shortened = '// <%= pkg.name %> - <%= pkg.homepage %> - <%= pkg.author %>\n';
