var db=require('../dbconnection');

var Operator={

getOperatorName:function(code,callback){
    return db.query("select operatorName from mobileOperator where mobileCode=?",[code],callback);
},
getOperatorCode:function(name,callback){
    return db.query("select mobileCode from mobileOperator where operatorName=?",[name],callback);
},
};
module.exports=Operator;