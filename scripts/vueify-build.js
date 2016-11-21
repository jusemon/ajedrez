var fs = require('fs');
var browserify = require('browserify');
var vuefy = require('vueify');

browserify('www/js/main.js')
    .transform(vuefy)
    .bundle()
    .pipe(fs.createWriteStream('www/js/bundle.js'));