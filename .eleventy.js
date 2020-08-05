const { Liquid } = require('liquidjs');
const ErrorOverlay = require('eleventy-plugin-error-overlay');
// const fs = require('fs');

const liquidOptions = {
  extname: '.liquid',
  strict_filters: true,
  root: ['views/_includes'],
};

const liquidEngine = new Liquid(liquidOptions);

module.exports = function (config) {
  config.setLibrary('liquid', liquidEngine);

  // Layout aliases
  config.addLayoutAlias('default', 'layouts/base.liquid');

  // 11ty error overlay
  // https://github.com/stevenpetryk/eleventy-plugin-error-overlay
  config.addPlugin(ErrorOverlay);

  // 404
  // config.setBrowserSyncConfig({
  //   callbacks: {
  //     ready: function (err, browserSync) {
  //       const content_404 = fs.readFileSync('dist/404.html');

  //       browserSync.addMiddleware('*', (req, res) => {
  //         // Provides the 404 content without redirect.
  //         res.write(content_404);
  //         res.end();
  //       });
  //     },
  //   },
  // });

  return {
    dir: {
      input: 'src/views',
      output: 'dist',
    },
    passthroughFileCopy: true,
    templateFormats: ['md', 'liquid'],
    htmlTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
  };
};
