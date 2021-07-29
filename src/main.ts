import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

import { registerApp } from './global/index'

// import LmwRequest from './service/index'
const app = createApp(App)

// interface requsetType {
//   data: any
//   returnCode: string
//   success: boolean
// }
// // 单个请求的拦截
// LmwRequest.get<requsetType>({
//   url: 'home/multidata'
// }).then((res) => {
//   console.log(res.data)
// })
registerApp(app)
app.use(router)
app.use(store)
app.mount('#app')
