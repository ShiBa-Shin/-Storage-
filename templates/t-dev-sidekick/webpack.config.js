const path = require('path')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const CompressionPlugin = require("compression-webpack-plugin")
const zlib = require("zlib")

module.exports = {
  entry: './src/script.ts',
  watch: true,
  devtool: 'eval-source-map',

  output: {
    filename: 'bundle.js',
    publicPath: 'public',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader']
      },

      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 1209,
    compress: true
  },

  resolve: {
    extensions: [
      '.ts',
      '.js',
      '.sass',
      '.scss'
    ]
  },

  plugins: [
    // https://www.npmjs.com/package/circular-dependency-plugin
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      include: /src/,
      failOnError: false,
      allowAsyncCycles: false,
      cwd: process.cwd(),
    }),

    //https://www.npmjs.com/package/compression-webpack-plugin
    new CompressionPlugin({
      filename: "[path][base].br",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    })
  ]
}