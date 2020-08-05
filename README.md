# 📦 11st-Starter-Kit

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ec6da587-72ba-490a-ad4b-167802a9c197/deploy-status)](https://app.netlify.com/sites/11st-starter-kit/deploys)

[11ty](https://www.11ty.dev/), powered by [Snowpack](https://www.snowpack.dev/)
with [tailwindcss](https://tailwindcss.com).

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
[@snowpack/plugin-parcel](https://github.com/pikapkg/create-snowpack-app/tree/master/packages/plugin-parcel)
is added to the `snowpack.config.json` config file.

## License

This project is open source and available under the MIT License.
