// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import router from './router';
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
import {TabBar, TabBarItem} from 'vue-ydui/dist/lib.rem/tabbar'
import {InfiniteScroll} from 'vue-ydui/dist/lib.rem/infinitescroll'

Vue.component(InfiniteScroll.name, InfiniteScroll)
Vue.component(TabBar.name, TabBar)
Vue.component(TabBarItem.name, TabBarItem)
Vue.config.productionTip = false
Vue.use(YDUI)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
