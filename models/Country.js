var db=require('../dbconnection');

var Country={

getAllCountry:function(callback){

return db.query("Select * from Country",callback);

},
getCountryByCode:function(code,callback){
    return db.query("select countryName,countryCode, countryIdd from Country where countryCode=?",[code],callback);
},
getCodeByCountryName:function(name,callback){
    return db.query("select countryName,countryCode, countryIdd from Country where countryName=?",[name],callback);
},
};
module.exports=Country;