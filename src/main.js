import Vue from 'vue'
import App from './App.vue'
import PortalVue from 'portal-vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import router from './routes/router'
import  'bootstrap/dist/css/bootstrap.css' 
import  'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use (BootstrapVue)
Vue.use (IconsPlugin)


Vue.use(PortalVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
