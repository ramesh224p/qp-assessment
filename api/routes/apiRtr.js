var express = require('express');
var router = express.Router();

var apiCtrl = require('../modules/controllers/apiCtrl');

function checkheader(req, res, next){
	var key = 'fe73fa1282a3aa6c1dc5124dd458362c50fbf1f3';
    if (req.headers['access-key'] == key)
        return next();
    else
        return res.send({ status: 500, message: 'authentication failed' });
}

router.get('/admin/getinventory',checkheader,apiCtrl.getAdminInventoryCtrl);
router.post('/admin/insertinventory',apiCtrl.insertAdminInventoryCtrl);
router.put('/admin/updateinventory', apiCtrl.updateAdminInventoryCtrl);
router.delete('/admin/deleteinventory', apiCtrl.deleteAdminInventoryCtrl);
router.put('/admin/manageinventory', apiCtrl.mangeAdminInventoryCtrl);

router.get('/user/getinventory', apiCtrl.getUserInventoryCtrl);
router.post('/user/orderinventory', apiCtrl.userOrderInventroyCtrl);


module.exports = router;