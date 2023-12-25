const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Movie, { foreignKey: 'userId' });
      this.hasMany(models.Hero, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      userName: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
