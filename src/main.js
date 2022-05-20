import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/Toast/index.js'

Vue.config.productionTip = false
//注册toast
Vue.use(toast);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//全局bus总线 
Vue.prototype.$bus = new Vue();

//全局钩子
router.beforeEach((to, from, next) => {
    // console.log(to.matched[0].path)
    next();
});

