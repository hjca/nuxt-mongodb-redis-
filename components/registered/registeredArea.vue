<!-- 填写信息的地方 -->
<template>
  <div class="registered-input-area">
    <el-form
      :model="registeredForm"
      :rules="valitiRules"
      status-icon
      ref="registeredForm"
      label-width="100px"
      label-position="right"
    >
      <el-form-item label="昵称" prop="name">
        <el-input type="text" v-model="registeredForm.name" prefix-icon="el-icon-user-solid" />
      </el-form-item>

      <el-form-item label="邮箱地址" prop="email">
        <el-input type="text" v-model="registeredForm.email" prefix-icon="el-icon-s-promotion" />
      </el-form-item>

      <el-form-item label="邮箱验证码" prop="verification">
        <div class="emailCode">
          <el-input type="text" v-model="registeredForm.verification" prefix-icon="el-icon-s-help" />
          <el-button type="danger" @click="sendEmailCode" :disabled="isDisabled">{{ buttonText }}</el-button>
        </div>
      </el-form-item>

      <el-form-item label="设置密码" prop="password">
        <el-input type="password" v-model="registeredForm.password" prefix-icon="el-icon-s-order" />
      </el-form-item>

      <el-form-item label="确认密码" prop="againpassword">
        <el-input
          type="password"
          v-model="registeredForm.againpassword"
          prefix-icon="el-icon-s-order"
        />
      </el-form-item>

      <el-form-item>
        <el-checkbox v-model="checked">
          我已阅读并同意
          <a href="http://help.jiuxian.com/view-1-112.htm">《酒仙网用户注册协议》</a>
        </el-checkbox>
        <div class="error" v-show="!checked">请接受服务协议！</div>
      </el-form-item>

      <el-form-item>
        <el-button class="startRegistered" @click="startRegistered">立即注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
export default {
  name: '',
  data() {
    let validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入昵称'))
      } else if (value && (value.length < 2 || value.length > 11)) {
        callback(new Error('长度在 2 到 11 个字符'))
      } else {
        callback()
      }
    }
    let validateEmail = (rule, value, callback) => {
      let emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/
      if (value === '') {
        callback(new Error('请输入邮箱'))
      } else if (value && !emailReg.test(value)) {
        callback(new Error('邮箱格式不正确'))
      } else {
        callback()
      }
    }
    let validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱验证码'))
      } else {
        callback()
      }
    }
    let validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请设置密码'))
      } else {
        callback()
      }
    }
    let validateAgainPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请确认密码'))
      } else if (value && value != this.registeredForm.password) {
        callback(new Error('两次输入密码不一致'))
      } else {
        callback()
      }
    }
    return {
      registeredForm: {
        name: '',
        email: '',
        verification: '',
        password: '',
        againpassword: ''
      },
      valitiRules: {
        name: [{ validator: validateName, trigger: 'blur' }],
        email: [{ validator: validateEmail, trigger: 'blur' }],
        verification: [{ validator: validateCode, trigger: 'blur' }],
        password: [{ validator: validatePassword, trigger: 'blur' }],
        againpassword: [{ validator: validateAgainPass, trigger: 'blur' }]
      },
      buttonText: '发送邮箱验证码',
      secound: 120, //发送邮箱倒计时
      timer: 0, //时间定时器
      isDisabled: false,
      checked: true
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    // 发送邮箱验证码
    sendEmailCode() {
      let that = this

      let emailVal
      let nameVal

      // 如果定时器存在，就不会执行后续操作
      if (that.timer) {
        return false
      }

      this.$refs['registeredForm'].validateField('name', valid => {
        nameVal = valid
      })
      this.$refs['registeredForm'].validateField('email', valid => {
        emailVal = valid
      })

      // 开始发送验证码
      if (!emailVal && !nameVal) {
        that.$axios
          .post('/users/verify', {
            username: encodeURIComponent(that.registeredForm.name),
            email: that.registeredForm.email
          })
          .then(({ status, data }) => {
            if (status === 200 && data && data.code === 0) {
              that.timer = setInterval(function() {
                if (that.secound == 0) {
                  clearInterval(that.timer)
                  that.isDisabled = false
                  that.buttonText = '发送邮箱验证码'
                } else {
                  that.isDisabled = true
                  that.secound -= 1
                  that.buttonText = `已发送(${that.secound})`
                }
              }, 1000)
            } else {
              that.$message.error(data.msg)
            }
          })
      }
    },
    // 开始注册
    startRegistered() {
      let that = this
      this.$refs['registeredForm'].validate(valid => {
        if (valid) {
          that.$axios
            .post('/users/registered', {
              username: window.encodeURIComponent(that.registeredForm.name),
              password: CryptoJS.MD5(that.registeredForm.password).toString(),
              email: that.registeredForm.email,
              code: that.registeredForm.verification
            })
            .then(({ status, data }) => {
              if (status === 200) {
                if (data && data.code === 0) {
                  that.$message({
                    message: data.msg,
                    type: 'success',
                    onClose() {
                      location.href = '/login'
                    }
                  })
                } else {
                  that.$message.error(data.msg)
                }
              }else{
                that.$message.error(`服务器出错，错误码：${status}`)
              }
            })
        }
      })
    }
  }
}
</script>
<style lang="scss">
.registered-input-area {
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-form {
    label {
      padding-right: 30px;
    }
    .el-input {
      width: 100%;
    }
    .emailCode {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .el-input {
        width: 148px;
      }
      .el-button {
        flex: 1;
        margin-left: 15px;
      }
    }
    .el-checkbox {
      color: #999;
    }
    .startRegistered {
      width: 302px;
      height: 42px;
      font-size: 18px;
      font-family: '微软雅黑';
      color: #fff;
      border-radius: 2px;
      border: none;
      background: #e10303;
    }
    .el-button--danger {
      background: #e10303;
    }
    .error {
      color: #e10303;
    }
  }
}
</style>