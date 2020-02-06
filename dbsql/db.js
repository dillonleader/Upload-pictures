const mysql = require("mysql")
var connsql = mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "2232723904",
    database: "picture",
})

connsql.connect(function(err){
    if(err) throw err
})

module.exports = connsql