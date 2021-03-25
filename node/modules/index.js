const mysql = require("mysql")
import {config} from "../config/config"
const db=config.db
const connection =mysql.createConnection(db)
connection.connect();
console.log("connection::"+connection)
export default connection