var express = require('express');
var app = express();

var bodyparser = require('body-parser');
var cors = require('cors');
var http = require('http');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    limit: '50mb',
    extended : true
}));
app.use(cors());


app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-headers','content-type');
    res.setHeader('Acess-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Expose-headers','x-access-token');
    next();
})

app.listen(8080,function () {
    console.log(`server listen pon port 8080`)
})


app.use('/apirt1',require('./api/routes/apiRtr'));

