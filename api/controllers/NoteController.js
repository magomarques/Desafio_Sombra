const database = require('../models');

class NoteController {

    static async createNote(req, res) {

        // Para acessar a tabela Notes:
        // http://localhost:3000/notes

        const newNote = req.body;

        try {
            const newNoteCreated = await database.Notes.create(newNote);
            return res.status(200).json(newNoteCreated);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async allNotes(req, res){

        // Para acessar a tabela Notes:
        // http://localhost:3000/notes

        try{
            const allNotes = await database.Notes.findAll();
            return res.status(200).json(allNotes);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async loginUserNotes(req, res) {

        // Para acessar a tabela Notes associada a tabela Users:
        // http://localhost:3000/users/26/notes
        // http://localhost:3000/users/userId/notes

        const { userId } = req.params;

        try {
            const userNotes = await database.Notes.findAll({
                where: {
                    authorId: Number(userId)
                }
            });
            return res.status(200).json(userNotes);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async editNote(req, res) {

        // Para acessar a tabela Notes associada a tabela Users:
        // http://localhost:3000/notes/6
        // http://localhost:3000/notes/id

        const { id } = req.params;
        const newData = req.body;

        try {
            await database.Notes.update(newData, {
                where: {
                    id: Number(id)
                }
            });
            const updatedNote = await database.Notes.findOne({
                where: {
                    id: Number(id)
                }
            });

            return res.status(200).json(updatedNote);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteNote(req, res) {

        // Para acessar a tabela Notes associada a tabela Users:
        // http://localhost:3000/users/26/notes/5
        // http://localhost:3000/users/userId/notes/id

        const { userId, id } = req.params;

        try {
            const deletedNote = await database.Notes.destroy({
                where: {
                    id: Number(id),
                    authorId: Number(userId)
                }
            });

            if (!deletedNote) {
                throw new Error('Usuário ou nota não vinculados');
            }

            return res.status(200).json({ mensagem: `ID = ${id} foi deletado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async shareNote(req, res) {

        // Para acessar a tabela Notes associada a tabela Users:
        // http://localhost:3000/users/26/notes/7/shared/27
        // http://localhost:3000/users/userId/notes/id/shared/sharedId

        const { userId, id, sharedId } = req.params;

        try {
            const sharedNote = await database.Notes.findOne({
                where: {
                    id: Number(id),
                    authorId: userId
                }
            });

            const text = sharedNote.description
            const newAuthor = sharedId

            const newSharedNote = await database.Notes.create({
                description: text,
                authorId: Number(newAuthor)
            });

            return res.status(200).json(newSharedNote);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = NoteController;

