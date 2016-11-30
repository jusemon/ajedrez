var fs = require('fs');
var browserify = require('browserify');
var vuefy = require('vueify');

browserify('www/js/index.js')
    .transform(vuefy)
    .bundle()
    .pipe(fs.createWriteStream('www/js/bundle.js'));