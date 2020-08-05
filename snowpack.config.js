module.exports = {
  scripts: {
    'build:css': 'postcss',
    'build:css::watch': '$1 --watch',
    'run:11ty': 'eleventy',
    'run:11ty::watch': '$1 --watch',
  },
  plugins: ['@snowpack/plugin-babel', '@snowpack/plugin-parcel'],
  mount: {
    dist: '/',
    public: '/',
    src: '/',
  },
  installOptions: {
    NODE_ENV: true,
  },
  buildOptions: {
    minify: true,
    clean: true,
    baseUrl: '/',
  },
  devOptions: {
    port: 4300,
    bundle: false,
    out: 'dist',
  },
};
