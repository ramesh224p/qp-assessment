var apiMdl = require('../models/apiMdls');


exports.getAdminInventoryCtrl = (req, res) => {
    console.log("admingetinventory")
    apiMdl.getAdminInventoryMdl().then((data)=>{
        res.status(200).send({ status: true, data : data});
    }).catch((error)=>{
		console.log(error)
        res.send({status:400,data:error})
    })
}

exports.insertAdminInventoryCtrl = (req, res) => {
    apiMdl.insertAdminInventoryMdl(req.body).then((data)=>{
        res.send({status:200,data:"Data Inserted"})
    }).catch((error)=>{
        res.send({status:400,data:error})
    })
}

exports.updateAdminInventoryCtrl = (req, res) => {
    apiMdl.updateAdminInventoryMdl(req.body).then((data)=>{
        res.send({status:200,data:"Data Updated"})
    }).catch((error)=>{
        res.send({status:400,data:error})
    })
}

exports.deleteAdminInventoryCtrl = (req, res) => {
    apiMdl.deleteAdminInventoryMdl(req.body).then((data)=>{
        res.send({status:200,data:"Data Deleted"})
    }).catch((error)=>{
        res.send({status:400,data:error})
    })
}

exports.mangeAdminInventoryCtrl = (req, res) => {
    apiMdl.mangeAdminInventoryMdl(req.body).then((data)=>{
        res.send({status:200,data:data})
    }).catch((error)=>{
        res.send({status:400,data:error})
    })
}

exports.getUserInventoryCtrl = (req, res) => {
    apiMdl.getUserInventoryMdl().then((data)=>{
        res.send({status:200,data:data})
    }).catch((error)=>{
        res.send({status:400,data:error})
    })
}

exports.userOrderInventroyCtrl = (req, res) => {
    apiMdl.userOrderInventroyMdl(req.body).then((data)=>{
		apiMdl.userUpdateOrderInventroyMdl(req.body).then((data)=>{
			res.send({status:200,data:"Order Placed"})
		}).catch((error)=>{
			res.send({status:400,data:error})
		})
    }).catch((error)=>{
        res.send({status:400,data:error})
    })
}