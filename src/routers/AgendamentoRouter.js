const {Router} = require('express')
const router = Router()
const agendamentoController = require('../controllers/AgendamentoController')

router.get("/",agendamentoController.getAll)
router.get("/:id",agendamentoController.getById)
router.post("/",agendamentoController.create)
router.put("/",agendamentoController.update)
router.delete("/",agendamentoController.delete)

module.exports = router