const connection = require("../config/database")

const findAll = (callback)=>{

    const sql = 'select * from CLIENTES'
    connection.query(sql,(err,result)=>{
        if(err){
            return callback(err,null)
        }
        return callback(null,result)
    })
}
const finddById = (id,callback)=>{
    const sql = `select * from CLIENTES where id = ${id} `

    connection.query(sql,{},(err,result)=>{
        if(err){
            return callback(err,null)
        }
        return callback(null,result)
    })
}

const save = (body,callback)=>{

    const sql = "insert into clientes set ?"
    
    connection.query(sql,body,(err,result)=>{
        if(err){
            return callback(err,null)
        }
        return callback(null,result)
    })
}
const update = (id,body,callback)=>{
    const sql = "update clientes set ? where id = ?"

    connection.query(sql,[body,id],(err,result)=>{
        if(err){
            return callback(err,null)
        }
       finddById(id,(er,res)=>{
        return callback(er,res)
       })
    })
}
const delete_ = (id,callback)=>{
    const sql = 'delete from clientes where id = ?'

    connection.query(sql,id,(err,result)=>{
        if(err){
            return callback(err,null)
        }
        return callback(null,result)
    })
}

module.exports = {
    findAll,
    finddById,
    save,
    update,
    delete_
}