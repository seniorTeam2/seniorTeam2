const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db=require('../database-squelize/index');




const secretKey = 'my_secret_key_2023$#@!';

function generateToken(user) {
    const expire=60*60*24
  return jwt.sign(user, secretKey),{expire: expire}
}

const SignUpUser = async (req, res) => {
    const { UserName, UserEmail, UserPassword } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(UserPassword, 10);
        
        
        const newUser = {
            UserName,
            UserEmail,
            UserPassword: hashedPassword
        };
        // addOne({ body: newUser }, res);
    } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
};














module.exports = {SignUpUser,LogInUser}