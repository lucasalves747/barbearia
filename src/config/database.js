const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'12lucas:santos',
    database:'pricila'
})

connection.connect((err)=>{
    if(err){
        console.log("erro ao conectar no mysql: ",mysql)
        return;
    }

    console.log("conectado ao mysql")
}) 

module.exports = connection