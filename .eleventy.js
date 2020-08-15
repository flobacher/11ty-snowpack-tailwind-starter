const { Liquid } = require('liquidjs');
const ErrorOverlay = require('eleventy-plugin-error-overlay');
const htmlMinifier = require('html-minifier');
// const fs = require('fs');

const isProduction = process.env.NODE_ENV === 'production';
const outputDir = isProduction ? 'dist' : 'views';

const liquidOptions = {
  extname: '.html',
  strict_filters: true,
  root: ['views/_includes'],
};

const liquidEngine = new Liquid(liquidOptions);

module.exports = function (eleventyConfig) {
  eleventyConfig.setLibrary('liquid', liquidEngine);

  // Layout aliases
  eleventyConfig.addLayoutAlias('default', 'layouts/default.html');

  // 11ty error overlay
  // https://github.com/stevenpetryk/eleventy-plugin-error-overlay
  eleventyConfig.addPlugin(ErrorOverlay);

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
  eleventyConfig.addPassthroughCopy('content/images');
  if (isProduction) {
    eleventyConfig.addTransform('htmlMinifier', (content, outputPath) => {
      if (outputPath.endsWith('.html')) {
        return htmlMinifier.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
        });
      }
      return content;
    });
  }

  return {
    dir: {
      input: 'src/views',
      output: outputDir,
      data: '../../content/data', // relative to the input directory
    },
    passthroughFileCopy: true,
    templateFormats: ['md', 'liquid', 'html'],
    htmlTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
  };
};
