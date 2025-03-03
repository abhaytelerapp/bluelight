module.exports = {
    target: "node",
    resolve: {
      fallback: {
        "zlib": require.resolve("browserify-zlib"),
        "crypto": require.resolve("crypto-browserify"),
        "path": require.resolve("path-browserify"),
        "stream": require.resolve("stream-browserify"),
        "querystring": require.resolve("querystring-es3"),
        "http": require.resolve("stream-http"),
        "fs": false, // fs is a Node.js module that cannot be polyfilled for the browser
        "net": false, // Not available in browsers
        "tls": false, // Not available in browsers
      }
    }
  };
  