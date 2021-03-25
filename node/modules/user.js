import connection from "./index"
console.log(connection)
export const user={
  findUser:function(){  connection.query('SELECT * FROM user',function(err,result){
      console.log(result)
    })
  }
}
