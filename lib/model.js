/**
 * Session Model
 */
const { DataTypes } = require('@sequelize/core')

module.exports = {
  sid: {
    type: DataTypes.STRING(36),
    primaryKey: true
  },
  expires: DataTypes.DATE,
  data: DataTypes.TEXT
}
