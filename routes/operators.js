var express = require('express');
var router = express.Router();
var Operator=require('../models/Operator');

router.get('/getOperatorName/:code?',function(req,res,next){
if(req.params.code){
    Operator.getOperatorName(req.params.code,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
else{

 Operator.getAllOperators(function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
 
    });
}
});

router.get('/getOperatorCode/:name?',function(req,res,next){
    Operator.getOperatorCode(req.params.name,function(err,rows){

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