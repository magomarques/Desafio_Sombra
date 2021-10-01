const database = require('../models');

class UserController {

    static async allUsers(req, res) {
        
        try {
            const allUsers = await database.Users.findAll();
            return res.status(200).json(allUsers);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async singleUser(req, res) {

        const { id } = req.params;

        try {
            const singleUser = await database.Users.findOne({ 
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(singleUser);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createUser(req, res) {

        const newUser = req.body;

        try {
            const newUserCreated = await database.Users.create(newUser);
            return res.status(200).json(newUserCreated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async loginUser(req, res) {

        const userData = req.body;

        const emailSent = userData.email;
        const passwordSent = userData.password;
        
        try {
            const singleUser = await database.Users.findOne({ 
                where: {
                    email: emailSent,
                    password: passwordSent
                }
            });

            // console.log(singleUser)

            if (!singleUser) {
                throw new Error('Usuário ou senha inválido');
            }

            return res.status(200).json(`Usuário: ${emailSent} logado com sucesso`);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = UserController;