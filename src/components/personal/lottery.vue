<template>
  <div class="lottery">
      <div class="lottery_header">
          <div class="lottery_back"  @click="$router.go(-1);">
              <img :src="imgSrc+'back.png'" alt="">
          </div>
          <div class="lottery_icon">
              当前积分：9999
          </div>
      </div>
      <div class="exhibitors">
          <div class="exhibitors_start">
              <img :src="imgSrc+'lottery_start.png'" alt="">
          </div>
          <div class="exhibitors_gd">
              <yd-slider autoplay="3000" speed="7000">
                <yd-slider-item>
                    恭喜 刘德华 抽中了 10 积分    
                </yd-slider-item>
                <yd-slider-item>
                    恭喜 刘德华 抽中了 10 积分
                </yd-slider-item>
                <yd-slider-item>
                   恭喜 刘德华 抽中了 10 积分
                </yd-slider-item>
                <yd-slider-item>
                    恭喜 刘德华 抽中了 10 积分
                </yd-slider-item>
            </yd-slider>
          </div>
      </div>
      <div class="lottery_box">
          <div id="lottery">
            <table border="0" cellpadding="12" cellspacing="13">
                <tr>
                    <td class="lottery-unit lottery-unit-0"><img src=""><div class="mask"></div></td>
                    <td class="lottery-unit lottery-unit-1"><img src=""><div class="mask"></div></td>
                    <td class="lottery-unit lottery-unit-2"><img src=""><div class="mask"></div></td>
                </tr>
                <tr>
                    <td class="lottery-unit lottery-unit-7"><img src=""><div class="mask"></div></td>
                    <td><a href="#"></a></td>
                    <td class="lottery-unit lottery-unit-3"><img src=""><div class="mask"></div></td>
                </tr>
                <tr>
                    <td class="lottery-unit lottery-unit-6"><img src=""><div class="mask"></div></td>
                    <td class="lottery-unit lottery-unit-5"><img src=""><div class="mask"></div></td>
                    <td class="lottery-unit lottery-unit-4"><img src=""><div class="mask"></div></td>
                </tr>
            </table>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
          imgSrc:this.common.imgSrc
      }
  },
    methods:{
    }
}

    $(function() {
          var lottery={
            index:-1,    //当前转动到哪个位置，起点位置
            count:0,    //总共有多少个位置
            timer:0,    //setTimeout的ID，用clearTimeout清除
            speed:20,    //初始转动速度
            times:0,    //转动次数
            cycle:50,    //转动基本次数：即至少需要转动多少次再进入抽奖环节
            prize:-1,    //中奖位置
            init:function(id){
                if ($("#"+id).find(".lottery-unit").length>0) {
                    $lottery = $("#"+id);
                    $units = $lottery.find(".lottery-unit");
                    this.obj = $lottery;
                    this.count = $units.length;
                    $lottery.find(".lottery-unit-"+this.index).addClass("active");
                };
            },
            roll:function(){
                var index = this.index;
                var count = this.count;
                var lottery = this.obj;
                $(lottery).find(".lottery-unit-"+index).removeClass("active");
                index += 1;
                if (index>count-1) {
                    index = 0;
                };
                $(lottery).find(".lottery-unit-"+index).addClass("active");
                this.index=index;
                return false;
            },
            stop:function(index){
                this.prize=index;
                return false;
            }
        };

        function roll(){
            lottery.times += 1;
            lottery.roll();//转动过程调用的是lottery的roll方法，这里是第一次调用初始化
            if (lottery.times > lottery.cycle+10 && lottery.prize==lottery.index) {
                clearTimeout(lottery.timer);
                lottery.prize=-1;
                lottery.times=0;
                click=false;
            }else{
                if (lottery.times<lottery.cycle) {
                    lottery.speed -= 10;
                }else if(lottery.times==lottery.cycle) {
                    var index = Math.random()*(lottery.count)|0;//中奖物品通过一个随机数生成
                    lottery.prize = index;        
                }else{
                    if (lottery.times > lottery.cycle+10 && ((lottery.prize==0 && lottery.index==7) || lottery.prize==lottery.index+1)) {
                        lottery.speed += 110;
                    }else{
                        lottery.speed += 20;
                    }
                }
                if (lottery.speed<40) {
                    lottery.speed=40;
                };
                //console.log(lottery.times+'^^^^^^'+lottery.speed+'^^^^^^^'+lottery.prize);
                lottery.timer = setTimeout(roll,lottery.speed);//循环调用
            }
            return false;
        }

        var click=false;

        window.onload=function(){
            lottery.init('lottery');
            $("#lottery a").click(function(){
                if (click) {//click控制一次抽奖过程中不能重复点击抽奖按钮，后面的点击不响应
                    return false;
                }else{
                    lottery.speed=100;
                    roll();    //转圈过程不响应click事件，会将click置为false
                    click=true; //一次抽奖完成后，设置click为true，可继续抽奖
                    return false;
                }
            });
        };
    })
  
</script>

<style lang="less" scoped>
.lottery{
    width: 6.4rem;
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
    #lottery{width:5.82rem;height:5.82rem;margin:0px auto;}
#lottery table td{position:relative;width:1.57rem;height:1.57rem;text-align:center;color:#333;}
#lottery table td img{display:block;width:1.57rem;height:1.57rem;}
#lottery table td a{width:1.57rem;height:1.57rem;display:block;text-decoration:none;}
#lottery table td.active .mask{display:block;}
.mask{
    width:100%;
    height:100%; 
    position:absolute;
    left:0;
    top:0;
    background-color: rgba(252,211,4,0.5);
    display:none;
}
}
</style>

