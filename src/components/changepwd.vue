<template>
  <div class="xgmm">
     <div class="logo">
         <img src="../../static/img/logo.png">
     </div>
     <!-- 修改密码页 -->
     <div class="login" v-if="loginId == 'changepwd'">
        <div class="login_phone">
             <div class="phone_icon">
                 <img src="../../static/img/phone_icon.png" alt="">
             </div>
             <input type="text" placeholder="请输入注册手机号码" class="login_ipt phone_ipt">
        </div>
        <div class="login_phone login_verification">
             <div class="phone_icon verification_icon">
                 <img src="../../static/img/verification.png" alt="">
             </div>
             <input type="text" placeholder="请输入您的验证码" class="login_ipt phone_ipt">
             <a href="" class="verification_btn">发送验证码</a>
        </div>
         <div class="login_phone login_pwd">
             <div class="phone_icon">
                 <img src="../../static/img/newpwd.png" alt="">
             </div>
             <input type="text" placeholder="请输入您的新密码" class="login_ipt phone_ipt">
        </div>
        <a href="" class=" review_btn">确认修改</a>
     </div>
    <!-- 注册页 -->
    <div class="login" v-if="loginId == 'register'">
        <div class="login_phone">
             <div class="phone_icon">
                 <img src="../../static/img/phone_icon.png" alt="">
             </div>
             <input type="text" placeholder="请输入您的手机号码" class="login_ipt phone_ipt">
        </div>
        <div class="login_phone login_verification">
             <div class="phone_icon verification_icon">
                 <img src="../../static/img/verification.png" alt="">
             </div>
             <input type="text" placeholder="请输入您的验证码" class="login_ipt phone_ipt">
             <a href="" class="verification_btn">发送验证码</a>
        </div>
         <div class="login_phone login_pwd">
             <div class="phone_icon">
                 <img src="../../static/img/newpwd.png" alt="">
             </div>
             <input type="text" placeholder="请输入6-16位密码" class="login_ipt phone_ipt">
        </div>
        <a href="" class=" review_btn">确认修改</a>
     </div>
     <!-- 登陆页 -->
    <div class="login login_page" v-else>
       <div class="login_phone">
             <div class="phone_icon">
                 <img src="../../static/img/user_icon.png" alt="">
             </div>
             <input type="text" placeholder="请输入你的账号" class="login_ipt phone_ipt">
        </div>
         <div class="login_phone login_pwd">
             <div class="phone_icon">
                 <img src="../../static/img/newpwd.png" alt="">
             </div>
             <input type="text" placeholder="请输入密码" class="login_ipt loginPage_ipt">
        </div>
        <a href="" class="review_btn register_btn">注册</a>
        <p class="login_p"><a @click="register" class="qRegister">快速注册</a><a class="lostPwd">忘记密码？</a></p>
    </div>
  </div>
  
</template>

<script>
export default {
    data(){
         return{
             loginId:this.$route.query.id
         }
    },
  methods:{
     register(){
         this.$router.replace({path:'/changepwd',query:{id:'register'}});
         this.$router.go(0)
     }
  },
  
}

</script>

<style lang="less" scoped>
    .xgmm{
        .logo{
            position: relative;
            top: 1.64rem;
            margin: 0 auto;
            text-align: center;
            width: 3.47rem;
            height: 1.03rem;
            margin-bottom: .8rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .login{
            position: absolute;
            margin: 0 .5rem;
            margin-top: 1.64rem;
            width: 85%;
            .login_phone{
                border-bottom: 1px solid #e3e3e3;
                width: 100%;
                height: 1.04rem;
                padding: .55rem .35rem 0 .45rem;
                overflow: hidden;
                .phone_icon{
                    width: .22rem;
                    height: .35rem;
                    float: left;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .login_ipt{
                    border: none;
                    width: 60%;
                    height: .35rem;
                    line-height: .35rem;
                    padding-left: .27rem;
                    font-size: .24rem;
                    color: #949494;
                }
                input:-ms-input-placeholder{
                    color: #949494;
                }
                input::-webkit-input-placeholder{
                    color: #949494;
                }
            }
            .login_verification{
                padding-left: .35rem;
                .verification_icon{
                    width: .33rem;
                    height: .21rem;
                    margin-top: .08rem;
                    // position: relative;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .verification_btn{
                    position: relative;
                    top: -.17rem;
                    float: right;
                    width: 1.44rem;
                    height: .52rem;
                    line-height: .52rem;
                    display: block;
                    color: #fff;
                    background: #ff3d2a;
                    text-align: center;
                    font-size: .2rem;
                    border-radius: .2rem;
                }
            }
            .login_pwd{
                padding-left: .4rem;
                .phone_icon{
                    width: .28rem;
                    height: .29rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .review_btn{
                display: block;
                margin: 0 auto;
                width: 4.57rem;
                height: .63rem;
                line-height: .63rem;
                text-align: center;
                color: #FFF;
                background: #ff362b;
                font-size: .24rem;
                border-radius: .25rem;
                margin-top: .48rem;
            }
        }
        // 登陆页面样式
        .login_page{
            .login_phone{
                .phone_icon{
                    width: .3rem;
                    height: .35rem;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .login_p{
                margin-top: .35rem; 
                padding: 0 .5rem;
                .qRegister{
                    float: left;
                    font-size: .18rem;
                    color: #949494;
                }
                .lostPwd{
                     float: right;
                    font-size: .18rem;
                    color: #949494;
                }
            }
        }
    }
</style>

