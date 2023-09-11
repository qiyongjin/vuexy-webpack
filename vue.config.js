const path = require('path')
module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8080,
    // proxy: {
    //   '^/api': {
    //     target: process.env.VUE_APP_BASE_URL_API,
    //     ws: true,
    //     changeOrigin: true,
    //     secure:false,
    //     logLevel: "debug",
    //     pathRewrite: {'^/api': '/api'},
    //   }
    // }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
        '@themeConfig': path.join(__dirname, './themeConfig.ts'),
        '@core': path.join(__dirname, './src/@core'),
        '@layouts': path.join(__dirname, './src/@layouts'),
        '@images': path.join(__dirname, './static/images'),
        '@styles': path.join(__dirname, './src/styles/'),
        '@configured-variables': path.join(__dirname, './src/styles/variables/_template.scss'),
        '@axios': path.join(__dirname, './src/plugins/axios'),
        '@validators': path.join(__dirname, './src/@core/utils/validators'),
        'apexcharts': path.join(__dirname, 'node_modules/apexcharts-clevision'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
      },
    },
  },
}
