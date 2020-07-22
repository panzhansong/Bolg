/**
 * USER.js 文件主要是操作用户的一些登录 登出操作
 */
//导入数据库连接
const connection = require('../model/db')
//导入格式化时间：moment
const moment = require('moment')
//导入md5文件
const md5 = require('md5')
//导入qs文件
const qs = require('querystring')

/**
 * 用户注册
 * @param userName password nickName mobilePhone 
 */
const resgister = (req,res) => {
    //通过req.body获取表单数据
    let params = req.body
    //格式化时间
    params.createTime = moment().format('YYYY-MM-DD hh:mm:ss')
    //加密密码
    params.password = md5(md5(params.password))
    //书写sql语句
    const resgisterSql = 'insert into user set ?'
    //执行sql语句使用connection.query()方法
    connection.query(resgisterSql,params,(err,result) => {
        if(err) return res.send({message:'用户注册失败',status:501})
        if(result.affectedRows !== 1) return res.send({message:'用户注册失败',status:502})
        res.send({message:'用户注册成功',status:200})
    })
}

const login = (req,res) => {
    let body = req.body
    body.password = md5(md5(body.password))
    const nJwt = require('njwt'),
    secureRandom = require('secure-random'),
    signingKey = secureRandom(256, {type: 'Buffer'})
    claims = {
        iss: "www.songpanzhan.cn",  // The URL of your service
        sub: "users/user1234",    // The UID of the user in your system
        scope: "self, admins"
    }
    jwt = nJwt.create(claims,signingKey)
    token = jwt.compact()
    console.log(body)
    const loginSql = 'select * from user where userName = ? and password = ?'
    connection.query(loginSql,[body.userName,body.password],(err,result)=>{
        if(err) return res.send({message:'登录失败',status:501})
        console.log(result)
        if(result.length !== 1) return res.send({message:'登录失败',status:502})
        res.send({message:'登录成功',status:200,token:token})
    })
}

const logout = () => {
    console.log('用户退出')
}

const queryUserList = (req,res) => {
    const queryUserListSql = 'select * from user'
    connection.query(queryUserListSql,(err,result) => {
        if(err) return res.send({message:'查询用户列表失败',status:501,data:[]})
        if(result.length) {
            result.forEach((item) => {
                delete item.password
            })
        }
        res.send({message:'查询用户列表成功',status:200,data:result})
    })
}

const modifyPersonalInfo = (req,res) => {
    console.log('修改个人信息')
}

const modifyPower =(req,res) => {
    console.log('修改权限控制')
}

module.exports = {
    resgister,
    login,
    logout,
    queryUserList,
    modifyPersonalInfo,
    modifyPower
}