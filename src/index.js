const express = require('express')
const app = express()
const porta = process.env.PORT || 3000
const routers = require('./routers/index')
const tables = require('./config/tabelas')
const connection = require('./config/database')
app.use(express.json())

tables.init(connection)
routers(app)

app.listen(porta,()=>{
    console.log(`servdor esta rodando na porta ${porta}`)
})