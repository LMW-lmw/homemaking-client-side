// const path = require('path')
// function resolve(dir) {
//   return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
// }
module.exports = {
  outputDir: './build',
  devServer: {
    hot: true, //自动保存
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000/',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', resolve('./src'))
  //     .set('components', resolve('./src/components'))
  //     .set('assets', resolve('./src/assets'))
  //     .set('commonjs', resolve('./src/commonjs'))
  //     .set('network', resolve('./src/network'))
  //     .set('views', resolve('./src/views'))
  //   //set第一个参数：设置的别名，第二个参数：设置的路径
  // }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('views', '@/views')
  // }
}
