const express = require('express')
const SongsController = require('./controllers/SongsController')
const UserController = require('./controllers/UserController')

const routes = express.Router()

routes.post('/users', UserController.store)
routes.post('/login', UserController.login)
routes.post('/favoriteSongs', SongsController.save)

module.exports = routes
