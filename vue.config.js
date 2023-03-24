const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = {
  // 注意：把productionSourceMap值改为false。不然会导致源码暴露。
  productionSourceMap: false,

  configureWebpack: {
    plugins: [
      AutoImport({resolvers: [ElementPlusResolver()]}),
      Components({resolvers: [ElementPlusResolver()]}),
    ]
  }
};
