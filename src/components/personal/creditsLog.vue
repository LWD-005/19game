<template>
  <div class="creditsLog">
      <div class="creditsLog_header">
          <div class="creditsLog_back"  @click="$router.go(-1);">
              <img :src="imgSrc+'creditsLog_back.png'" alt="">
          </div>
          <p class="creditsLog_tit">积分明细</p>
      </div>
      <div class="creditsLog_list">
          <div class="prepaidTime">
              <img :src="imgSrc+'prepaidTime_icon.png'" alt="">
              <span class="prepaid_time"><span class="prepaid_day">2018-03-30</span><span class="prepaid_noon">上午</span></span>
          </div>
          <div class="buyPoints" v-for="(item, index) in pointsList" :key="index" v-if="item.pointsType==1">
              <img :src="imgSrc+'prepaid_icon.png'" alt="">
              <div class="points">
                  <p class="points_tit">积分充值</p>
                  <p class="buy_time">{{item.pointsTime}}</p>
              </div>
              <div class="points_sum">
                  <span class="sum">+{{item.pointsNum}}<i class="buy_icon"></i></span>
              </div>
          </div>
          <div class="buyPoints" v-else>
              <img :src="imgSrc+'convert_icon.png'" alt="">
              <div class="points">
                  <p class="points_tit">积分兑换</p>
                  <p class="buy_time">{{item.pointsTime}}</p>
              </div>
              <div class="convert_num">
                  <span class="num">-{{item.pointsNum}}<i class="num_icon"></i></span>
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
            pointsList:[
                {
                    pointsType:1,//值为1是积分充值，为0是积分兑换
                    pointsTime:'7:00',
                    pointsNum:'10000'
                },
                 {
                    pointsType:1,//值为1是积分充值，为0是积分兑换
                    pointsTime:'7:00',
                    pointsNum:'10000'
                },
                 {
                    pointsType:1,//值为1是积分充值，为0是积分兑换
                    pointsTime:'7:00',
                    pointsNum:'10000'
                },
                 {
                    pointsType:2,//值为1是积分充值，为0是积分兑换
                    pointsTime:'18:45',
                    pointsNum:'100'
                },
                 {
                    pointsType:1,//值为1是积分充值，为0是积分兑换
                    pointsTime:'7:00',
                    pointsNum:'10000'
                },
                 {
                    pointsType:1,//值为1是积分充值，为0是积分兑换
                    pointsTime:'7:00',
                    pointsNum:'10000'
                }
            ]
        }
    }
   
}
</script>

<style lang="less" scoped>
    .creditsLog{
        // 积分明细页面头部样式
        .creditsLog_header{
            overflow: hidden;
            padding-top: .27rem;
            width: 100%;
            height: .82rem;
            background: #fff;
            border-bottom: .08rem solid #f2f2f3;
            .creditsLog_back{
                float: left;
                width: .18rem;
                height: .32rem;
                margin-left: .42rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .creditsLog_tit{
                text-align: center;
                color:#606060;
                font-size: .3rem;
                letter-spacing: .04rem;
                margin-top: -.1rem;
                 width: 95%;
            }
        }
        // 积分明细页面列表样式
        .creditsLog_list{
            min-height: 7rem;
            border-left: 3px solid #e4e4e4;
            margin: .24rem .28rem 0 .53rem;
            .prepaidTime{
                height: .36rem;
                line-height: .36rem;
                z-index: 2;
                margin-left: -.15rem;
                background: #fff;
                overflow: hidden;
                margin-bottom: .2rem;
                img{
                    float: left;
                    width: .24rem;
                    height: .24rem;
                    margin-top: .06rem;
                    margin-right: .2rem;
                }
                .prepaid_time{
                    float: left;
                    font-size: .14rem;
                    color: #898989;
                    .prepaid_noon{
                        margin-left: .08rem;
                    }
                }
            }
            .buyPoints{
                height: .72rem;
                background: #fff;
                border:1px solid #f2f2f3; 
                padding: .17rem .15rem 0 .2rem;
                border-radius: 5px;
                margin-left: -.3rem;
                margin-bottom: .16rem;
                img{
                    float: left;
                    width: .1rem;
                    height: .1rem;
                    margin-top: .14rem;
                    margin-right: .25rem;
                }
                // 充值积分样式
                .points{
                    float: left;
                    .points_tit{
                        line-height: .24rem;
                        font-size: .18rem;
                        color: #898989;
                    }
                    .buy_time{
                        line-height: .20rem;
                        color: #b7b7b7;
                        font-size: .14rem;
                    }
                    
                }
                .points_sum{
                    float: right;
                    .sum{
                        font-size: .2rem;
                        color: #ff4c74;
                        .buy_icon{
                            display: inline-block;
                            width: .18rem;
                            height: .18rem;
                            background: url(../../../static/img/buy_icon.png) no-repeat;
                            background-size: .18rem .18rem;
                            margin-left: .06rem;
                            position: relative;
                            top: .02rem;
                        }
                    }
                }
                // 兑换积分样式
                .convert_num{
                    float: right;
                    .num{
                        font-size: .2rem;
                        color: #3fd27b;
                        .num_icon{
                            display: inline-block;
                            width: .18rem;
                            height: .18rem;
                            background: url(../../../static/img/useUp_icon.png) no-repeat;
                            background-size: .18rem .18rem;
                            margin-left: .06rem;
                            position: relative;
                            top: .02rem;
                        }
                    }
                }
            }
        }
    }
</style>
