import Vue from 'vue'
import Router from 'vue-router'
import game from '@/components/game'
import libao from '@/components/libao'
import wode from '@/components/wode'
import xgmm from '@/components/xgmm'


Vue.use(Router)

Vue.component("logo",{
  template:'<img src="../../static/img/logo.png">'
})
Vue.component('my-nav',{
  template:'<yd-tabbar><yd-tabbar-item title="游戏" link="/" class="game"></yd-tabbar-item><yd-tabbar-item title="礼包" link="/libao" class="lb"></yd-tabbar-item><yd-tabbar-item title="我的" link="/xgmm" class="wd"></yd-tabbar-item></yd-tabbar>'
})
new Vue({
  el:".footer_nav"
})

export default new Router({
  linkActiveClass: 'active',
  routes: [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/',         //链接路径
      name: 'game',     //路由名称，
      component: game   //对应的组件模板
    },{
      path:'/libao',
      name:'libao',
      component:libao
    },{
      path:'/wode',
      name:'wode',
      component:wode,
      children:[
        // {path:"",component:wode},
        {path:"",component:xgmm},
        
      ]
    },{
      path:'/xgmm',
      name:'xgmm',
      component:xgmm,
    }
  ],
  components:{
    xgmm
  }

})
