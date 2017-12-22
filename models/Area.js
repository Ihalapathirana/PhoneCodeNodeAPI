var db=require('../dbconnection');

var Area={

getAllAreaList:function(callback){

return db.query("Select * from Area",callback);

},
getAreaByCode:function(code,callback){
    return db.query("select province,district,areaName,areaCode from Area where areaCode=?",[code],callback);
},
getCodeByAreaName:function(name,callback){
    return db.query("select province,district,areaName,areaCode from Area where areaName=?",[name],callback);
},
};
module.exports=Area;