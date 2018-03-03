// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'normalize.css'// normalize.css 样式格式化
// import './theme/index.css';
import '@/icons' // icon
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss' // global css
import './permission'

Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
