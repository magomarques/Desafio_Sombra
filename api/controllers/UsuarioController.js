const database = require('../models')

class UsuarioController {

    static async consultaTodosUsuarios(req, res) {
        try {
            const todosUsuarios = await database.Usuarios.findAll()
            return res.status(200).json(todosUsuarios)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async consultaUmUsuario(req, res) {

        const { id } = req.params

        try {
            const umUsuario = await database.Usuarios.findOne({ where: { id: Number(id) }})
            return res.status(200).json(umUsuario)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaUsuario (req, res) {

        const novoUsuario = req.body

        try {
            const novoUsuarioCriado = await database.Usuarios.create(novoUsuario)
            return res.status(200).json(novoUsuarioCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async validaUsuario(req, res) {

        //{email: 'henrique@hotmail.com', senha: '123'}
        const dadosUsuarios = req.body

        const emailEnviado = dadosUsuarios.email
        const senhaEnviada = dadosUsuarios.senha
        

        try {
            const umUsuario = await database.Usuarios.findOne({ 
                where: {
                    email: emailEnviado,
                    senha: senhaEnviada
                }
            })

            // console.log(umUsuario)

            if (!umUsuario) {
                throw new Error('Usuário ou senha inválido')
            }

            return res.status(200).json(`Usuário: ${emailEnviado} logado com sucesso`)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = UsuarioController