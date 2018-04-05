const webpack = require('webpack');

const SERVICE_PORT = {
  production: JSON.stringify(''),
  development: JSON.stringify(':9000')
};

const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.DefinePlugin({
      'SERVICE_PORT': SERVICE_PORT[environment]
    })
  ]
};
