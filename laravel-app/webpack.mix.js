let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .browserSync({
      proxy: 'localhost:8000',  // The URL of your Laravel server
      files: [
         'app/**/*.php',
         'resources/views/**/*.php',
         'resources/js/**/*.vue',
         'public/css/**/*.css',
         'public/js/**/*.js'
      ],
      open: false,
   });
