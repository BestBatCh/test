import Vue from 'vue'
import App from './App.vue' 
import VueRouter from 'vue-router'
import Vuex  from 'vuex'
/***
 *  vuex 状态管理
 *    npm  install  vuex -s
 * 
 * 
 */

Vue.use(Vuex)
Vue.use(VueRouter)
const store = new Vuex.Store({
  state:{
    count:1
  },
  getters:{
      getCount(state){
        console.log(1111)
        if(state.count>0){
          console.log(111122)
          return state.count
        }else{
          return 1;
        }
      }
  },
  mutations:{   //  === methods
    // 这个里面得方法 里面得所有代码都必须是同步的
      a1(state,info){
        console.log(info.name+"修改数据开始")
        state.count++
        console.log(info.name+"修改数据结束")
      }
  },
  actions:{
    aa2(context,info){
      console.log("aciton...")
      // 异步的代码写在这里
      // 然后继续调用 mutations 中的 increment 方法
      context.commit('a1',info)
    }
  }
})
const router = new VueRouter({
  routes:[
    {path:"/",components:{
      a:()=>import('./components/login.vue'),
      b:()=>import('./components/register.vue'),
    }}
  ]
})
new Vue({
  router,
  store,  //     $store 
  render: h => h(App),
}).$mount('#app')


//  脚手架  依赖
// vue-router
// axios
// vue-resource
