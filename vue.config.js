module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/scss/core/index.scss";',
      },
    },
  },
  assetsDir: 'assets',
};
