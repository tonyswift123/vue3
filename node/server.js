import express from "./config/express";
import {config} from "./config/config"
const server=express();
console.log("端口："+process.env.PORT);
server.listen(config.port).then(function(){
    console.log("the server is running is port:"+config.port);
})