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
          <div class="credit_list"  @click="show">
              <div  class="credit_num fiveH">￥500元<i class="credit_pitch"></i></div>
              <div class="credit_num twoH">￥200元<i class="credit_pitch"></i></div>
              <div class="credit_num oneH">￥100元<i class="credit_pitch"></i></div>
              <div class="credit_num fifty">￥50元<i class="credit_pitch"></i></div>
          </div>
      </div>
       <div class="prePaid">
          <p class="prePaid_tit">充值支付方式</p>
          <div class="prePaid_list">
              <div class="Unionpay">
                  <img :src="imgSrc+'Unionpay.png'" alt="">
                  <span class="prePaidList_tit">银行卡支付</span>
                  <i class="prePaid_pitch"></i>
              </div>
              <div class="Unionpay">
                  <img :src="imgSrc+'Unionpay.png'" alt="">
                  <span class="prePaidList_tit">银行卡支付</span>
                  <i class="prePaid_pitch"></i>
              </div>
              <div class="Unionpay">
                  <img :src="imgSrc+'Unionpay.png'" alt="">
                  <span class="prePaidList_tit">银行卡支付</span>
                  <i class="prePaid_pitch"></i>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            imgSrc:this.common.imgSrc,
            
        }
        
    },
    methods:{
        show:function(){
                var game_Rtit=document.getElementsByClassName("credit_list");
                var game_a = document.querySelectorAll(".credit_list div");
                for(var i = 0;i<game_a.length;i++){
                    var a = game_a[i];
                    a.addEventListener("click",function(){
                        for(var j = 0;j<game_a.length;j++){
                            game_a[j].className = "";
                        }
                        this.className = "active"
                    }) 
                }
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
                    margin-right: .33rem;
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
                    color: #ffff;
                    background: #d4ae75;
                    .credit_pitch{
                        display: inline-block;
                    }
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
                .Unionpay{
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
                    .prePaid_pitch{
                        float: right;
                        width: .3rem;
                        height: .3rem;
                        background: url(../../../static/img/wprePaid.png) no-repeat;
                        background-size: .3rem .3rem;
                        margin-top: .22rem;
                    }
                }
            }
        }
    }
</style>
