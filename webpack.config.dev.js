// plugin
var webpack = require('webpack');
// copy index.html
var HtmlWebpackPlugin = require('html-webpack-plugin');
// moz, apple, etc
var autoprefixer = require('autoprefixer');
//
var path = require('path');

module.exports = {
  //
  devtool: 'cheap-module-eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  // no build info
  entry: './src/index',

  output: {
    path: `${__dirname}/src`, // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true
    }),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoEmitOnErrorsPlugin(),

    new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    })
  ],

  module: {
    // test js, jsx, babel loader, exclude
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};
