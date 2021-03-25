数据库使用的是mysql7
# 控制层
# 服务层
# ORM数据访问

# 分层的概念
前端请求==》路由层==》控制层==》服务层==》ORM数据访问层==》数据库
# ORM：数据访问框架 sequelize
需要数据模型对象去访问数据
数据模型对象---数据库表  需要一一对应


# 创建模型对象
# 加载模型对象
在modules下创建index.js,用于加载所有模型文件
其他模块使用此模型时，需要引入index
cnpm i  -s sequelize mysql mysql2
