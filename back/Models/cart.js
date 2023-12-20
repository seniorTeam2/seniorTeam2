const {DataTypes}=require('sequelize')
const sequelize=require('../database-squelize/index')
const Product = require('../Models/product')

const Cart = sequelize.define('cart', {
    CartID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    NameCart: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    CartImage: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    Price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },{tableName:'carts'});
  Cart.hasMany(Product);
Product.belongsTo(Cart);

  module.exports= Cart