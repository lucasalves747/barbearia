const {Router} = require('express')
const router = Router()
const clienteController = require('../controllers/ClienteController')
const authenticateToken = require('../services/jwt/Token')

router.get("/",clienteController.getAllUser)
router.get("/:id",clienteController.getByid)
router.post("/",clienteController.create)
router.put("/:id",clienteController.update)
router.delete("/:id",clienteController.delete)


module.exports = router