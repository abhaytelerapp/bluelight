module.exports = {
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "http": require.resolve("stream-http"),
      "crypto": require.resolve("crypto-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3"),
      "stream": require.resolve("stream-browserify"),
      "fs": false, // fs is not available in the browser
      "net": false, // net is not available in the browser
    }
  }
};
