const Song = require('../models/FavoriteSong')
const jwt = require('jsonwebtoken')
const FavoriteSongs = require('../models/FavoriteSong')

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
  async getSong(req, res) {
    try {
      const decoded = jwt.verify(req.headers.authorization, 'secret')
      const artist = req.query.artist || null
      const album = req.query.album || null
      const songName = req.query.songName || null

      const song = await Song.findAll({
        where: {
          user_id: decoded.id,
          ...(artist ? { artist } : null),
          ...(album ? { album } : null),
          ...(songName ? { song_name: songName } : null),
        },
      })

      return res.json(song)
    } catch (error) {
      console.error(error)
    }
  },
  async remove(req, res) {
    try {
      const { favoriteId } = req.params
      await FavoriteSongs.destroy({
        where: { favorite_id: favoriteId },
      })
      res.status(204)
      return res.send()
    } catch (error) {
      console.error(error)
    }
  },
  async update(req, res) {
    try {
      const decoded = jwt.verify(req.headers.authorization, 'secret')
      const { favoriteId } = req.params
      const { songName, artist, album } = req.body
      const song = await Song.update(
        {
          song_name: songName,
          artist,
          album,
        },
        {
          where: {
            user_id: decoded.id,
            favorite_id: favoriteId,
          },
        }
      )

      return res.json(song)
    } catch (error) {
      console.error(error)
    }
  },
}
