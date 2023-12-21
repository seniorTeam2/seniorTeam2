const {DataTypes,Sequelize} =require('sequelize')
const Product=require('../models/product.js')
const Cart=require('../models/cart.js')
const sequelize=require('../database-squelize/index.js')

const User = sequelize.define('user', {
    UserID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Password: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    Role: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    FirstName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    LastName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    ConfirmPassword: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
  },{tableName:'user'});
  User.hasMany(Product);
  Product.belongsTo(User);
  User.hasMany(Cart);
  Cart.belongsTo(User);


  module.exports= User