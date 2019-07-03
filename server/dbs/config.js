// 配置文件：   配置数据库的链接、邮箱验证码的发送等
export default {
  dbs: 'mongodb://127.0.0.1:27017/student',           //数据库连接地址，127.0.0.1代表链接本地数据库
  redis: {                                          //redis链接配置
    get host() {
      return '127.0.0.1'
    }
  },
  // 发送邮箱验证码的配置，链接腾讯的QQ邮箱
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return '1305273923@qq.com'
    },
    get pass() {
      return 'eralbvuagktcfjif'
    }
  },
  //   生成验证码
  get code() {
    return () => {
        return Math.random().toString(16).slice(2,6).toUpperCase();
    }
  },
  // 生成验证码有效时间  
  get expire() {
    return () => {
        return new Date().getTime() + 2 * 60 * 1000;
    }
  }
}
