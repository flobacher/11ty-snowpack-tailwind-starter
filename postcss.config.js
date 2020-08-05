const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const importUrl = require('postcss-import-url');
const cssnano = require('cssnano');

const plugins = [
  importUrl(),
  postcssImport({
    path: 'src/css',
  }),
  tailwindcss(),
  postcssPresetEnv({ stage: 3 }),
];

if (process.env.NODE_ENV === 'production') plugins.push(cssnano());

module.exports = {
  map: false,
  plugins,
};
