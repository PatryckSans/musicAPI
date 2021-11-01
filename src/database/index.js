const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')
const FavoriteSong = require('../models/FavoriteSong')

const connection = new Sequelize(dbConfig)

User.init(connection)
FavoriteSong.init(connection)

module.exports = connection
