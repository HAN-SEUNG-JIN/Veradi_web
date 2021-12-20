//데이터베이스 색인기능 도전 sql INDEX구문
//데이터베이스 정렬기능 도전 sql ORDER구문
//데이터베이스 페이지기능 도전 sql LIMIT구문
var mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "000000",
  database: "opentutorials",
  //multipleStatements:TRUE db.query()에서 다수의 sql문을 실행할수 있도록하는 옵션
});
db.connect();
module.exports = db;
