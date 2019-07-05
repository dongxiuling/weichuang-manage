import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

Vue.use(VueAxios, axios)
// set ElementUI lang to EN
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false
// Vue.prototype.$axios = axios    
// Vue.prototype.qs = qs           

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
