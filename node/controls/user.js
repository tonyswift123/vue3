import logger from "../utils/log.js";
// import {user} from "../modules/user.js"
var mysql = require("mysql")
import {config} from "../config/config"
var db=config.db
//创建连接
var connection = mysql.createConnection(db);
// 建立连接
connection.connect();
// console.log("connection::"+JSON.stringify(connection))
console.log(config.db)
const userControl = {
    login:function(req,res){
        logger.info("登录请求信息展示:"+req.body)
        connection.query('SELECT * FROM userinfo',function(err,result){
            console.log(result)
            logger.info("查询数据库信息:"+JSON.stringify(result))
            res.json({code:0,msg:'hhhhh'})
        })
        
    }
}
export default userControl