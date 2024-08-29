const clienteModel = require('../models/ClienteModel')

exports.getAllUser = (req, res)=>{
    clienteModel.findAll((err,result)=>{
        if(err){
            return res.send(err)
        }
        res.json(result)
    })
}

exports.getByid = (req, res) =>{
    
    const {id} = req.params
    clienteModel.finddById(id, (err, result)=>{
        if(err){
           return res.status(500).json({error :err})
        }
        return res.status(200).json(result)
    })
}

exports.create = (req, res)=>{

    const body = req.body
    
    clienteModel.save(body,(err,result)=>{
        if(err){
            return res.status(500).json({error:err})
        }
        return res.status(201).send("criado com sucesso")
    })
}

exports.update = (req,res)=>{
    const body = req.body
    const {id} = req.params
    clienteModel.update(id,body,(err,result)=>{
        if(err){
            return res.status(500).json({error : err})
        }
        return res.status(200).json(result)
    })
}

exports.delete = (req,res)=>{
    const {id} = req.params
    clienteModel.delete_(id,(err,result)=>{
        if(err){
            return res.status(500).json({error : err})
        }
        if(result.affectedRows == 0){
            return res.status(400).json({"error": "id nao encontrado"})
        }
        
        return res.status(200).json(result)
    })
}