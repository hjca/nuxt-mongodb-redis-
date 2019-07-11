import Router from 'koa-router';
import Redis from 'koa-redis';
import nodeMailer from 'nodemailer';
import User from '../dbs/models/users';
import Passport from './utils/passport';
import Email from '../dbs/config';
import axios from './utils/axios';

let router = new Router({
    prefix: '/users'
})

let Store = new Redis().client

//注册接口
router.post('/registered', async (ctx) => {

    //post请求，用ctx.request.body获取传递过来的参数数据
    const {
        username,
        password,
        email,
        code
    } = ctx.request.body;

    //验证码的验证
    if (code) {
        const saveCode = await Store.hget(`nodemail:${username}`, 'code');
        const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')

        if (code === saveCode) {
            if (new Date().getTime() - saveExpire > 0) {
                ctx.body = {
                    code: -1,
                    msg: '验证码已过期，请重新尝试'
                }
                return false
            }
        } else {
            ctx.body = {
                code: -1,
                msg: '请填写正确的验证码'
            }
        }
    } else {
        ctx.body = {
            code: -1,
            msg: '请填写验证码'
        }
    }

    //验证用户名
    let user = await User.find({
        username
    })
    if (user.length) {
        ctx.body = {
            code: -1,
            msg: '已被注册'
        }
        return;
    }

    //开始将用户信息存入数据库里面
    let nuser = await User.create({
        username,
        password,
        email
    })
    //注册成功后，自动登录
    if (nuser) {
        let res = await axios.post('/users/login', {
            username,
            password
        })
        if (res.data && res.data.code === 0) {
            ctx.body = {
                code: 0,
                msg: '注册成功',
                user: res.data.user
            }
        } else {
            ctx.body = {
                code: -1,
                msg: 'error'
            }
        }
    } else {
        ctx.body = {
            code: -1,
            msg: '注册失败'
        }
    }
})

//登录接口
router.post('/login', async (ctx, next) => {
    return Passport.authenticate('local', function (err, user, info, status) {
        if (err) {
            ctx.body = {
                code: -1,
                msg: err
            }
        } else {
            if (user) {
                ctx.body = {
                    code: 0,
                    msg: '登陆成功',
                    user
                }
                return ctx.login(user)
            }else{
                ctx.body = {
                    code: 1,
                    msg: info
                }
            }
        }
    })(ctx,next)
})

//验证码
router.post('/verify',async (ctx,next) => {
    let username = ctx.request.body.username;
    const saveExpire = await Store.hget(`nodemail:${username}`,'expire')
    if(saveExpire && new Date().getTime() - saveExpire < 0) {
        ctx.body = {
            code:-1,
            msg: '验证码请求过于频繁，2分钟你1次'
        }
        return false
    }

    // 设置邮箱链接
    let transporter = nodeMailer.createTransport({
        service: 'qq',
        auth: {
            user: Email.smtp.user,
            pass: Email.smtp.pass
        }
    })
    let ko = {
        code: Email.smtp.code(),
        expire: Email.smtp.expire(),
        email:ctx.request.body.email,
        user: ctx.request.body.username
    }
    let mailOptions = {
        from: `"认证邮件" <${Email.smtp.user}>`,
        to: ko.email,
        subject: "仿酒仙网注册码",
        html: `您在仿酒仙网中的注册码是${ko.code}`
    }
    // 开始发送
    await transporter.sendMail(mailOptions,(error,info) => {
        if(error){
            return console.log("error")
        }else{
            Store.hmset(`nodemail:${ko.user}`,'code',ko.code,'expire',ko.expire,'email',ko.email)
        }
    })
    ctx.code = {
        code: 0,
        msg: '验证码已发送，可能会有延迟，有效期为2分钟'
    }
})

// 退出接口
router.get('/exit',async(ctx,next) => {
    await ctx.logout();
    if(!ctx.isAuthenticated()) {
        ctx.body = {
            code: 0
        }
    }else {
        ctx.body = {
            code: -1
        }
    }
})

//获取用户信息
router.get('/getUser',async (ctx) => {
    if(ctx.isAuthenticated()) {
        const {
            username,
            email
        } = ctx.session.Passport.user;
        ctx.body = {
            user: username,
            email
        }
    }else{
        ctx.body = {
            user: '',
            email: ''
        }
    }
})

export default router;
