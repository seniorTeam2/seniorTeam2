const { Sequelize, DataTypes } = require('sequelize');

// Create Sequelize instance
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'your_host',
  username: 'your_username',
  password: 'your_password',
  database: 'team2',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_0900_ai_ci',
  },
});

// Define User model
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
});

// Define Cart model
const Cart = sequelize.define('cart', {
  CartID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  NameCart: {
    type: DataTypes.INTEGER,
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
const Product = sequelize.define('product', {
  ProductID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  Name: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  Price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  Quantity: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Rating: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Color: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  Size: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  Availability: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  Discount: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ProductImage: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    allowNull: true,
  },
});

// Define relationships between models
User.hasMany(Cart);
Cart.belongsTo(User);

Cart.hasMany(Product);
Product.belongsTo(Cart);

Category.hasMany(Product);
Product.belongsTo(Category);

User.hasMany(Product);
Product.belongsTo(User);

// Sync the models with the database
//execute one time and then comment this code (after Database and tables created!)
sequelize.sync({ force: true }).then(() => {
  console.log('Database and tables created!');
}).catch(err => {
  console.error('Error syncing database:', err);
});
