const Song = require('../models/FavoriteSong')
const jwt = require('jsonwebtoken')

module.exports = {
  async save(req, res) {
    try {
      console.log(req.headers.authorization)

      const decoded = jwt.verify(req.headers.authorization, 'secret')

      console.log({ user_id: decoded.id }) // bar
      const { songName, artist, album } = req.body

      // const song = await Song.findAll()
      // console.log(song)

      const song = await Song.create({ user_id: decoded.id, song_name: songName, artist, album })
      return res.json(song.toJSON())
    } catch (error) {
      console.error(error)
    }
  },
}
