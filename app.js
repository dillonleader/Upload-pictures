const express = require('express')
const app = express()
const mysql = require("mysql")
const bodyParser = require("body-parser")
const router = require("./router/router")

app.engine('html', require('express-art-template'))

app.use('/public/', express.static('./public/'))
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

// 将路由挂载到appz.js中
app.use(router)

app.listen(3002)