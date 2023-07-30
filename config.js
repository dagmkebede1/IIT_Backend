const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

let connectionInfo = mysql.createPool({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
module.exports = {
  connectionInfo,
};
