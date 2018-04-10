import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/game'
import Giftbag from '@/components/giftbag'
import Personal from '@/components/personal'
import Changepwd from '@/components/changepwd'
import Nav from '@/components/nav'


Vue.use(Router)

Vue.component('my-nav',Nav)


export default new Router({
  linkActiveClass: 'active',
  routes: [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/',         //链接路径
      name: 'game',     //路由名称，
      component: Game   //对应的组件模板
    },{
      path:'/giftbag',
      name:'giftbag',
      component:Giftbag
    },{
      path:'/personal',
      name:'personal',
      component:Personal
    },{
      path:'/changepwd',
      name:'changepwd',
      component:Changepwd,
    }
  ],
  components:{
    Nav
  }

})
