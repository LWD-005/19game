

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      imgSrc:'../../../static/img/'
    }
  }
}
</script>

<style>
body{
  background: #fff;
}
a {
    text-decoration: none;
}
.router-link-active {
    text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.footer_nav footer{
  font-size: .16rem !important;
  position: fixed;
  left: 0;
  bottom: 0;
}
.footer_nav .yd-tabbar-icon{
  width: .32rem;
  height: .32rem;
}
.footer_nav .game .yd-tabbar-icon{
  background: url(../static/img/game.png) no-repeat ;
  background-size: .32rem .32rem;
}
.footer_nav .game.router-link-active .yd-tabbar-icon{
  background: url(../static/img/dgame.png) no-repeat ;
  background-size: .32rem .32rem;
}
.footer_nav .lb .yd-tabbar-icon{
  background: url(../static/img/lb.png) no-repeat ;
  background-size: .32rem .32rem;
}
.footer_nav .lb.router-link-active .yd-tabbar-icon{
  background: url(../static/img/dlb.png) no-repeat ;
  background-size: .32rem .32rem;
}
.footer_nav .wd .yd-tabbar-icon{
  background: url(../static/img/wd.png) no-repeat ;
  background-size: .32rem .32rem;
}
.footer_nav .wd.router-link-active .yd-tabbar-icon{
  background: url(../static/img/dwd.png) no-repeat ;
  background-size: .32rem .32rem;
}
.yd-tabbar-txt{
  font-size: .16rem;
  margin-top: .02rem;
}
.router-link-active .yd-tabbar-txt{
  color: #ff2d2c;
}
/*充值页面(payCenter)下拉箭头样式*/
.yd-accordion-head:after{
  bottom: -.08rem;
}
.yd-accordion-title{
  height: .7rem;
  color: #606060;
  font-size: .22rem;
  min-height: 0;
}
.yd-accordion-head-arrow{
  height: .7rem;
  min-height: 0;
}
.yd-accordion-head-arrow:after{
    border: none;
    width: .18rem;
    height: .1rem;
    background: url(../static/img/payCenter_arrow.png) no-repeat;
    background-size: .18rem .1rem;
}
.yd-accordion-head:after{
  border: .07rem solid #f1f1f2;
}
/*礼包页 礼包领取按钮样式*/
.yd-btn-block{
  margin-top: 0;
}
.yd-popup-content{
  padding-top: .3rem;
}
.exhibitors .yd-slider .yd-slider-pagination{
  display: none;
}
.exhibitors .yd-slider-item{
  width: 65%;
}
.exhibitors .yd-slider{
  margin-top: -.65rem;
}
</style>
