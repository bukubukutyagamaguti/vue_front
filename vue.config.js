module.exports = {
    devServer: {
      proxy: {
        "/api/": {
          target: import.meta.env.VITE_BASE_URL,
        }
      }
    }
  };