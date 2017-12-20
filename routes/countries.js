var express = require('express');
var router = express.Router();
var Country=require('../models/Country');

router.get('/:code?',function(req,res,next){

if(req.params.code){

    Country.getCountryByCode(req.params.code,function(err,rows){

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

 Country.getAllCountry(function(err,rows){

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

router.get('/getCountry/:name?',function(req,res,next){
if(req.params.name){
    Country.getCodeByCountryName(req.params.name,function(err,rows){
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

module.exports=router;