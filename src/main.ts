import Vue from 'vue'
import store from './store/index'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.use(ElementUI, {locale})

new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
