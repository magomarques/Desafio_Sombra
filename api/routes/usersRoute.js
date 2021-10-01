const { Router } = require('express') // Recurso de ROTAS do Express (acesso aos métodos do Express)
const UserController = require('../controllers/UserController')

const router = Router()

router
    .get('/users', UserController.allUsers)
    .get('/users/:id', UserController.singleUser)
    .post('/users', UserController.createUser)
    .post('/login', UserController.loginUser)

module.exports = router