'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Real_Estate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Real_Estate.belongsTo(models.Location, {
        foreignKey: 'locationId',
        onDelete: 'CASCADE'
      })
    }
  }
  Real_Estate.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    typeOfPropertyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Real_Estate',
  });
  return Real_Estate;
};