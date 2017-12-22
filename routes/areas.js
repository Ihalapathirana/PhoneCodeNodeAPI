var express = require('express');
var router = express.Router();
var Area=require('../models/Area');

router.get('/getAreaName/:code?',function(req,res,next){
if(req.params.code){
    Area.getAreaByCode(req.params.code,function(err,rows){

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

 Area.getAllAreaList(function(err,rows){

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

router.get('/getAreaCode/:name?',function(req,res,next){
    Area.getCodeByAreaName(req.params.name,function(err,rows){

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