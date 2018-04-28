<template>
  <div class="payCenter">
      <div class="payCenter_header">
          <div class="payCenter_back"  @click="$router.go(-1);">
              <img :src="imgSrc+'creditsLog_back.png'" alt="">
          </div>
          <p class="payCenter_tit">充值中心</p>
      </div>
      <div class="payCenter_uplink">
          <yd-accordion>
            <yd-accordion-item title="请选择游戏">
                <div style="padding: .24rem;">
                    <p>花间一壶酒，独酌无相亲。</p>
                    <p>举杯邀明月，对影成三人。</p>
                    <p>月既不解饮，影徒随我身。</p>
                    <p>暂伴月将影，行乐须及春。</p>
                    <p>我歌月徘徊，我舞影零乱。</p>
                    <p>醒时同交欢，醉后各分散。</p>
                    <p>永结无情游，相期邈云汉。</p>
                </div>
            </yd-accordion-item>
            <yd-accordion-item title="请选择区服">
                <div style="padding: .24rem;">
                    <p>岱宗夫如何，齐鲁青未了。</p>
                    <p>造化钟神秀，阴阳割昏晓。</p>
                    <p>荡胸生层云，决眦入归鸟。</p>
                    <p>会当凌绝顶，一览众山小。</p>
                </div>
            </yd-accordion-item>
            <yd-accordion-item title="请选择角色">
                <div style="padding: .24rem;">
                    <p>言入黄花川，每逐青溪水。</p>
                    <p>随山将万转，趣途无百里。</p>
                    <p>声喧乱石中，色静深松里。</p>
                    <p>漾漾泛菱荇，澄澄映葭苇。</p>
                    <p>我心素已闲，清川澹如此。</p>
                    <p>请留盘石上，垂钓将已矣。</p>
                </div>
            </yd-accordion-item>
        </yd-accordion>
      </div>
      <div class="credit">
          <p class="credit_tit">充值金额</p>
          <div class="credit_list">
              <div  :class="{active:item.isActive}" v-for="(item,index) in creditList" :key="index"  @click="activeFun(item)">￥{{item.money}}元<i class="credit_pitch"></i></div>
          </div>
      </div>
       <div class="prePaid">
          <p class="prePaid_tit">充值支付方式</p>
          <div class="prePaid_list">
              <div class="pay" :class="item.className" v-for="(item,index) in prePaidList" :key="index"  @click="pitchFun(item)">
                  <img :src="item.imageSrc" alt="">
                  <span class="prePaidList_tit">{{item.prePaidList_tit}}</span>
                  <i :class="{pitch:item.isPitch}"></i>
              </div>
             
          </div>

      </div>
      <router-link :to="{path:'/changepwd'}">
          <button class="payLogin">登陆</button>
      </router-link>
  </div>
  
</template>

<script>
export default {
    data(){
        return{
            imgSrc:this.common.imgSrc,
            creditList:[
                {
                    money:"500",
                    isActive:true
                },
                {
                    money:"200",
                    isActive:false
                },
                {
                    money:"100",
                    isActive:false
                },
                {
                    money:"50",
                    isActive:false
                },
            ],
            prePaidList:[
                {
                    className:"Unionpay",
                    imageSrc:"../../../static/img/Unionpay.png",
                    prePaidList_tit:"银行卡支付",
                    isPitch:true
                },
                {
                    className:"WeChat",
                    imageSrc:"../../../static/img/WeChat.png",
                    prePaidList_tit:"微信支付",
                    isPitch:false
                },
                {
                    className:"Alipay",
                    imageSrc:"../../../static/img/Alipay.png",
                    prePaidList_tit:"支付宝支付",
                    isPitch:false
                },
            ]
        }
        
    },
    methods:{
        activeFun:function(data){
                this.creditList.forEach(function(obj){
                    obj.isActive = false;
                });
                data.isActive = !data.isActive;
            },
        pitchFun:function(data){
            this.prePaidList.forEach(function( pitchObj){
                    pitchObj.isPitch = false;
                });
                data.isPitch = !data.isPitch;
        }
    },
        
}

</script>

<style lang="less" scoped>
    .payCenter{
        // 积分明细页面头部样式
        .payCenter_header{
            overflow: hidden;
            padding-top: .27rem;
            width: 100%;
            height: .82rem;
            background: #fff;
            border-bottom: .08rem solid #f2f2f3;
            .payCenter_back{
                float: left;
                width: .18rem;
                height: .32rem;
                margin-left: .42rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .payCenter_tit{
                text-align: center;
                color:#606060;
                font-size: .3rem;
                letter-spacing: .04rem;
                margin-top: -.1rem;
                margin-left: -.4rem;
                width: 95%;
            }
        }
        .payCenter_uplink{
            padding: .28rem .3rem 0 .3rem;
        }
        .credit{
            padding: .32rem .29rem 0 .29rem;
            .credit_tit{
                color: #606060;
                font-size: .24rem;
                font-weight: 600;
                padding-left: .12rem;
            }
            .credit_list{
                margin-top: .2rem;
                overflow: hidden;
                padding-bottom: .2rem;
                div{
                    float: left;
                    width: 1.2rem;
                    height: .72rem;
                    color: #f4c887;
                    background: #2f2724;
                    text-align: center;
                    line-height: .72rem;
                    font-size: .22rem;
                    border-radius: 4px;
                    margin-right: .3rem;
                    position: relative;
                    .credit_pitch{
                        width: .25rem;
                        height: .25rem;
                        display: none;
                        background: url(../../../static/img/credit_pitch.png) no-repeat;
                        background-size: .25rem .25rem;
                        position: absolute;
                        bottom: -.06rem;
                        right: -.08rem;
                    }
                }
                div:last-child{
                    margin-right: 0;
                }
                div.active{
                    color: #fff;
                    background: #d4ae75;
                    .credit_pitch{
                        display: inline-block;
                    }
                }
                .active:before{
                    content: '';
                    display: inline-block;
                    height: .8rem;
                    position: absolute;
                    bottom: -.03rem;
                    left: .1rem;
                    right: .1rem;
                    z-index: -1;
                    border-radius: .1rem;
                    background: #d4ae75;
                    -webkit-filter: blur(5px) brightness(0.95);
                    filter: blur(5px) brightness(0.95);
                }
            }
            
        }
        .prePaid{
            padding: .32rem .29rem 0 .29rem;
            .prePaid_tit{
                padding-left: .12rem;
                color: #606060;
                font-size: .24rem;
                font-weight: 600;
            }
            .prePaid_list{
                margin-top: .2rem;
                .pay{
                    height: .75rem;
                    line-height: .75rem;
                    border-bottom: 1px solid #e3e3e3;
                    img{
                        width: .36rem;
                        height: .25rem;
                        float: left;
                        margin-top: .22rem;
                        margin-right: .27rem;
                    }
                    .prePaidList_tit{
                        font-size: .22rem;
                        color: #606060;
                    }
                    i{
                        float: right;
                        width: .3rem;
                        height: .3rem;
                        background: url(../../../static/img/wprePaid.png) no-repeat;
                        background-size: .3rem .3rem;
                        margin-top: .2rem;
                    }
                    i.pitch{
                        background: url(../../../static/img/prePaid.png) no-repeat;
                        background-size: .3rem .3rem;
                    }
                }
                .WeChat{
                    img{
                        width: .41rem;
                        height: .36rem;
                    }
                }
                .Alipay{
                    img{
                        width: .39rem;
                        height: .38rem;
                    }
                }
            }
        }
        .payLogin{
            text-align: center;
            border: none;
            color: #fff;
            font-size: .24rem;
            width: 4.57rem;
            height: .63rem;
            margin: 0 auto;
            background: #ff382a;
            display: block;
            border-radius: 25px;
            position: relative;
            margin-top: 1rem;
            bottom: .5rem;
        }
    }
</style>
