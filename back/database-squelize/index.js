const { Sequelize, DataTypes } = require('sequelize');

// Create Sequelize instance
const sequelize = new Sequelize(
  "team2",
  "root",
  "0000",
  {
    host: "localhost",
    dialect: "mysql",
  }
);
sequelize.authenticate().then(r=>console.log('connected')).catch(err=>console.log(err))
// Define User model


// Define Cart model
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
});

// Define Category model
const Category = sequelize.define('category', {
  CategoryID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  NameCategory: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  CategoryImage: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
});

// Define Product model


// Define relationships between models
// User.hasMany(Cart);
// Cart.belongsTo(User);

// Cart.hasMany(Product);
// Product.belongsTo(Cart);

// Category.hasMany(Product);
// Product.belongsTo(Category);

// User.hasMany(Product);
// Product.belongsTo(User);

// Sync the models with the database
//execute one time and then comment this code (after Database and tables created!)
// sequelize.sync({ force: true }).then(() => {
//   console.log('Database and tables created!');
// }).catch(err => {
//   console.error('Error syncing database:', err);
// });
module.exports=sequelize