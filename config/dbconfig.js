var mysql = require('mysql');

var mySqlConnection = {};

var USER = 'rameshroot';
var PWD = 'Digit@l456';
var DB_HOST_NAME = '3.91.176.74';
var DB_PORT = '3306';
var DATABASE = 'ramesh';

/*var mySqlConnection = mysql.createPool({
    host : DB_Host,
    port : Db_Port,
    database : Db_DataBase,
    user : UserName,
    password : pwd
})*/

var MAX_POOL_SIZE = 800;
var MIN_POOL_SIZE = 200;

var mySqlConnection = mysql.createPool({
       host: DB_HOST_NAME,
       user: USER,
       password: PWD,
       port: DB_PORT,
       database: DATABASE,
       acquireTimeout: 5000,
       connectionLimit: MAX_POOL_SIZE,
       debug: false,
       multipleStatements: false,
       supportBigNumbers: true
});


exports.mySqlConnection = mySqlConnection;
