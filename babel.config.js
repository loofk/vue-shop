module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage'
      }
    ]
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    [
      "@babel/plugin-transform-runtime",
      {
        regenerator: false,
        useESModules: true
      }
    ]
  ]
}
