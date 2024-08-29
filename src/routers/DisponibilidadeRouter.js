const {Router} = require('express')
const router = Router()
const disponibilidadeController =require('../controllers/DisponibilicadeController')

router.get("/:id",disponibilidadeController.findById)
router.post("/",disponibilidadeController.save)
router.put("/:id",disponibilidadeController.update)
router.delete("/:id",disponibilidadeController.delete)

module.exports = router