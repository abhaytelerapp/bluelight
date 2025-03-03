module.exports = {
    target: "node",  // Keep this if it's for Node.js
    resolve: {
      fallback: {
        "zlib": require.resolve("browserify-zlib"),
        "crypto": require.resolve("crypto-browserify"),
        "path": require.resolve("path-browserify"),
        "stream": require.resolve("stream-browserify"),
        "querystring": require.resolve("querystring-es3"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "url": require.resolve("url/"),
        "buffer": require.resolve("buffer/"),
        "util": require.resolve("util/"),
        "fs": false,  // Node.js modules that can't be polyfilled
        "net": false, 
        "tls": false,
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
      }),
    ],
};
