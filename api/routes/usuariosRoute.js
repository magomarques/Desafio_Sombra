const { Router } = require('express') // Recurso de ROTAS do Express (acesso aos métodos do Express)
const UsuarioController = require('../controllers/UsuarioController')

const router = Router()

router
    .get('/usuarios', UsuarioController.consultaTodosUsuarios)
    .get('/usuarios/:id', UsuarioController.consultaUmUsuario)
    .post('/usuarios', UsuarioController.criaUsuario)
    .post('/login', UsuarioController.validaUsuario)

module.exports = router