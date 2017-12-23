var mysql=require('mysql');
var connection=mysql.createPool({

host:'173.194.224.165',
user:'root',
password:'Anusha@123',
database:'PhoneAPI'
});

module.exports=connection;