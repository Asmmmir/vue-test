const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    }
  }
})
