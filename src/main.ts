import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'
import './assets/css/icon/iconfont.css'
import './assets/css/index.less'

import router from './router/index'
import store, { setupStore } from './store/index'

import { registerApp } from './global/index'
import { directive } from './global/directive/index'
const app = createApp(App)
directive(app)
registerApp(app)
setupStore()
app.use(router)
app.use(store)
app.mount('#app')
