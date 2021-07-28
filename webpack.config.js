const path = require('path');

module.exports = {
  entry: './src/asset/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public/scripts'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    }, {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    }],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/scripts/',
    // historyApiFallback: {
    //   index: 'src/index.html',
    // },
  },
  devtool: 'source-map',
};
