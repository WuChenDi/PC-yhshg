// const docsLoader = require.resolve('./doc-loader')

module.exports = (isDev) => {
  return {
    // 去除template后面空格问题
    preserveWhitepace: true,
    // 打包css样式文件到单独文件中
    extractCSS: !isDev,
    // 实现cssModules功能
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    },
    // 热重载功能(根据环境变量生成)
    // hotReload: true
    // preLoader: {},
    // postLoader: {}
  }
}