const clienteRouters = require('./clienteRouret')
const servicoRouters = require('./ServicoRouter')
const disponibilidadeRouter = require("./DisponibilidadeRouter")
const proficionalRouter = require("./ProficionalRouter")
const agendamentoRouter = require("./AgendamentoRouter")
module.exports = (app) => {


    app.use('/clientes', clienteRouters)
    app.use('/servicos', servicoRouters)
    app.use("/disponibilidade", disponibilidadeRouter)
    app.use("/proficionais", proficionalRouter)
    app.use("/agendamento", agendamentoRouter)
   
}