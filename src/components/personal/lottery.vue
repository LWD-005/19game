<template>
  <div class="lottery">
      <div class="lottery_header">
          <div class="lottery_back"  @click="$router.go(-1);">
              <img :src="imgSrc+'back.png'" alt="">
          </div>
          <div class="lottery_icon">
              当前积分：{{coin}}
          </div>
      </div>
      <div class="exhibitors">
          <div class="exhibitors_start">
              <img :src="imgSrc+'lottery_start.png'" alt="">
          </div>
          <div class="exhibitors_gd">
              <yd-slider autoplay="3000" speed="7000">
                <yd-slider-item v-for="(item,index) in rollList" :key="index">
                    恭喜{{item.user_name}}抽中了 {{item.name}}
                </yd-slider-item>
                
            </yd-slider>
          </div>
      </div>
      <div class="luckDraw">
        <div class="container">
            <div class="turntable-wrapper">
                <div class="luck-wrapper">
                    <ul class="nineGrid">
                        <li class="row">
                            <div v-for="(item,index) in PrizeList" :key="index" v-if="index===1" :class="turnIndex === 1 ? `active` : ``">
                                <div class="wrapper">
                                    <img :src="item.icon" alt="">
                                    <span>{{item.name}}</span>
                                </div>
                            </div>
                            <div v-for="(item,index) in PrizeList" :key="index" v-if="index===2" :class="turnIndex === 2 ? `active` : ``">
                                <div class="wrapper">
                                    <img :src="item.icon" alt="">
                                    <span>{{item.name}}</span>
                                </div>
                            </div>
                            <div v-for="(item,index) in PrizeList" :key="index" v-if="index===3" :class="turnIndex === 3 ? `active` : ``">
                                <div class="wrapper">
                                    <img :src="item.icon" alt="">
                                    <span>{{item.name}}</span>
                                </div>
                            </div>
                        </li>
                        <li class="row">
                            <div v-for="(item,index) in PrizeList" :key="index" v-if="index===0" :class="turnIndex === 0 ? `active` : ``">
                                <div class="wrapper">
                                    <img :src="item.icon" alt="">
                                    <span>{{item.name}}</span>
                                </div>
                            </div>
                            <div class="getLuck" @click="startLottery">
                                <div class="wrapper begin">
                                <img :src="imgSrc+'lottery_begin.png'" alt="">
                                </div>
                            </div>
                            <div v-for="(item,index) in PrizeList" :key="index" v-if="index===4" :class="turnIndex === 4 ? 'active': ''">
                                <div class="wrapper">
                                    <img :src="item.icon" alt="">
                                    <span>{{item.name}}</span>
                                </div>
                            </div>
                        </li>
                        <li class="row">
                            <div v-for="(item,index) in PrizeList" :key="index" v-if="index===7" :class="turnIndex === 7 ? `active` : ``">
                                <div class="wrapper">
                                    <img :src="item.icon" alt="">
                                    <span>{{item.name}}</span>
                                </div>
                            </div>
                            <div v-for="(item,index) in PrizeList" :key="index" v-if="index===6" :class="turnIndex === 6 ? `active` : ``">
                                <div class="wrapper">
                                    <img :src="item.icon" alt="">
                                    <span>{{item.name}}</span>
                                </div>
                            </div>
                            <div v-for="(item,index) in PrizeList" :key="index" v-if="index===5" :class="turnIndex === 5 ? `active` : ``">
                                <div class="wrapper">
                                    <img :src="item.icon" alt="">
                                    <span>{{item.name}}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="lotteryBottom">
           <yd-button class="lottery_rule" size="large" type="primary" @click.native="ruleShow = true">

            </yd-button>
            <!-- 活动规则弹窗 -->
            <yd-popup v-model="ruleShow" position="center" width="5.2rem">
                 <div class="rule_winClose" @click="ruleShow = false"></div>
                <div class="rule_win">
                   <div class="rule_p" v-html="rule">
                      
                   </div>
                </div>
            </yd-popup>
            <yd-button class="lottery_rec" size="large" type="primary" @click.native="recShow = true">

            </yd-button>
            <!-- 中奖记录弹窗 -->
            <yd-popup v-model="recShow" position="center" width="5.2rem">
                 <div class="rec_winClose" @click="recShow = false"></div>
                <div class="rec_win">
                    <div class="recWin_list">
                        <div class="recWin_cont" v-for="(item,index) in recList" :key="index" >
                            <p class="recTime"><span class="recTime_day">{{item.time | timestampToTime(2)}}</span><span class="recTime_sj">{{item.time | timestampToTime(3)}}</span></p>
                            <p class="rec_num">抽中 {{item.name}}</p>
                        </div>
                    </div>
                </div>
            </yd-popup>
    </div>
        
  </div>
  
</template>

<script>
import Axios from 'axios'
export default {
  name: 'luckDraw',
  data () {
    return {
    imgSrc:this.common.imgSrc,
      ruleShow:false,
      recShow:false,
      title: '积分转盘',
      turnIndex: -1,    // 当前转动到哪个位置，起点位置
      count: 8,    // 总共有多少个位置
      timer: 0,    // 每次转动定时器
      speed: 200,   // 初始转动速度
      times: 0,    // 转动次数
      cycle: 50,   // 转动基本次数：即至少需要转动多少次再进入抽奖环节
      prize: -1,   
      click: true,
      integral:'',//积分状态
      showToast: false,
      toastType: 'luck',
      PrizeList:'',//转盘奖品列表
      prizeId:'',//中奖id
      recList:'',//中奖记录
      rollList:'',//中奖滚动列表
      coin:'',//用户积分
      rule:'',//抽奖戏规则
    }
  },
  methods: {
    // 开始抽奖
    startLottery () {
      if (!this.click) {
        return
      }
      this.closeToast()
      this.speed = 200
      this.click = false
      this.startRoll()
      this.prizeLocat()
    },
    // 开始转动
    startRoll () {
      this.times += 1  // 转动次数
      this.oneRoll()  // 转动过程调用的每一次转动方法，这里是第一次调用初始化

      // 如果当前转动次数达到要求 && 目前转到的位置是中奖位置
      if (this.times > this.cycle + 10 && this.prize === this.turnIndex) {
        clearTimeout(this.timer)   // 清除转动定时器，停止转动
        this.prize = -1
        this.times = 0
        this.click = true
        this.showToast = true
        this.toastType = 'comeOn'
       
      } else {
        if (this.times < this.cycle) {
          this.speed -= 10   // 加快转动速度
        } else if (this.times === this.cycle) {    // 随机获得一个中奖位置
          const turnIndex = parseInt(Math.random() * 10, 0) || 0
          this.prize = parseInt(this.prizeId)-1     //指定中奖位置
          this.getCoin();
          if (this.prize > 7) {
            this.prize = 7
          }
         
        } else if (this.times > this.cycle + 10 &&
          ((this.prize === 0 && this.turnIndex === 7) || this.prize === this.turnIndex + 1)) {
          this.speed += 110
        } else {
          this.speed += 20
        }
        if (this.speed < 40) {
          this.speed = 40
        }
        this.timer = setTimeout(this.startRoll, this.speed)
      }
    },

    // 每一次转动
    oneRoll () {
      let turnIndex = this.turnIndex  // 当前转动到哪个位置
      const count = this.count  // 总共有多少个位置
      turnIndex += 1
      if (turnIndex > count - 1) {
        turnIndex = 0
      }
      this.turnIndex = turnIndex
    },

    // 关闭弹出框
    closeToast () {
      this.showToast = false
    },
    getCoin(){
        //获取用户积分/api/cis/getUserCoin
        let apiUrl=this.common.apiUrl;
        let tokenLogin = window.localStorage.getItem('token');
        let lotteryParams = new URLSearchParams();
        lotteryParams.append('token', tokenLogin);
        Axios({
            method:'post', 
            url:apiUrl+'/cis/getUserCoin',
            data:lotteryParams,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
        })
        .then((res)=>{
            if(res.status==200){
                this.coin = res.data.d.coin
            }
        })
        .catch((error)=>{
            console.log(error);
            alert("网络错误，不能访问！");
        })
    },
        //获取中奖位置
    prizeLocat(){
        let apiUrl=this.common.apiUrl;
        let tokenLogin = window.localStorage.getItem('token');
        let lotteryParams = new URLSearchParams();
        lotteryParams.append('token', tokenLogin);
        Axios({
            method:'post', 
            url:apiUrl+'Game/GetLottery',
            data:lotteryParams,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
        })
        .then((res)=>{
            if(res.status==200){
                this.prizeId = res.data.d.gift.id
            }
        })
        .catch((error)=>{
            console.log(error);
            alert("网络错误，不能访问！");
        })
    }
  },
    created(){
        let apiUrl=this.common.apiUrl;
        let tokenLogin = window.localStorage.getItem('token');
        //抽奖初始值传参
        let lotteryParams = new URLSearchParams();
        lotteryParams.append('token', tokenLogin);
        //获取抽奖转盘列表
        Axios({
            method:'post', 
            url:apiUrl+'Game/PrizeList',
            data:lotteryParams,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
        })
        .then((res)=>{
            if(res.status==200){
                this.PrizeList = res.data.d.list
                this.rule = res.data.d.rule.content
            }
        })
        .catch((error)=>{
            console.log(error);
            alert("网络错误，不能访问！");
        });
        
        //获取中奖记录列表
        Axios({
            method:'post', 
            url:apiUrl+'Game/LotteryLog',
            data:lotteryParams,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
        })
        .then((res)=>{
            if(res.status==200){
                this.recList = res.data.d.log
            }
        })
        .catch((error)=>{
            console.log(error);
            alert("网络错误，不能访问！");
        })
        //获取中奖滚动列表
        Axios({
            method:'post', 
            url:apiUrl+'Game/LotteryLog',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            },
        })
        .then((res)=>{
            if(res.status==200){
                this.rollList = res.data.d.log
            }
        })
        .catch((error)=>{
            console.log(error);
            alert("网络错误，不能访问！");
        })
        this.getCoin();
    },
    filters:{
        timestampToTime(timestamp,format) {
            let Y,M,D,h,m,s;
            let date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            Y = date.getFullYear() + '-';
            if (format == 2) {
                M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            } else{
                M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '/';
            }
            D = date.getDate() + ' ';
            h = date.getHours() + ':';
           if (date.getMinutes()<10) {
               m ='0'+ date.getMinutes()
           } else {
               m =date.getMinutes()
           }
            s = date.getSeconds();
            if (format == 3) {
                if (h<13) {
                    return h+m+' AM'
                } else {
                    return h+m+' PM'
                }
            } else{
                return M+D;
            }
    
        }
    }
}
</script>

<style lang="less" scoped>
.lottery{
    width: 100%;
    height: 11.36rem;
    background: url(../../../static/img/lottery_bg.png) no-repeat;
    background-size: 100% 100%;
    .lottery_header{
        overflow: hidden;
        padding-top: .27rem;
        .lottery_back{
            float: left;
            width: .18rem;
            height: .32rem;
            margin-left: .42rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .lottery_icon{
            float: right;
            margin-right: .33rem;
            font-size: .22rem;
            color: #fff9f1;
        }
    }
    .exhibitors{
        width: 5.6rem;
        height: .54rem;
        background: #fff;
        border-radius: .25rem;
        margin: 0 auto;
        margin-top: 2.73rem;
        padding-left: .6rem;
        .exhibitors_start{
            width: .71rem;
            height: .78rem;
            z-index: 2;
            img{
                width: 100%;
                height: 100%;
                margin-top: -.06rem;
                margin-left: -.66rem;
                margin-right: .7rem;
            }
        }
        .exhibitors_gd{
            color: #fb8d25;
            font-size: .2rem;
        }
    }
}
// 抽奖九宫格转盘样式
.luckDraw {
  .turntable-wrapper {
        margin: 0 auto;
        width: 5.82rem;
        height: 6rem;
        position: relative;
        margin-top: .25rem;
        border-radius: .07rem;
        background: #d92c00;
    .luck-wrapper {
        width: 5.82rem;
        height: 5.82rem;
        background: #ff4a19;
        position: relative;
        border-radius: .07rem;
        padding-top: .18rem;
      .integral {
        width: 100%;
        color: #6d2d00;
        font-weight: normal;
        text-align: center;
        position: absolute;
        span {
          font-weight: 600;
          color: #ff2f4d;
        }
      }

      .nineGrid {
        width: 5.45rem;
        height: 5.45rem;
        padding: .09rem;
        background: #d23600;
         border-radius: .07rem;
         margin: 0 auto;
        li {
            display: flex;
            margin-bottom: .13rem;
          > div {
            width: 1.67rem;
            height: 1.67rem;
            text-align: center;
            position: relative;
            margin-right: .12rem;
            .wrapper {
              width: 1.67rem;
              height: 1.67rem;
              margin: 0;
              background: #fff;
              border-radius: .08rem;
              position: relative;
               img {
                display: inline-block;
                width: 1.02rem;  
                height: 1.02rem;
                vertical-align: middle;
                margin-top: .2rem;
                }
                span{
                    display: inline-block;
                    height: .3rem;
                    line-height: .3rem;
                    width: 100%;
                    position: absolute;
                    bottom: .08rem;
                    left: 0;
                    overflow: hidden;
                    font-size: .24rem;
                    color: #d23600;
                    font-family: "黑体";
                    font-weight: bold;
                }
            }
            .begin{
                img{
                    width: 100%;
                    height: 100%;
                    margin-top: 0;
                }
            }
            .mask {
              position: absolute;
              top: 0;
              left: 0;
              width: 1.57rem;
              height: 1.72rem;
              background: url(../../../static/img/lottery_hover.png) no-repeat;
              background-size: 100% 100%;
              display: none;
            }
          }

          > div.active {
            .wrapper{
                background: #fff37b;
            }
          }
          
        }
        // li:first-child{
        //     img{
        //         width: .81rem;
        //         height: 1.14rem;
        //     }

        // }

        li:last-child {
          margin-bottom:0;
        }
      }
    }
  }
}
.lotteryBottom{
    overflow: hidden;
    padding: .1rem .23rem 0 .24rem;
    .lottery_rule{
        float: left;
        width: 1.23rem;
        height: .74rem;
        background: url(../../../static/img/lottery_ruleBtn.png) no-repeat;
        background-size: 100% 100%;
    }
    .lottery_rec{
        float: right;
        width: 1.23rem;
        height: .74rem;
        background: url(../../../static/img/lottery_recBtn.png) no-repeat;
        background-size: 100% 100%;
    }
}
// 活动规则弹窗样式
.rule_win{
    width: 5.2rem;
    height: 6rem;
    background: url(../../../static/img/ruleShow_bg.png) no-repeat;
    background-size: 100% 100%;
    .rule_p{
        padding: 1.73rem .25rem 0 .25rem;
        p{
            font-size: .18rem;
            color: #8c8c8c;
            text-align: justify;
            line-height: .3rem;
        }
    }
}
.rule_winClose{
    width: .27rem;
    height: .27rem;
    background: url(../../../static/img/gitfbag_winClose.png) no-repeat;
    background-size: .27rem .27rem;
    position: absolute;
    right: 0;
    top: 0;
}
// 中奖记录弹窗样式
.rec_win{
     width: 5.2rem;
    height: 6rem;
    background: url(../../../static/img/recShow_bg.png) no-repeat;
    background-size: 100% 100%;
    position: relative;
    overflow: hidden;
    .recWin_list{
        padding: 0 .4rem 0 .73rem;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 1.78rem;
        overflow-y: auto;
        .recWin_cont{
           height: .82rem;
            .recTime{
                color: #909090;
                font-size: .16rem;
                overflow: hidden;
                .recTime_day{
                    float: left;
                    margin-left: .02rem;
                }
                .recTime_sj{
                    float: right;
                }
            }
            .rec_num{
                color: #636363;
                font-size: .18rem;
            }
        }
    }
}
.rec_winClose{
    width: .27rem;
    height: .27rem;
    background: url(../../../static/img/gitfbag_winClose.png) no-repeat;
    background-size: .27rem .27rem;
    position: absolute;
    right: 0;
    top: 0;
}
</style>

