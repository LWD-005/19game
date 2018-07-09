<template>
    <div class="giftRec">
        <div class="giftRec_header">
          <div class="giftRec_back"  @click="$router.go(-1);">
              <img :src="imgSrc+'back.png'" alt="">
          </div>
        </div>
        <div class="giftRecCont">
            <div class="giftRecTit">
                礼包记录
            </div>
            <div class="content">
                <div class="container" v-for="(item,index) in logList" :key="index">
                    <div class="giftIcon">
                        <img :src="item.icon" alt="">
                    </div>
                    <div class="copyCont">{{item.key}}</div>
                    <a class="copyBtn" v-clipboard:copy="item.key" v-clipboard:success="onCopy" v-clipboard:error="onError"><span>一键复制</span></a>
                </div>




                
            </div>
        </div>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return {
            logList:'',
            imgSrc:this.common.imgSrc
        }
    },
    created(){
        let apiUrl=this.common.apiUrl;
        //礼包列表传参
        let logParams = new URLSearchParams();
        let tokenLogin = window.localStorage.getItem('token');
        logParams.append('token',tokenLogin);
        logParams.append('page', 1);
        Axios({
            method:'post',
            url:apiUrl+'Game/GiftLog',
            data:logParams
        })
        .then((res)=>{
            this.logList=res.data.d.log;

        })
        .catch((error)=>{
            console.log(error);
            alert("网络错误，不能访问");
        })
    },
    methods: {
    onCopy: function (e) {
      console.log('你刚刚复制: ' + e.text)
    },
    onError: function (e) {
      console.log('无法复制文本！')
    }
  }
}
</script>

<style lang="less" scoped>
    .giftRec{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: url(../../../static/img/giftMaker.png) no-repeat;
        background-size: 100% 100%;
        .giftRec_header{
            overflow: hidden;
            padding-top: .27rem;
            .giftRec_back{
                width: .18rem;
                height: .32rem;
                margin-left: .42rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .giftRecCont{
            margin: .27rem .29rem 0 .29rem;
            .giftRecTit{
                width: 100%;
                height: .85rem;
                line-height: .85rem;
                color: #fff;
                text-align: center;
                background: #fc8c64;
                border-radius: .18rem .18rem 0 0;
                font-size: .3rem;
            }
            .content{
                width: 100%;
                height: 9rem;
                background: #fff;
                border-radius: 0 0 .18rem .18rem;
                overflow-y: auto;
                .container{
                    overflow: hidden;
                    width: 4.77rem;
                    height: 1.21rem;
                    line-height: 1.21rem;
                    margin: 0 auto;
                    border-bottom: 1px solid #eeeeee;
                    .giftIcon{
                        width: .81rem;
                        height: .81rem;
                        margin: .22rem .35rem 0 .05rem;
                        float: left;
                        img{
                            width: 100%;
                            height: 100%;
                            border-radius: .13rem;
                        }
                    }
                    .copyCont{
                        float: left;
                        width: 2.15rem;
                        height: 100%;
                        font-size: .22rem;
                        color: #737373;
                        margin-right: .34rem;
                    }
                    .copyBtn{
                        width: .93rem;
                        height: .38rem;
                        display: inline-block;
                        color: #fff;
                        font-size: .18rem;
                        font-family: "\9ED1\4F53";
                        text-align: center;
                        line-height: .38rem;
                        border-radius: 15px;
                        position: relative;
                        z-index: 0;
                        float: right;
                        margin: .45rem .13rem .09rem 0;
                        ::before{
                            content: '';
                            display: inline-block;
                            height: .1rem;
                            position: absolute;
                            bottom: -0.01rem;
                            left: .1rem;
                            right: .1rem;
                            z-index: -1;
                            border-radius: .1rem;
                            background: #ff302b;
                            -webkit-filter: blur(5px) brightness(0.95);
                            filter: blur(5px) brightness(0.95);
                        }
                        span{
                            display: inline-block;
                            width: .93rem;
                            height: .38rem;
                            line-height: .38rem;
                            border-radius: 15px;
                            position: relative;
                            z-index: 2;
                            background: -webkit-gradient(linear, left top, right top, from(#ff5526), color-stop(80%, #ff4429), to(#ff302b));
                            background: linear-gradient(to right, #ff5526 0%, #ff4429 80%, #ff302b 100%);
                        }
                    }
                }
            }
        }
    }
</style>
