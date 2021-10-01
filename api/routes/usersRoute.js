const { Router } = require('express') // Recurso de ROTAS do Express (acesso aos métodos do Express)
const UserController = require('../controllers/UserController')

const router = Router()

router
    .get('/usuarios', UserController.allUsers)
    .get('/usuarios/:id', UserController.singleUser)
    .post('/usuarios', UserController.createUser)
    .post('/login', UserController.loginUser)

module.exports = router