let mix = require('laravel-mix');


mix.combine([
'node_modules/jquery/dist/jquery.js'
], 'js/app.js');

mix.sass('src/app.scss','css/app.css');
