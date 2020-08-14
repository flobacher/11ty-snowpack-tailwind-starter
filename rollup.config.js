import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';

const PLUGINS_BUILD = [babel({ babelHelpers: 'bundled' })];
const PLUGINS_OUTPUT = [terser()];

export default [
  {
    input: 'dist/js/index.js',
    output: [
      {
        file: 'dist/js/index.js',
        format: 'iife',
        plugins: PLUGINS_OUTPUT,
      },
    ],
    plugins: PLUGINS_BUILD,
  },
  {
    input: 'dist/js/about.js',
    output: [
      {
        file: 'dist/js/about.js',
        format: 'iife',
        plugins: PLUGINS_OUTPUT,
      },
    ],
    plugins: PLUGINS_BUILD,
  },
];
