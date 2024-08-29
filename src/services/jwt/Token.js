const jwt = require('jsonwebtoken')

const secreateKey = "secreate"

exports.gerar = (user)=>{
    return jwt.sign(user,secreateKey,{expiresIn: '3h'})
}

exports.authenticateToken = (req, res, next) =>{
    const token = req.headers['authorization']

    if(!token) return res.sendStatus(403);

    jwt.verify(token, secreateKey, (err, user)=>{
        if(err) return res.sendStatus(403);

        req.user = user
        next()
        
    })
}

