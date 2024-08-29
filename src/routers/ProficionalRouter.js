const {Router} = require('express')
const router = Router()
const proficionalController = require('../controllers/ProfissionalController')


router.get("/",proficionalController.findAll)
router.get("/:id",proficionalController.findByid)
router.post("/",proficionalController.save)
router.put("/:id",proficionalController.update)
router.delete("/:id",proficionalController.delete)

module.exports = router

