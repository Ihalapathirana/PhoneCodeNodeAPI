var express = require('express');
var router = express.Router();
var Area=require('../models/Operator');

router.get('/getOperatorName/:code?',function(req,res,next){
if(req.params.code){
    Area.getOperatorName(req.params.code,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
});

router.get('/getOperatorCode/:name?',function(req,res,next){
    Area.getOperatorCode(req.params.name,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;