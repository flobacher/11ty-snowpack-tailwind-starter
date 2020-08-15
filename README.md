# 📦 11ty-snowpack-starter by lean-coders

[11ty](https://www.11ty.dev/), powered by [Snowpack](https://www.snowpack.dev/).
Get blazing fast updates if only altering/adding content thx to eleventy. Get fast rebuilds in dev-mode thx to snowpack and bundle only for production.

In addition the following libraries / tools are installed and configured:

- [postcss](https://postcss.com): []()optimize imports, setup [tailwindcss](https://tailwindcss.com), transpile css for older browsers with [postcss-preset-env]() and minify via [cssnano]() in production
- [rollup](https://rollup.com): bundle for production via rollup for optimal performance, uses [babel](https://babel.com) to transpile code for old browsers with the help of preset-env (only in production) and [terser](http://terser.com) to minify
- [typescript](https://typescriptlang.com): optionally static type-checks
- [prettier](https://prettier.io): never manually format your code again
- [eslint](https://eslint.io): lint your code to avoid common mistakes (preconfigured for typescript)

## Install Dependencies

First, make sure you have `npm` (packaged with
[Node.js](https://nodejs.org)) installed, then run `npm i` to install the
dependencies.

## Available Scripts

### Development

```bash
# runs the app in the development mode.
npm start
```

Open http://localhost:4300 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### Production

```bash
# builds a static copy of your site to the `dist/` folder.
npm run build
```

Your app is ready to be deployed!

To increase the production performance
[@snowpack/plugin-rollup](https://www.npmjs.com/package/@snowpack/plugin-webpack)
is added to the `snowpack.config.json` config file.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
This project is open source and available under the MIT License.
