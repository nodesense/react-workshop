var webpack = require('webpack');
var path = require('path');

// ../ works as well
var APP_DIR = path.resolve(__dirname, '../../src');

var config = {
  
  entry: {
    app: APP_DIR + '/main.js',
  }, 

  output: {
    publicPath: '/',
    filename: "app.bundle.js"
  },
 
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loaders: [ "babel-loader"]
      }
    ]
  },
  
  //debug, es6 to es5 mapping
  devtool: 'source-map',

  plugins: [
    
  ],

  devServer: {
    contentBase: APP_DIR,
    port: 8080,

    historyApiFallback: {
      index: '/'
    }
  }

};

module.exports = config;