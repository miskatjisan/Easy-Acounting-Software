const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vue()
    .postCss('resources/css/app.css', 'public/css', [
        //
        
    ]);

    
    // module.exports = {
    //     // ... other configurations ...
    //     module: {
    //       rules: [
    //         {
    //           test: /\.scss$/,
    //           use: [
    //             'vue-style-loader',
    //             'css-loader',
    //             'sass-loader',
    //           ],
    //         },
    //         // Other rules for different file types
    //       ],
    //     },
    //     // ... other configurations ...
    //   };
      