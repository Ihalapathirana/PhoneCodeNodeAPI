var db=require('../dbconnection');

var Operator={
getAllOperators:function(callback){

return db.query("Select * from mobileOperator",callback);

},
getOperatorName:function(code,callback){
    return db.query("select operatorName,mobileCode from mobileOperator where mobileCode=?",[code],callback);
},
getOperatorCode:function(name,callback){
    return db.query("select operatorName,mobileCode from mobileOperator where operatorName=?",[name],callback);
},
};
module.exports=Operator;