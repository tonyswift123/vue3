# 支持ES6模块化
安装依赖：
babel-cli  babel-preset-env  babel-plugin-add-module-exports

测试babel-node
npx babel-node


# .babelrc (该文件创建在根目录下)
{ 
    "presets": ["env"],
    "plugins": ["add-module-exports"]
}
启动npx babel-node server.js
# 添加日志  
# winston 日志框架
cnpm i winston
简单封装日志工具
const {createLogger, format, transports} =require("winston")
//格式化日志呈现的信息定义
const myFormat=format.printf(log=>{
    return `${log.timestamp} ${log.level}: ${log.message}`
})
const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        myFormat
    ),
    transports: [//日志输出的地方
        new transports.Console()
    ],
});
  export default logger;

  # 在页面中的使用
  1.先引入该工具
  import logger from "../utils/log.js";
  2.具体使用
  三种方式 logger.info  ,logger.error,logger.warn  这三个是有优先级的
  实例：
   logger.info(`/getInfo接口请求成功${req.url}`);
   # 将日志文件输入到文本里面
   new transports.File({filename:'./log_module/logf.log'})


   # 可配置项  
   1.端口  process.env.PORT
   2.node中设置环境变量：
   cnpm i cross-env -s
   通过cross-env在程序启动前设置环境变量PORT
   "scripts": {
    "start": "cross-env PORT=4000 babel-node server.js"
  },
  通过process.env.PORT获取设置的不同环境的端口
  # 路由配置
  把路由单独抽离出来，动态加载所有路由
  在路由中绑定相应的控制器
 # 路由项的备注
 1.两种书写方式:(1) router.get("/getinfo",控制器) 
             （2）router.route("/getinfo").get(控制器)
2.

# 控制器
控制器主要是分离业务逻辑

# 在接口中添加日志

# 动态加载路由
1.利用fs模块
2.利用到项目所处的目录：process.cwd()
以及文件所处的目录:具体的目录
上述拼接起来的目录fileDir
fs.readdirSync(fileDir).forEach(file=>{
    console.log(file);
    //将路由路径和文件名合并在一起利用path.join()
    var filepath=path.join(fileDir,file);
    require(filepath)(app)
})

# express koa 
用起来差别不大 







