const {Router} = require('express')
const router = Router()
const servicoController = require('../controllers/ServicoController')

router.get("/",servicoController.findAll)
router.get("/:id",servicoController.findById)
router.post("/",servicoController.create)
router.put("/:id",servicoController.update)
router.delete("/:id",servicoController.delete)

module.exports = router