module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers: ['last 2 versions', '> 1%', 'android >= 2.1', 'chrome >= 18', 'firefox >= 4', 'safari >= 9', 'ios >= 7'],
      },
    }],
  ]
  plugins: [
    [
      ["@babel/plugin-transform-runtime",
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: false,
        useESModules: true,
      }
    ]
    ]
  ]
};