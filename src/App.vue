

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
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
</style>
