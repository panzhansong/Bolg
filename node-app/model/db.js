/**
 * 数据库的登录密码
 */
//导入mysql这个模块
const mysql = require('mysql')
//使用mysq.createConnection()连接数据库
const connection = mysql.createConnection({
    host:'localhost', //数据库的地址
    user:'root',      //用户名
    password:'wmy520520',  //密码
    database:'blog',//数据库的名称
    multipleStatements:true
})
//讲这个连接数据库的方法暴露在全局
module.exports = connection