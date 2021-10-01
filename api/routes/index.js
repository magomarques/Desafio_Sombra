const bodyParser = require('body-parser');
const users = require('./usersRoute');
const notes = require('./notesRoute');

module.exports = app => {
    app.use(bodyParser.json())
    app.use(users)
    app.use(notes)
}

// Outra maneira:
// module.exports = app => {
//     app.use(
//       bodyParser.json(),
//       bodyParser.urlencoded({ extended: false }),
//       usuarios
//       )
//     }