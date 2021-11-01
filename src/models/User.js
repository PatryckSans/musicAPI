const { DataTypes, Model } = require('sequelize')

class User extends Model {
  static init(connection) {
    super.init(
      {
        user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
      },
      {
        sequelize: connection,
      }
    )
  }
}

module.exports = User
