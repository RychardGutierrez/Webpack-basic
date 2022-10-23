// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    clean: true,
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: true,
    host: 'localhost',
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[fullhash].css',
      ignoreOrder: false,
    }),
    new CopyPlugin({
      patterns: [{ from: './src/assets', to: 'assets' }],
    }),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: false,
        },
      },
      {
        test: /\.css$/i,
        exclude: /index.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /index.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  config.mode = 'production';
  return config;
};
