const app = require('express')(),
    session = require('express-session'),
    fs = require('fs'),
    path = require('path')
fs.readdir(path.join(__dirname,'/router'),(err,files)=>{
    files.forEach(file => {
        if (err) return console.log('读取 router 目录中的路由失败！')
        const router = require(path.join(__dirname,'/router',file))
        app.use(router)
    })
})
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
    }))
    .listen(3000,()=>{
        console.log('server running at http://127.0.0.1:3000')
    })