console.log('NODE_ENV', process.env.NODE_ENV);

const snowpackConfig = {
  scripts: {
    'build:css': 'postcss',
    'build:css::watch': '$1 --watch',
    // 'bundle:*': '@snowpack/plugin-webpack',
  },
  install: [
    // Ad non-JS static assets here e.g. css files (supports globs)
  ],
  plugins: [
    ['@snowpack/plugin-run-script', { cmd: 'tsc --noEmit', watch: '$1 --watch' }],
    [
      '@snowpack/plugin-run-script',
      {
        cmd: "eslint 'src/**/*.{js,jsx,ts,tsx}'",
        // Use npm package "watch" to run on every file change
        watch: 'watch "$1" src',
      },
    ],
  ],
  mount: {
    public: '/',
    'src/css': '/css',
    'src/js': '/js',
  },
  installOptions: {
    NODE_ENV: true,
    installTypes: true,
  },
  buildOptions: {
    bundle: true,
    minify: false, // minification happens at the bundle step
    clean: false, // happens in a seperate step to have more control
    baseUrl: '/',
  },
  devOptions: {
    open: 'none',
    port: 4300,
    bundle: false,
    out: 'dist',
  },
};

if (process.env.NODE_ENV === 'development') {
  const devScripts = { 'run:11ty': 'eleventy', 'run:11ty::watch': '$1 --watch' };
  snowpackConfig.scripts = { ...snowpackConfig.scripts, ...devScripts };

  const devMount = {
    views: '/',
  };

  snowpackConfig.mount = { ...snowpackConfig.mount, ...devMount };
}

module.exports = snowpackConfig;
