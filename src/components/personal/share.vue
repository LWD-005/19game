<template>
  <div class="share">
      <div class="share_header">
          <div class="share_back"  @click="$router.go(-1);">
              <img :src="imgSrc+'back.png'" alt="">
          </div>
          <div class="share_icon">
              <img :src="imgSrc+'share_icon.png'" alt="">
          </div>
      </div>
      <div class="QR_code">
          <img :src="imgSrc+'share_qr.png'" alt="">
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
}
</script>


<style lang="less" scoped>
.share{
    width: 6.4rem;
    height: 11.36rem;
    background: url(../../../static/img/share_bg.png) no-repeat;
    background-size: 100% 100%;
    .share_header{
        overflow: hidden;
        padding-top: .27rem;
        .share_back{
            float: left;
            width: .18rem;
            height: .32rem;
            margin-left: .42rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .share_icon{
            width: .81rem;
            height: .43rem;
            float: right;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .QR_code{
        width: 2.86rem;
        height: 2.86rem;
        margin: 0 auto;
        margin-top: 6.07rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>
