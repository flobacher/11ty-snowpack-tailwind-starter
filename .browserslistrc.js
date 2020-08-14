// This file is currently used by autoprefixer to adjust CSS to support the below specified browsers
// For additional information regarding the format and rule options, please see:
// https://github.com/browserslist/browserslist#queries

module.exports = {
  development: ['last 1 Chrome version', 'last 1 firefox version'],
  production: ['last 2 versions', 'not dead', 'Firefox ESR', 'IE 11'],
};
