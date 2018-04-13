<template>
  <div class="download">
      <div class="down_header">
          <div class="down_banner">
              <img src="../../static/img/download_banner.png" alt="">
          </div>
          <div class="down_game">
              <div class="down_gameImg">
                  <img src="../../static/img/download_icon.png" alt="">
              </div>
              <div class="down_gameTit">
                 <p class="list_tit">保卫萝卜3</p>
                <p class="list_xz"><span class="xz_rl">98MB</span><span class="xz_l">1254万次下载</span></p>
                <div class="list_zt">
                    <p class="hero_zt"> 
                        <a href="" class="zt_hh">回合</a>
                        <a href="" class="zt_xx">休闲</a>
                        <a href="" class="zt_3d">3D</a>
                        <a href="" class="zt_zbqb">画面精美</a>
                    </p>
                </div>
              </div>
              <div class="list_btn">
                    <a href="" class="a_btn" >下载</a>
                </div>
          </div>
      </div>
      <div class="down_gameIntd">
          <div class="gameIntd">
            <img src="../../static/img/download_intd.png" alt="">
            <p class="gameIntd_tit">游戏介绍</p>
          </div>
          <div class="gameContent">
              <p class="gameContent_p">
                  《保卫萝卜-CarrotFantasy》是一款可爱风格塔防小游戏，容易上手、老少皆宜，内置新手引导。游戏含有丰富的关卡和主题包，拥有各自风格特色的多种防御塔，有趣的音效设定和搞怪的怪物造型及名字大大地增加了游戏的趣味性。玩家还可以收集道具和怪物，完成更多的成就。
              </p>
              <div class="gameContent_img">
                  <div class="gameContent_imgfl">
                      <img src="../../static/img/download_1.png" alt="">
                  </div>
                  <div class="gameContent_imgfr">
                      <img src="../../static/img/download_2.png" alt="">
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<style lang="less" scoped>
.download{
    .down_header{
        .down_banner{
            width: 100%;
            height: 2.3rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .down_game{
            height: 1.6rem;
            padding: 0 .1rem 0 .05rem;
            margin: 0 .3rem;
            border-bottom: 1px solid #eeeeee;
            .down_gameImg{
                width: 1.54rem;
                height: 1.54rem;
                float: left;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: -.37rem;
                }
            }
            .down_gameTit{
                float: left;
                margin-top: .15rem;
                margin-left: .15rem;
                width: 50%;
                .list_tit{
                    font-size: .24rem;
                    font-family: "黑体";
                    color: #444;
                    margin-bottom: .1rem;
                }
                .list_xz{
                    font-size: .14rem;
                    color: #bcbcbc;
                    font-family: "黑体";
                    height: .1rem;
                    line-height: .15rem;
                     margin-bottom: .08rem;
                    .xz_rl{
                        padding-right: .14rem;
                        border-right: 1px solid #bcbcbc;
                    }
                    .xz_l{
                        padding-left: .15rem;
                    }
                }
                .hero_zt{
                    a{
                        display: inline-block;
                        font-size: .12rem;
                        font-family: "黑体";
                        color: #fff;
                        height: .17rem;
                        line-height: .17rem;
                        // padding-top: .01rem;
                        width: .34rem;
                        text-align: center;
                        margin-right: .12rem;
                        border-radius: 2px;
                    }
                    .zt_hh{
                        background: #ff7750;
                    }
                    .zt_xx{
                        background: #be73ff;
                    }
                    .zt_3d{
                        background: #23c8af;
                    }
                    .zt_zbqb{
                        width: .70rem;
                        background: #fa9700;
                    }
                }
                .xz_zt{
                overflow: hidden;
                height: .26rem;
                line-height: .26rem;
                }
            }
            .list_btn{
                text-align: center;
                margin-top: .39rem;
                float: right;
                .a_btn{
                width: .93rem;
                height: .38rem;
                display: inline-block;
                background: #ff3f29;
                color: #fff;
                font-size: .18rem;
                font-family: "黑体";
                text-align: center;
                line-height: .38rem;
                border-radius: 15px;
                margin-bottom: .09rem;
                }
            }
            
        }
    }
    .down_gameIntd{
        padding: 0 .3rem;
        .gameIntd{
            padding: .24rem .1rem .15rem .08rem; 
            overflow: hidden;
            img{
                float: left;
                width: .17rem;
                height: .22rem;
            }
            .gameIntd_tit{
                float: left;
                font-size: .2rem;
                color: #444;
                margin-left: .08rem;
                margin-top: -.02rem;
            }
        }
        .gameContent{
            .gameContent_p{
                font-size: .16rem;
                color: #9f9f9f;
                text-align: justify;
                line-height: .34rem;
                padding: 0 .1rem 0 .08rem ;
            }
            .gameContent_img{
                margin-top: .24rem;
                overflow: hidden;
                .gameContent_imgfl{
                    float: left;
                    width: 47%;
                    height: 4.8rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .gameContent_imgfr{
                    float: right;
                    width: 47%;
                    height: 4.8rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
}
</style>
