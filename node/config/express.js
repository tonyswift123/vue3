const express=require("express");
const bodyParser=require("body-parser");
const router=express.Router();
const util = require('util');
const fs=require("fs");
const path=require("path");
import logger from "../utils/log.js";
export default function(){
const app=express();
//将app.listen转换成promise函数并暴露出去
app.listen = util.promisify(app.listen);
app.use(allowOrigin);
//解析JSON 数据类型
app.use(bodyParser.json());
//解析表单数据类型
app.use(bodyParser.urlencoded({extended:false}));
//配置跨域
function allowOrigin(req,res,next){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
    res.setHeader("Access-Control-Allow-Methods","PUT,OPTIONS,POST,GET,DELETE");
    next();
}
//添加中间件,
app.use(async(req,res,next)=>{
    next();
})
//动态路由的添加
let projectPath=process.cwd(); //当前项目的绝对路径
let filePath=projectPath+'/routers'; //路由文件的绝对路径
fs.readdirSync(filePath).forEach(file=>{
    let filerealpath=path.join(filePath,file)
    require(filerealpath)(app)
})
return app;
}
