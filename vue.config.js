module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      disableHostCheck: true,
      sockPort: 8001,
      sockHost: 'localhost',
      port: 8001,
    },
    externals: [

    ],
    output: {
      jsonpFunction: 'vue2-vuetify-app-template',
      devtoolNamespace: 'vue2-vuetify-app-template',
    },
    resolve: {
      extensions: [ '.js', '.json', '.vue' ],
      alias: {

      },
    },
  },
  filenameHashing: false,
  transpileDependencies: [ 'vuetify' ],
};
