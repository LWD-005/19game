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
                            <a href="" v-else class="a_btn" >领取</a>
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
  data(){
      return{
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
                .ylq{
                background: #ff8665;
                }
                .yqg{
                    background: #d9d9d9;
                }
            }
        }
    }
}
</style>
