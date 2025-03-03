import path from 'path';
import { fileURLToPath } from 'url';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './index.js', // Adjust to your entry file name
  target: 'node', // Target Node.js environment
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },
  externals: [nodeExternals()], // Exclude Node.js modules from bundling
  module: {
    rules: [
      {
        test: /\.m?js$/, // Handle ES module files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    fallback: {
        "zlib": require.resolve("browserify-zlib"),
        "querystring": require.resolve("querystring-es3"),
        "path": require.resolve("path-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "http": require.resolve("stream-http"),
        "fs": false, 
        "net": false,
      }
  },
  mode: 'development', // Change to 'production' for optimization
};
