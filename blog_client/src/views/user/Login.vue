<template>
  <div class="login">
    <div class="ui container">
      <div class="body">
        <div class="sidebox">
          <div class="sidebox_container">
            <div class="sidebox_header">
              <div class="sidebox_logo">
                <img src="@/assets/images/logo.png" alt="logo">
              </div>
              <h1 class="sidebox_title"></h1>
              <h2 class="sidexbox_subtitle">个人博客后台管理系统</h2>
            </div>
            <div class="sidebox_content">
              <div class="sidebox_content_container">
                <div class="sidebox_content_header">
                    <span>IT程序员</span>
                    <span style="margin-left: 12px;">前端开发工程师</span>
                </div>
                <div class="sidebox_content_content">
                    一个简单的博客后台管理系统, 期待未来自己技术继续发展，成为中国开发行业发展之基石！
                </div>
              </div>
            </div>
            <div class="sidebox_footer"></div>
          </div>
        </div>
        <div class="form">
          <header class="form_header">
            <h2 class="form_title">
              <span>登录</span>
            </h2>
            <span class="pull_right">
              没有帐号？
              <router-link to="/register">点击注册</router-link>
            </span>
          </header>
          <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit">
              <a-form-item>
                <a-input
                  v-decorator="[
                    'userName',
                    { rules: [{ required: true, message: '请输入用户名!' }] },
                  ]"
                  placeholder="用户名">
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input
                  v-decorator="[
                    'password',
                    { rules: [{ required: true, message: '请输入密码!' }] },
                  ]"
                  type="password"
                  placeholder="请输入密码"
                >
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-checkbox
                  v-decorator="[
                    'remember',
                    {
                      valuePropName: 'checked',
                      initialValue: true,
                    },
                  ]"
                >
                  记住我
                </a-checkbox>
                <a-button  type="link" class="login-form-forgot" >
                  短信验证登录
                </a-button>
                <a-button type="primary" html-type="submit" class="login-form-button">
                  登录
                </a-button>
                <div class="forget_password">
                  <router-link to='password/new'>已有帐号，忘记密码？</router-link>
                </div>
              </a-form-item>
          </a-form>
          <div class="login_other">
            <div class="login_other_container">
              <div class="login_other_title">
                <span style="color: #8c92a4;">其他登录方式</span>
              </div>
              <div class="login_other_list">
                <div class="item">
                  <a-icon type="wechat" :style="{ fontSize: '32px', color: '#08c' }"/>
                </div>
                <div class="item">
                  <a-icon type="github" :style="{ fontSize: '32px', color: '#08c' }"/>
                </div>
                <div class="item">
                  <a-icon type="qq"  :style="{ fontSize: '32px', color: '#08c' }"/>
                </div>
                <div class="item">
                  <a-icon type="weibo-circle" :style="{ fontSize: '32px', color: '#08c' }"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>
<script>
import { setToken } from '@/util/util'
import Cookies from 'js-cookies'
export default {
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          delete values.remember
          this.$http.post('/api/login',values).then(res => {
            if (res.data.status === 200) {
              this.$message.success(res.data.message)
              Cookies.set('token',res.data.token)
              setTimeout(() => {
                this.$router.push('/')
              },2000)
            }
          })
        }
      })
    }
  }
}
</script>
<style lang='less' scoped>
.login{
    width:100%;
    height: 100%;
    position: relative;
    top:0;
    left:0;
    .ui{
      &.container{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1000px;
        padding: 0;
        z-index: 1;
        transform: translate(-50%, -50%);
      }
      .body{
        display: flex;
        margin: auto;
        width: inherit;
        position: relative;
        box-shadow: 0px 20px 80px 0px rgba(0,0,0,0.3);
        &:before{
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          overflow: hidden;
          background: #fff;
        }
        .sidebox, .form {
          margin: 0 auto;
          width: 50%;
          min-height: 564px;
        }
        .sidebox{
          color: #fff;
          position: relative;
          padding: 80px 80px 48px;
          box-sizing: border-box;
          background: -webkit-gradient(linear, left bottom, left top, from(#3a485a), to(#607089));
          background: linear-gradient(0deg, #3a485a 0%, #607089 100%);
          &:before,&:after{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
          }
          &:before{
            background: url('../../assets/images/sidebox-left.png') no-repeat 0 0;
          }
          &:after{
            background: url('../../assets/images/sidebox-left1.png') no-repeat right bottom;
          }
          .sidexbox_subtitle{
            color:#fff;
            text-align: center;
          }
          .sidebox_container{
            position: relative;
            z-index: 1;
            height: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .sidebox_logo{
              img{
                width:300px;
              }
            }
            .sidebox_content{
              flex:1;
              .sidebox_content_container{
                color: #fff;
                font-size: 14px;
                margin-top: 46px;
                .sidebox_content_header{
                  opacity: 0.5;
                }
                .sidebox_content_content{
                  margin-top: 16px;
                  line-height: 1.71429;
                }
              }
            }
          }
        }
        .form{
          height: 100%;
          padding: 64px 75px 48px;
          position: relative;
          .form_header{
            display: flex;
            margin-bottom: 24px;
            justify-content: space-between;
            align-items: flex-end;
            .form_title{
              display: inline-block;
            }
            .pull_right{
              float: right;
            }
          }
          .forget_password{
            text-align:center;
          }

          .login_other{
            margin-top: 44px;
            .login_other_container{
              margin-top: 24px;
              .login_other_title{
                position: relative;
                text-align: center;
                margin-bottom: 32px;
                &::after,&::before{
                  content: '';
                  position: absolute;
                  top: 50%;
                  width:130px;
                  height: 14px;
                }
                &::before{
                  background: url('../../assets/images/logo_xian.png') no-repeat;
                  left: 0;
                }
                &::after{
                  background: url('../../assets/images/logo_xian.png') no-repeat;
                  right: 0;
                }
              }
              .login_other_list{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding:0 48px;
                box-sizing: border-box;
              }
            }
          }
        }
      }
      .footer{
        margin-top: 50px;
        text-align: center;
      }
    }
    &::after{
      content: '';
      width: 394px;
      height: 468px;
      background: url('../../assets/images/bg-left.png') center center no-repeat;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    &::before{
      content: '';
      width: 487px;
      height: 412px;
      background: url('../../assets/images/bg-right.png') center center no-repeat;
      position: absolute;
      bottom: 0;
      right: 0;
    }
}

#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
  padding:0
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
  color:#fff;
  background: #fe7300;
  border-color:transparent;
}
</style>
