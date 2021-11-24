module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "enterSarawak"
      return args
    })
  },
  devServer: {
    proxy: {
      "^/api/account": {
        onProxyReq: function(proxyReq) {
          proxyReq.setHeader("origin", "https://entersarawak.socoe.club")
        },
        target: "https://entersarawak.socoe.club"
      },
      "^/accountsApi": {
        target: "https://account.ukuya.net/",
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: { "^/accountsApi": "/api" }
      },
      "^/api": {
        onProxyReq: function(proxyReq) {
          proxyReq.setHeader("origin", "https://esapi.socoe.club")
        },
        target: "https://esapi.socoe.club",
        pathRewrite: { "^/api": "/" }
      }
    }
  },
  transpileDependencies: [
    "vue-echarts",
    "resize-detector",
    "vuetify",
    "vue-tel-input-vuetify"
  ]
}
