import Vue from 'vue'
import VueRouter  from  'vue-router'
import register from  '../components/register.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes:[
    {path:"/login",component: resolve => require(['../components/login.vue'], resolve)},
    {path:"/register",component:register}
  ]
})
export default router 