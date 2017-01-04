const webpack = require('webpack');
const path = require('path');
const packageJson = require('./package.json');

const stage = process.env.NODE_ENV;
const isInteg = stage === 'integration';
const isProd = stage === 'production';
const isProdLike = (isProd || isInteg);

// Determine packing variables
const apiUrl = 'https://badger.atsid.net/api';
const nodeEnv = isProdLike ? 'production' : stage || 'development';
const { version } = packageJson;
const devtool = isProdLike ? 'cheap-source-map' : 'eval-source-map';
const githubClientId = process.env.GITHUB_CLIENT_ID;

module.exports = {
  devtool,
  context: path.join(__dirname, 'src'),
  entry: {
    javascript: './app.jsx',
    html: [
      './index.html',
      './login.html',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './app.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    fallback: [path.join(__dirname, 'node_modules')],
  },
  moduleLoader: {
    fallback: [path.join(__dirname, 'node_modules')],
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loaders: ['file?name=[name].[ext]'],
      },
      {
        test: /\.s(a|c)ss$/,
        // loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        loader: 'ignore',
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'ignore',
      },
      {
        test: /src\/.*\.js(x|)?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      // the url-loader uses DataUrls.
      // the file-loader emits files.
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
    ],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      saveAs: 'imports?this=>global!exports?global.saveAs!filesaver.js',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
        API_URL: JSON.stringify(apiUrl),
        VERSION: JSON.stringify(version),
        GITHUB_CLIENT_ID: JSON.stringify(githubClientId)
      },
    }),
    // new LodashModuleReplacementPlugin(),
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};
