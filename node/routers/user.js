
 const express=require("express");
 const router=express.Router();
 import logger from "../utils/log.js";
 import userControl from "../controls/user"
 module.exports=function(app){
    router.post("/login",userControl.login)
     app.use("/api",router);//添加请求接口的前缀
 }