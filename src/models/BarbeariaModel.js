const connection = require('../config/database')

const findAll = (callback)=>{

    const sql = 'select * from barbearia'

    connection.query(sql,(err,result)=>{
        if(err){
            return callback(err,null)
        }

        return callback(null,result)
    })
}

module.exports = {
    findAll
}