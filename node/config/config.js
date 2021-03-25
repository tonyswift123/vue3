export const config={
    port:process.env.PORT||'2222',
    db:{
        database: 'user',//使用哪个数据库
        user: 'root',
        password: '123456',
        host: 'localhost',//主机名
        port: 3306 //端口号，MYSQL默认3306
        // timezone: '+08:00',时区
        // dialect: 'mysql',//数据库的方言
        // define:{
        //     timestamps:false
        // }
    }
}