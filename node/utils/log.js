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
        new transports.Console(),
        new transports.File({filename:'./log_module/logf.log'})
    ],
  });
  export default logger;