<template>
  <div class="libiao">
      <div class="lb">
        <div class="header">
            <div class="libao_banner">
                <img src="../../static/img/libao_banner.png" alt="">
            </div>
            <div class="search">
                <div class="back_btn" @click="$router.go(-1);">
                   
                </div>
                <form action="">
                    <div class="search_k">
                        <input type="text" placeholder="搜索更多福利">
                        <a href="" class="sea_icon"></a>
                    </div>
                </form>
            </div>
        </div>
        <div class="section">
            <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
                <yd-list theme="1" slot="list">
                     <div class="list_hero" v-for="(item, index) in list" :key="index">
                        <div class="list_img"><img :src="item.img"></div>
                        <div class="hero_wz">
                            <p class="list_tit"><span class="sp_tit">{{item.title}}</span><span class="fb_lb">{{item.dblb}}</span></p>
                            <div class="list_zt">
                                <p class="hero_jj">{{item.jianjie}}</p>
                                <p class="lbsy"><span class="lb_sy">剩余</span><yd-progressbar type="line" :progress="item.progress3" trail-width="1" trail-color="#fe814a"></yd-progressbar><span class="sy_bfb">{{item.sy_bfb}}%</span></p>
                            </div>
                        </div>
                        <div class="list_btn">
                            <a href="" v-if="item.btn_zt==1" class="a_btn ylq" >已领取</a>
                            <a href="" v-else-if="item.btn_zt==2" class="a_btn yqg" >已抢光</a>
                            <a href="#" v-else class="get_btn"  @click.native="show1 = true"><span>领取</span></a>
                        </div>
                     </div>
                </yd-list>

                <!-- 数据全部加载完毕显示 -->
                <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

                <!-- 加载中提示，不指定，将显示默认加载中图标 -->
                <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

            </yd-infinitescroll>
            <!-- 点击领取弹窗内容 -->
            <yd-popup v-model="show1" position="center" width="3.7rem">
                 <div class="gitfbag_winClose" @click.native="show1 = false"></div>
                <div class="giftbag_win">
                    <p class="giftbag_winBtn">
                        <router-link to="/">
                            <img class="cont_receive" src="../../static/img/cont_receive.png" alt="">
                        </router-link>
                        <router-link to="/">
                            <img class="look_giftbag" src="../../static/img/look_giftbag.png" alt="">
                        </router-link>
                    </p>
                   
                </div>
            </yd-popup>
        </div>
      </div>
       <div class="footer_nav">
        <my-nav></my-nav>
      </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
          show1: false,
          progress4:0.15,
          page:1,
          pageSize:10,
          list:[
              {
                  img:"../../static/img/hero_icon.png",
                  title:"青云九天",
                  fblb:"19游独家精英礼包",
                  jianjie:"装备强化水晶X30、三级宝石X20、坐骑进化X5",
                  sy_bfb:"85",
                  progress3:0.15,
                  btn_zt:1
            },
            {
                  img:"../../static/img/hero_icon.png",
                  title:"青云九天",
                  fblb:"19游独家精英礼包",
                  jianjie:"装备强化水晶X30、三级宝石X20、坐骑进化X5",
                  sy_bfb:"0",
                  progress3:1,
                  btn_zt:2
            },
            {
                  img:"../../static/img/hero_icon.png",
                  title:"青云九天",
                  fblb:"19游独家精英礼包",
                  jianjie:"装备强化水晶X30、三级宝石X20、坐骑进化X5",
                  sy_bfb:"85",
                  progress3:0.15,
                  btn_zt:0
            },
            {
                  img:"../../static/img/hero_icon.png",
                  title:"青云九天",
                  fblb:"19游独家精英礼包",
                  jianjie:"装备强化水晶X30、三级宝石X20、坐骑进化X5",
                  sy_bfb:"85",
                  progress3:0.15,
                  btn_zt:0
            },
            {
                  img:"../../static/img/hero_icon.png",
                  title:"青云九天",
                  fblb:"19游独家精英礼包",
                  jianjie:"装备强化水晶X30、三级宝石X20、坐骑进化X5",
                  sy_bfb:"85",
                  progress3:0.15,
                  btn_zt:1
            },
            {
                  img:"../../static/img/hero_icon.png",
                  title:"青云九天",
                  fblb:"19游独家精英礼包",
                  jianjie:"装备强化水晶X30、三级宝石X20、坐骑进化X5",
                  sy_bfb:"0",
                  progress3:1,
                  btn_zt:2
            },
            {
                  img:"../../static/img/hero_icon.png",
                  title:"青云九天",
                  fblb:"19游独家精英礼包",
                  jianjie:"装备强化水晶X30、三级宝石X20、坐骑进化X5",
                  sy_bfb:"85",
                  progress3:0.15,
                  btn_zt:0
            }
          ]
      }
  },
  methods: {
      loadList(){
          
      }
  }
}
</script>

<style lang="less" scoped>
.lb{
    .header{
        position: relative;
        .libao_banner{
            width: 6.4rem;
            height: 2.4rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .search{
            position: absolute;
            top: .18rem;
            left: .24rem;
            overflow: hidden;
            .back_btn{
                float: left;
                width: .18rem;
                height: .32rem;
                background: url(../../static/img/back.png);
                background-size: .18rem .32rem;
                margin-top: .1rem;
            }
            form{
                width: 5.52rem;
                height: .51rem;
                line-height: .51rem;
                background:url(../../static/img/search_bg.png) no-repeat;
                background-size: 5.52rem .51rem;
                margin-left: .35rem;
                .search_k{
                    width: 100%;
                    float: left;
                    input{
                        border: none;
                        padding-left: .3rem;
                        font-size: .2rem;
                        color: #ffffff;
                        width: 80%;
                    }
                    input::-webkit-input-placeholder { 
                        color: #fff; 
                    } 
                    .sea_icon{
                        float: right;
                        width: .31rem;
                        height: .33rem;
                        background: url(../../static/img/search.png) no-repeat;
                        background-size: .31rem .33rem;
                        display: block;
                        margin-right: .27rem;
                        margin-top: .1rem;
                    }
                }
            }
        }
    }
    .section{
        padding: .06rem .3rem .7rem .3rem;
        .list_hero{
            overflow: hidden;
            border-bottom: .07rem solid #f2f2f3;
            padding: 0 .13rem .21rem .22rem;
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
                    .sp_tit{
                        font-size: .2rem;
                        font-family: "黑体";
                        color: #444;
                        line-height: .26rem;
                        height: .26rem;
                    }
                    .fb_lb{
                        float: right;
                        font-size: .16rem;
                        color: #444;
                        line-height: .26rem;
                        height: .26rem;
                    }
                }
                .list_xz{
                font-size: .11rem;
                color: #b0b0b0;
                font-family: "黑体";
                line-height: .15rem;
                height: .15rem;
                }
                .hero_jj{
                font-size: .14rem;
                color: #b1b1b1;
                font-family: "黑体";
                line-height: .25rem;
                height: .25rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                }
                .lbsy{
                    width: 3.8rem;
                    height: .28rem;
                    line-height: .28rem;
                    .lb_sy{
                        font-size: .16rem;
                        color: #444;
                        float: left;
                        margin-right: .12rem;
                    }
                    .yd-progressbar{
                        width: 70%;
                        float: left;
                        margin-top: -.08rem;
                    }
                    .sy_bfb{
                        float: right;
                        font-size: .16rem;
                        color: #444;
                    }
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
                background: #ff5027;
                color: #fff;
                font-size: .18rem;
                font-family: "黑体";
                text-align: center;
                line-height: .38rem;
                border-radius: 15px;
                margin-bottom: .09rem;
                }
                .get_btn{
                    width: .93rem;
                    height: .38rem;
                    display: inline-block;
                    color: #fff;
                    font-size: .18rem;
                    font-family: "黑体";
                    text-align: center;
                    line-height: .38rem;
                    border-radius: 15px;
                    position: relative;
                    z-index: -1;
                    margin-bottom: .09rem;
                    span{
                        display: inline-block;
                        width: .93rem;
                        height: .38rem;
                        line-height: .38rem;
                        border-radius: 15px;
                        position: relative;
                        z-index: 2;
                        background: linear-gradient(to right, #ff5526 0%, #ff4429 80%, #ff302b 100%);
                    }
                    }
                    .get_btn:before{
                        content: '';
                        display: inline-block;
                        height: .1rem;
                        position: absolute;
                        bottom: -.01rem;
                        left: .1rem;
                        right: .1rem;
                        z-index: -1;
                        border-radius: .1rem;
                        background:  #ff302b;
                        -webkit-filter: blur(5px) brightness(0.95);
                        filter: blur(5px) brightness(0.95);
                    
                }
                
                .ylq{
                background: #ff8665;
                }
                .yqg{
                    background: #d9d9d9;
                }
            }
        }
    }
    // 弹窗背景图样式
    .giftbag_win{
        width: 3.7rem;
        height: 3.4rem;
        background: url(../../static/img/giftbag_win.png) no-repeat;
        background-size: 3.7rem 3.4rem;
        margin: 0 auto;
        // position: relative;
        .giftbag_winBtn{
            position: absolute;
            left: 0;
            bottom: .3rem;
            padding: 0 .27rem 0 .22rem;
            overflow: hidden;
            width: 100%;
            .cont_receive{
                width: 1.28rem;
                height: .66rem;
                float: left;
            }
            .look_giftbag{
                 width: 1.28rem;
                height: .66rem;
                float: right;
            }
        }
        
    }
    .gitfbag_winClose{
        width: .27rem;
        height: .27rem;
        background: url(../../static/img/gitfbag_winClose.png) no-repeat;
        background-size: .27rem .27rem;
        position: absolute;
        right: 0;
        top: 0;
    }
}
</style>
