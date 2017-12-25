var mysql=require('mysql');
var connection=mysql.createPool({

// google sql public IP
host:'173.194.224.165',
//host:'localhost',
user:'root',
//put db password
password:'',
database:'PhoneAPI'
});
 
module.exports=connection;