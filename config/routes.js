var usersController = require('./../controllers/users.js');
const path = require('path')

module.exports = function(app) {
app.post('/user', usersController.getUser);
app.post('/users', usersController.create);
}

