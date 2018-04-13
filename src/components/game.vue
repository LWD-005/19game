<template>
  <div class="index">
    <!-- 首页轮播图 -->
    <div class="banner">
      <yd-slider autoplay="3000">
        <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="../../static/img/game_banner.png">
            </a>
        </yd-slider-item>
        <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="../../static/img/game_banner.png">
            </a>
        </yd-slider-item>
        <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="../../static/img/game_banner.png">
            </a>
        </yd-slider-item>
        <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="../../static/img/game_banner.png">
            </a>
        </yd-slider-item>
      </yd-slider>
    </div>
    <!-- 首页内容 -->
    <div class="sy_wrap">
      <div class="wrap_nav">
        <div class="wrap_icon">
          <router-link :to="{path:'/download'}">
            <img src="../../static/img/news.png">
            <p class="wrap_bt">新闻</p>
          </router-link>
        </div>
        <div class="wrap_icon">
          <a href="http://">
            <img src="../../static/img/kaifu.png">
            <p class="wrap_bt">开服</p>
          </a>
        </div>
        <div class="wrap_icon">
          <a href="http://">
            <img src="../../static/img/huodong.png">
            <p class="wrap_bt">活动</p>
          </a>
        </div>
        <div class="wrap_icon">
          <a href="http://">
            <img src="../../static/img/miaosha.png">
            <p class="wrap_bt">秒杀</p>
          </a>
        </div>
      </div>
      <div class="sy_hero">
        <div class="hero_icon">
          <div class="hero_img">
            <img src="../../static/img/hero_icon.png">
          </div>
          <p class="hero_bt">青云九天</p>
          <p class="hreo_rl">348m</p>
          <p class="hreo_start"><span class="dian_star"></span><span class="dian_star"></span><span class="dian_star"></span><span class="dian_star"></span><span class="dian_star"></span><span class="hero_pf">9.1</span></p>
          <a href="" class="btn btn-danger hero_btn">下载</a>
        </div>
        <div class="hero_icon">
          <div class="hero_img">
            <img src="../../static/img/hero_icon.png">
          </div>
          <p class="hero_bt">青云九天</p>
          <p class="hreo_rl">348m</p>
          <p class="hreo_start"><span class="dian_star"></span><span class="dian_star"></span><span class="dian_star"></span><span class="dian_star"></span><span class="dian_star"></span><span class="hero_pf">9.1</span></p>
          <a href="" class="btn btn-danger hero_btn">下载</a>
        </div>
        <div class="hero_icon">
          <div class="hero_img">
            <img src="../../static/img/hero_icon.png">
          </div>
          <p class="hero_bt">青云九天</p>
          <p class="hreo_rl">348m</p>
          <p class="hreo_start"><span class="dian_star"></span><span class="dian_star"></span><span class="dian_star"></span><span class="dian_star"></span><span class="dian_star"></span><span class="hero_pf">9.1</span></p>
          <a href="" class="btn btn-danger hero_btn  hero_jx">继续</a>
        </div>
      </div>
      <!-- 首页列表 -->
      <div class="sy_list">
         <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
            <yd-list theme="2" slot="list">
              <div class="list_hero" v-for="(item, index) in list" :key="index">
                <div class="list_img"><img :src="item.img"></div>
                <div class="hero_wz" v-if="item.btn_zt==1">
                    <p class="list_tit">{{item.title}}</p>
                      <div class="list_zt">
                      <p class="xz_zt"><span class="xzsd">{{item.xzsd}}MB<span class="jxzsd">+{{item.jxzsd}}MB/s</span></span><span class="xzjd">{{item.xzjd}}</span></p>
                      <p class="xz_jdt"><yd-progressbar type="line" :progress="item.progress" trail-width="1" trail-color="#fe814a"></yd-progressbar></p>
                    </div>
                </div>
                <div class="hero_wz" v-else-if="item.btn_zt==2">
                    <p class="list_tit">{{item.title}}</p>
                    <div class="list_zt">
                      <p class="xz_zt"><span class="zt_sp">已暂停</span><span class="xzjd">{{item.xzjd}}</span></p>
                      <p class="xz_jdt"><yd-progressbar type="line" :progress="item.progress" trail-width="1" trail-color="#fe814a"></yd-progressbar></p>
                      
                    </div>
                </div>
                <div class="hero_wz" v-else>
                    <p class="list_tit">{{item.title}}</p>
                    <p class="list_xz"><span class="xz_l">{{item.xzl}}</span>万次下载</p>
                    <div class="list_zt">
                        <p class="hero_jj">{{item.jianjie}}</p>
                        <p class="hero_zt"> 
                          <a href="" class="zt_hh">回合</a>
                          <a href="" class="zt_xx">休闲</a>
                          <a href="" class="zt_3d">3D</a>
                          <a href="" class="zt_zbqb">正版Q版</a>
                        </p>
                    </div>
                </div>
                <div class="list_btn">
                    <a href="" v-if="item.btn_zt==1" class="a_btn hero_zt" >暂停</a>
                    <a href="" v-else-if="item.btn_zt==2" class="a_btn jx_btn" >继续</a>
                    <a href="" v-else class="a_btn" >下载</a>
                      <p class="list_rl">{{item.rl}}m</p>
                </div>
              </div>
            </yd-list>

            <!-- 数据全部加载完毕显示 -->
            <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

            <!-- 加载中提示，不指定，将显示默认加载中图标 -->
            <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

        </yd-infinitescroll>
        
      </div>
    </div>
     <div class="footer_nav">
        <my-nav></my-nav>
      </div>
  </div>
</template>

<script>
export default {
  name: 'game',
  data () {
    return {
      page:1,
      pageSize:10,
      list:[
        {
          img:"../../static/img/hero_icon.png",
          title:"青云九天",
          jianjie:"19游正版Q版仙侠回合制手游",
          xzl:"1518.3",
          xzsd:"7.3",
          jxzsd:"2.51",
          jxzds:"2.51",
          xzjd:"85%",
          rl:"60.72",
          progress:.85,
          btn_zt:1
        },
        {
          img:"../../static/img/hero_icon.png",
          title:"青云九天",
          jianjie:"19游正版Q版仙侠回合制手游",
          xzl:"1518.3",
          xzsd:"7.3",
          jxzds:"2.51",
          xzjd:"50%",
          rl:"60.72",
          progress:.50,
          btn_zt:2
        },
        {
          img:"../../static/img/hero_icon.png",
          title:"青云九天",
          jianjie:"19游正版Q版仙侠回合制手游",
          xzl:"1518.3",
          xzsd:"7.3",
          jxzds:"2.51",
          xzjd:"85%",
          rl:"60.72",
          progress:.50,
        },
        {
          img:"../../static/img/hero_icon.png",
          title:"青云九天",
          jianjie:"19游正版Q版仙侠回合制手游",
          xzl:"1518.3",
          xzsd:"7.3",
          jxzsd:"2.51",
          jxzds:"2.51",
          xzjd:"85%",
          rl:"60.72",
          progress:.85,
          btn_zt:1
        },
        {
          img:"../../static/img/hero_icon.png",
          title:"青云九天",
          jianjie:"19游正版Q版仙侠回合制手游",
          xzl:"1518.3",
          xzsd:"7.3",
          jxzds:"2.51",
          xzjd:"50%",
          rl:"60.72",
          progress:.50,
          btn_zt:2
        },
        {
          img:"../../static/img/hero_icon.png",
          title:"青云九天",
          jianjie:"19游正版Q版仙侠回合制手游",
          xzl:"1518.3",
          xzsd:"7.3",
          jxzds:"2.51",
          xzjd:"85%",
          rl:"60.72",
          progress:.50,
        }
      ]
    }
  },
  methods:{
    loadList(){
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.index{
  position: relative;
  left: 0;
  bottom: 0;
  margin-bottom: .8rem;
}
.banner {
  img{
    width: 6.4rem;
    height: 2.8rem;
  }
  .yd-slider-pagination-item{
    width: .11rem;
    height: .11rem;
    margin-right: .12rem;
    background-color: #f8d6d3;
  }
  .yd-slider-pagination-item-active{
    background-color: #fff;
  }
  .yd-slider-pagination{
    left: 37%;
    bottom: .2rem;
  }
}
.sy_wrap{
  padding: .3rem .29rem 0 .29rem;
  overflow: hidden;
  // 新闻、秒杀nav样式
  .wrap_nav{
    overflow: hidden;
    .wrap_icon{
      float: left;
      width: 25%;
      text-align: center;
      img{
          width: .89rem;
          height: .89rem;
        }
      .wrap_bt{
        font-size: .2rem;
        color: #929292;
      }
    }
  }
  // hero样式
  .sy_hero{
    margin-top: .7rem;
    display:table;
    .hero_icon{
      width: 1.8rem;
      text-align: center;
      float: left;
      margin-right: .1rem;
    }
    .hero_img{
      width: .76rem;
      height: .76rem;
      display: inline-block;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .hero_bt{
      color: #333333;
      font-size: .2rem;
      font-family: "黑体";
      margin-top: .1rem;
      margin-bottom: .08rem;
    }
    .hreo_rl{
      color: #c2c2c2;
      font-size: .12rem;
      font-family: "黑体";
    }
    .hreo_start{
      .dian_star{
        display: inline-block;
        width: .17rem;
        height: .17rem;
        background: url(../../static/img/star.png) no-repeat;
        background-size: .17rem .17rem;
        margin-right: .05rem;
      }
      .hero_pf{
        font-family: "黑体";
        font-size: .16rem;
        color: #b7b6b6;
      }
    }
    .hero_btn{
      width: .93rem;
      height: .38rem;
      display: inline-block;
      background: #ff362b;
      color: #fff;
      font-size: .18rem;
      font-family: "黑体";
      text-align: center;
      line-height: .38rem;
      border-radius: 15px;
      margin-top: .18rem;
    }
    .hero_jx{
      background: #cacaca;
    }
    .hero_zt{
      background: #ff5426;
    }
  }
  // 首页列表样式
  .sy_list{
    margin-top: .47rem;
    .list_hero{
      overflow: hidden;
      padding-bottom: .21rem;
      border-bottom: 1px solid #eeeeee;
      .list_img{
        float: left;
        width: .76rem;
        height: .76rem;
        margin-top: .22rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .hero_wz{
        float: left;
        margin-top: .24rem;
        margin-left: .12rem;
        width: 60%;
        .list_tit{
          font-size: .2rem;
          font-family: "黑体";
          color: #444;
          line-height: .26rem;
          height: .26rem;
        }
        .list_xz{
          font-size: .11rem;
          color: #b0b0b0;
          font-family: "黑体";
          line-height: .15rem;
          height: .15rem;
        }
        .hero_jj{
          font-size: .13rem;
          color: #b0b0b0;
          font-family: "黑体";
          line-height: .17rem;
          height: .17rem;
        }
        .hero_zt{
          height: .14rem;
          line-height: .14rem;
          a{
            display: inline-block;
            font-size: .1rem;
            font-family: "黑体";
            color: #fff;
            height: .13rem;
            line-height: .13rem;
            padding-top: .01rem;
            width: .28rem;
            text-align: center;
            margin-right: .12rem;
            border-radius: 1px;
          }
          .zt_hh{
            background: #ff7750;
          }
          .zt_xx{
            background: #be73ff;
          }
          .zt_3d{
            background: #23c8af;
          }
          .zt_zbqb{
            width: .58rem;
            background: #fa9700;
          }
        }
        .xz_zt{
          overflow: hidden;
          height: .26rem;
          line-height: .26rem;
          .zt_sp{
            float: left;
            font-size: .13rem;
            color: #c8c8c8;
          }
          .xzsd{
            float: left;
            font-size: .13rem;
            color: #c8c8c8;
            .jxzsd{
              color: #ff5426;
            }
          }
          .xzjd{
            float: right;
            font-size: .13rem;
            color: #c9c9c9;
          }
        }
        .xz_jdt{
          line-height: .16rem;
          height: .16rem;
        }
      }
      .list_btn{
        text-align: center;
        margin-top: .33rem;
        float: right;
        .a_btn{
          width: .93rem;
          height: .38rem;
          display: inline-block;
          background: #ff3f29;
          color: #fff;
          font-size: .18rem;
          font-family: "黑体";
          text-align: center;
          line-height: .38rem;
          border-radius: 15px;
          margin-bottom: .09rem;
        }
        .jx_btn{
          background: #cacaca;
        }
        .list_rl{
          color: #c9c9c9;
          font-size: .13rem;
          font-family: "黑体";
        }
      }
    }
  }
}
</style>