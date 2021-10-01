const { Router } = require('express'); // Recurso de ROTAS do Express (acesso aos métodos do Express)
const NoteController = require('../controllers/NoteController');

const router = Router();

router
    .post('/notes', NoteController.createNote)
    .get('/notes', NoteController.allNotes)
    .get('/users/:userId/notes', NoteController.loginUserNotes)
    .put('/notes/:id', NoteController.editNote)
    .delete('/users/:userId/notes/:id', NoteController.deleteNote)
    .get('/users/:userId/notes/:id/shared/:sharedId', NoteController.shareNote)

module.exports = router;