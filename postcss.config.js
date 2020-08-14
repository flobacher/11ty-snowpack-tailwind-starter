const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const postcssImportUrl = require('postcss-import-url');
const cssnano = require('cssnano');

const plugins = [
  postcssImport({
    path: 'src/css',
  }),
  postcssImportUrl(),
  tailwindcss(),
  postcssPresetEnv({ stage: 3 }), // basically autoprefixer but would allow for more features to transpile down.. not really needed for tailwind
];

if (process.env.NODE_ENV === 'production') plugins.push(cssnano());

module.exports = {
  map: false,
  plugins,
};
