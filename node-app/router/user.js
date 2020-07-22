const express = require('express'),
controller = require('../controller/user'),
//创建路由
router = express.Router(),
//因为注册是通过post表单提交数据，必须引入body-parser中间件，通过req.body获取表单数据
bodyParser = require('body-parser')
//注册bodyParser中间件
router.use(bodyParser.urlencoded({extended:false}))
    .post('/api/resgister',controller.resgister)
    .post('/api/login',controller.login)
    .get('/api/logout',controller.logout)
    .get('/api/queryUserList',controller.queryUserList)
    .post('/api/modifyPersonalInfo',controller.modifyPersonalInfo)
    .post('/api/modifyPower',controller.modifyPower)
module.exports = router