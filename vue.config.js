// const path = require('path')
// function resolve(dir) {
//   return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
// }
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  outputDir: './build',
  devServer: {
    hot: true //自动保存
    // proxy: {
    //   // 配置跨域
    //   '^/api': {
    //     target: 'http://localhost:8888/',
    //     pathRewrite: {
    //       '^/api': ''
    //     },
    //     changeOrigin: true
    //   }
    // }
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true //生产环境自动删除console
            },
            warnings: false
          },
          sourceMap: false,
          parallel: true //使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
        })
      )
      let externals = {
        vue: 'Vue',
        vuex: 'Vuex',
        'vue-router': 'VueRouter',
        axios: 'axios',
        dayjs: 'dayjs'
      }
      config.externals = externals
    }
  }
}
