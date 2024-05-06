var sqldb = require('../../../config/dbconfig');
var dbutils = require('../../../utils/db.utils')



exports.getAdminInventoryMdl = () => {
    var QRY_TO_EXEC = `select * from inventory_dtl_t where inventory_status=1 and a_in=1`;
	console.log(QRY_TO_EXEC)
	return dbutils.execQry(QRY_TO_EXEC);
}

exports.insertAdminInventoryMdl = (data) => {
    var qryval = ``
    var count = 0;
    var dlmr = `,`
	console.log(data.invtry)
    data.invtry.filter((k)=>{
		count ++ 
        if(count ==data.invtry.length){
            dlmr = `;`
        }
        qryval += `('${k.invtry_name}','${k.invtry_price}',1,1,current_timestamp()) ${dlmr}`
    })
    var QRY_TO_EXEC = `insert into inventory_dtl_t (inventory_name,inventory_price,inventory_status,a_in,i_ts) values `;
	QRY_TO_EXEC = QRY_TO_EXEC + qryval ;
	console.log(QRY_TO_EXEC)
    return dbutils.execQry(QRY_TO_EXEC);
}

exports.updateAdminInventoryMdl = (data) => {
    var invname = ``;
    var invprice = ``;
    var invsts = ``;
    if(data.invtry_name){
        invname = `,inventory_name='${data.invtry_name}'`
    }
    if(data.invtry_price){
        invprice = `,inventory_price='${data.invtry_price}'`
    }
	if(data.invtry_status){
		invsts=`,inventory_status='${data.invtry_status}'`
	}
    var QRY_TO_EXEC = `update inventory_dtl_t set u_ts=current_timestamp() ${invname} ${invprice} ${invsts} where inventory_id=${data.invtry_id} `;
	console.log(QRY_TO_EXEC)
    return dbutils.execQry(QRY_TO_EXEC);
}

exports.deleteAdminInventoryMdl = (data) => {
    var QRY_TO_EXEC = `update inventory_dtl_t set a_in=0 where inventory_id in (${data.invtry_id})`;
	console.log(QRY_TO_EXEC)
    return dbutils.execQry(QRY_TO_EXEC);
}

exports.mangeAdminInventoryMdl = (data) => {
    var invname = ``;
    var invprice = ``;
    var invsts = ``;
    if(data.invtry_name){
        invname = `,inventory_name='${data.invtry_name}'`
    }
    if(data.invtry_price){
        invprice = `,inventory_price='${data.invtry_price}'`
    }
	if(data.invtry_status){
		invsts=`,inventory_status='${data.invtry_status}'`
	}
    var QRY_TO_EXEC = `update inventory_dtl_t u_ts=current_timestamp() ${invname} ${invprice} ${invsts} where inventory_id=${data.invtry_id}`;
	console.log(QRY_TO_EXEC)
    return dbutils.execQry(QRY_TO_EXEC);
}

exports.getUserInventoryMdl = () => {
    var QRY_TO_EXEC = `select * from inventory_dtl_t where inventory_status=1 and a_in=1`;
	console.log(QRY_TO_EXEC)
    return dbutils.execQry(QRY_TO_EXEC);
}

exports.userOrderInventroyMdl = (data) => {
    var qryval = ``
    var count = 0;
    var dlmr = `,`
    data.order.filter((k)=>{
		count++
        if(count==data.order.length){
            dlmr = `;`
        }
        qryval += `(${k.invtry_id},current_timestamp()) ${dlmr}`
    })
    var QRY_TO_EXEC = `insert into order_dtl_t (inventory_id,i_ts) values `;
	QRY_TO_EXEC = QRY_TO_EXEC + qryval;
	console.log(QRY_TO_EXEC)
    return dbutils.execQry(QRY_TO_EXEC);
}

exports.userUpdateOrderInventroyMdl = (data) => {
	var invntyids = []
	data.order.filter((k)=>{
		invntyids.push(k.invtry_id)
	})
    var QRY_TO_EXEC = `update inventory_dtl_t set inventory_status=0 where inventory_id in (${invntyids})`;
	console.log(QRY_TO_EXEC)
    return dbutils.execQry(QRY_TO_EXEC);
}