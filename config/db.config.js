//const mysql = require('mysql');
//local mysql db connection
/*const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node_mysql_crud_db'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;*/

module.exports = {
    HOST: "localhost",
    USER: "anil",
    PASSWORD: "123",
    DB: "node_mysql_crud_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };