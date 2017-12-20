var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'Anusha@123',
database:'PhoneAPI'


});
module.exports=connection;