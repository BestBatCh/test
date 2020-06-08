import Vue from 'vue'
import App from './App.vue'
import router from './router' 
import axios from 'axios'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.config.productionTip = false 
Vue.prototype.$axios=axios
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


//  脚手架  依赖
// vue-router
// axios
// vue-resource
