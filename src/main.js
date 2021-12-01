import Vue from 'vue'
import App from './App.vue'
import PortalVue from 'portal-vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

// Importar arquivos CSS Bootstrap e BootstrapVue (a ordem é importante) 
import  'bootstrap/dist/css/bootstrap.css' 
import  'bootstrap-vue/dist/bootstrap-vue.css'

// Disponibilize BootstrapVue em todo o seu projeto
Vue.use (BootstrapVue)
// Opcionalmente, instale o plug-in de componentes do ícone BootstrapVue 
Vue.use (IconsPlugin)


Vue.use(PortalVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
