var mysql = require('../config/dbconfig');


exports.execQry = function (qry, callback) {
	if(callback && typeof callback == "function")
		execEachQry(qry , function (err, data) {
				if(err){
					callback(err,null)
					return;
				} else {
					callback(false,data)
					return;
				}
			})
	else 
		return new Promise ((resolve, reject)=>{
			execEachQry(qry , function (err, data) {
				if(err){
					reject(err)
				} else {
					resolve(data)
				}
			})
		})
}

function execEachQry (qry, callback){
	mysql.mySqlConnection.getConnection(function(err,connection) {
		connection.query(qry,function(err,data) {
			connection.release()
			if(err) {
				callback(err,null)
				return;
			}
			callback(false,data)
			return;
		})
	})
}