module.exports = {
    devServer: {
      proxy: {
        "/api/": {
          target: "http://127.0.0.6:8000/api/v1/",
        }
      }
    }
  };