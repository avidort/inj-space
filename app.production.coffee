axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'

module.exports =
  ignores: ['README.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

  extensions: [
    js_pipeline(files: 'assets/js/*.js', out: 'js/build.js', minify: true, hash: true),
    css_pipeline(files: ['assets/css/main.css', 'assets/css/font-awesome.min.css'], out: 'css/build.css', minify: true, hash: true)
  ]