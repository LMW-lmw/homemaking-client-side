// const path = require('path')
// function resolve(dir) {
//   return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
// }
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const PurgeCssPlugin = require('purgecss-webpack-plugin')
// const CompressionPlugin = require('compression-webpack-plugin')
const glob = require('glob')
const resolveApp = require('./path')
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
      // config.plugins.push(
      //   new UglifyJsPlugin({
      //     uglifyOptions: {
      //       compress: {
      //         drop_debugger: true,
      //         drop_console: true //生产环境自动删除console
      //       },
      //       warnings: false
      //     },
      //     sourceMap: false,
      //     parallel: true //使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
      //   })
      // )
      let optimization = {
        minimize: true,
        usedExports: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              warnings: false,
              extractComments: false,
              terserOptions: {
                compress: {
                  drop_console: true,
                  drop_debugger: false,
                  arguments: false,
                  dead_code: true,
                  pure_funcs: ['console.log']
                },
                mangle: true,
                toplevel: true
              }
            }
          })
        ]
      }
      Object.assign(config, {
        optimization
      })
      config.plugins.push(
        new PurgeCssPlugin({
          paths: glob.sync(`${resolveApp('./src')}/**/*`, { nodir: true }),
          safelist: function () {
            return {
              standard: ['body', 'html']
            }
          }
        })
      )
      // config.plugins.push(
      //   new CompressionPlugin({
      //     test: /\.(css|js|ts)$/i,
      //     threshold: 10240,
      //     minRatio: 0.8,
      //     algorithm: 'gzip'
      //   })
      // )
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
