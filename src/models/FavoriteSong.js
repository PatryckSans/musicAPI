const { DataTypes, Model } = require('sequelize')

class FavoriteSongs extends Model {
  static init(connection) {
    super.init(
      {
        favorite_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        user_id: DataTypes.INTEGER,
        song_name: DataTypes.STRING,
        artist: DataTypes.STRING,
        album: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
      },
      {
        sequelize: connection,
      }
    )
  }
}

module.exports = FavoriteSongs
