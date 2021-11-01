const Song = require('../models/FavoriteSong')
const jwt = require('jsonwebtoken')

module.exports = {
  async save(req, res) {
    try {
      const decoded = jwt.verify(req.headers.authorization, 'secret')

      const { songName, artist, album } = req.body

      const song = await Song.create({ user_id: decoded.id, song_name: songName, artist, album })
      return res.json(song.toJSON())
    } catch (error) {
      console.error(error)
    }
  },
}
