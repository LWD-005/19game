<template>
  <div class="wode">
      <div class="wd">
        <div class="wd_cont">
          <div v-if="dlzt==1" class="wd_header">
            <div class="wd_xx">
              <div class="wd_tx">
                <img src="../../static/img/wd_tx.png" alt="">
              </div>
              <div class="wd_mc">小白菜姐姐</div>
              <div class="wd_qd">
                <button class="qd_btn">&radic; 已签到</button>
              </div>
            </div>
            <div class="wd_jb">
              <div class="jinbi">
                <img src="../../static/img/wd_xx.png" >
                <span class="jinbi_l">9999</span>
              </div>
              <div class="chongzhi">
                <img src="../../static/img/wd_rb.png" alt="">
                <span class="yxcz">游戏充值</span>
              </div>
            </div>
          </div>
          <div v-else class="wd_header">
            <div class="wd_wdl">
              <div class="wdl_tx">
                <img src="../../static/img/wd_wdltx.png" alt="">
              </div>
              <div class="wdl_ts">登陆后关注更多活动</div>
              <div class="wdl_zc">
                <button class="wdl_btn">登陆/注册</button>
              </div>
            </div>
          </div>
          <div class="wd_sec">
            <div class="wd_list jfcj">
              <img src="../../static/img/wd_jfsj.png" alt="">
              <span class="jfcj_tit">积分抽奖</span>
              <span class="wd_rg jfcj_rg"></span>
            </div>
            <div class="wd_list tgyx">
              <img src="../../static/img/wd_tgyx.png" alt="">
              <span class="jfcj_tit">推广游戏</span>
              <span class="wd_rg jfcj_rg"></span>
            </div>
            <div class="wd_list jfjl">
              <img src="../../static/img/wd_jfjl.png" alt="">
              <span class="jfcj_tit">积分记录</span>
              <span class="wd_rg jfcj_rg"></span>
            </div>
            <div class="wd_list lbjl">
              <img src="../../static/img/wd_lbjl.png" alt="">
              <span class="jfcj_tit">礼包记录</span>
              <span class="wd_rg jfcj_rg"></span>
            </div>
            <div class="wd_list mmxg">
              <router-link to="/wode/xgmm">
                <img src="../../static/img/wd_mmxg.png" alt="">
                <span class="jfcj_tit">密码修改</span>
                <span class="wd_rg jfcj_rg"></span>
              </router-link>
            </div>
          </div>
          <a href="" class="jftx_btn">积分体现</a>
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
      dlzt:1
    }
  }
}
</script>

<style lang="less" scoped>
.wd{
  height: auto;
  width: 6.4rem;
  background: url(../../static/img/wd_bg.png) no-repeat;
  background-size: 6.4rem 3.04rem;
  .wd_cont{
    padding: 1.42rem .3rem 0 .3rem;
    .wd_header{
      height: 1.98rem;
      background: #fff;
      border-radius: 4px;
      border-bottom: .07rem solid #eeeeef;
      // 登陆后样式
      .wd_xx{
        width: 100%;
        display: table;
          .wd_tx{
          width: 1.22rem;
          height: 1.22rem;
          margin-left: .2rem;
          float: left;
          img{
            margin-top: -.17rem;
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .wd_mc{
          float: left;
          font-size: .24rem;
          color: #444444;
          font-weight: 500;
          margin: .38rem 0 0 .3rem;
        }
        .wd_qd{
          float: right;
          margin: .29rem .3rem 0 0;
          .qd_btn{
            width: 1.2rem;
            height: .52rem;
            font-size: .2rem;
            color: #fff;
            border: none;
            border-radius: .23rem;
            background: #0ed8b9;
          }
        }
      }
      .wd_jb{
        padding: .15rem .6rem 0 .6rem;
        overflow: hidden;
        .jinbi{
          float: left;
          position: relative;
          img{
            width: .3rem;
            height: .3rem;
          }
          .jinbi_l{
            display: inline-block;
            font-size: .24rem;
            color: #555555;
            position: absolute;
            top: .02rem;
            left: .56rem;
          }
        }
        .chongzhi{
          float: right;
          position: relative;
          right: 1.2rem;
          img{
            width: .33rem;
            height: .28rem;
          }
          .yxcz{
            display: inline-block;
            font-size: .24rem;
            color: #555555;
            position: absolute;
            top: -.02rem;
            left: .55rem;
            width: .96rem;
          }
        }
      }
      // 未登录样式
      .wd_wdl{
        text-align: center;
        .wdl_tx{
          display: inline-block;
          width: 1.22rem;
          height: 1.22rem;
           margin-top: -.77rem;
          img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            margin-bottom: .15rem;
          }
        }
        .wdl_ts{
          font-size: .22rem;
          color: #7f7f7f;
        }
        .wdl_zc{
          margin-top: .16rem;
          .wdl_btn{
            width: 2.8rem;
            height: .52rem;
            background: #ff322b;
            color: #fff;
            font-size: .24rem;
            border: none;
            border-radius: .2rem;
          }
        }
      }
    }
    .wd_sec{
      margin-top: .25rem;
      .wd_list{
        width: 100%;
        height: .69rem;
        border-bottom: 1px solid #eeeeee;
        line-height: .69rem;
        padding: 0 .17rem 0 .15rem;
        overflow: hidden;
        img{
          width: .24rem;
          height: .26rem;
          float: left;
          margin-top: .22rem;
        }
        .jfcj_tit{
          font-size: .22rem;
          color: #737373;
          margin-left: .24rem;
        }
        .wd_rg{
          display: block;
          width: .1rem;
          height: .18rem;
          background: url(../../static/img/wd_right.png);
          background-size: .1rem .18rem;
          float: right;
          margin-top: .26rem;
        }
      }
    }
    .jftx_btn{
      display: block;
      margin: 0 auto;
      width: 4.57rem;
      height: .63rem;
      text-align: center;
      line-height: .63rem;
      background: #ff312b;
      color: #fff;
      font-size: .24rem;
      border-radius: .25rem;
      margin-top: 2.18rem;
    }

  }
}
</style>

