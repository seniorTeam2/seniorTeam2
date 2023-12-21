const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User= require('../Models/user')



const secretKey = 'my_secret_key_2023$#@!';

function generateToken(user) {
    const expire= 60*60*24
    return jwt.sign(user, secretKey, { expiresIn: expire });

}

const SignUpUser = async (req, res) => {
    const { FirstName, Email, Password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(Password, 10);
        
        const newUser = {
            FirstName,
            Email,
            Password: hashedPassword
        }
        await User.create(newUser);
        const token = generateToken(newUser);

        res.status(201).json({ message: 'User created successfully', token });
    } catch (error) {
        console.error('Error during user signup:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
};

const login=async(req,res)=>{
    try{
    const {email,password}=req.body;
    const x=await User.findOne({ where: { Email:email }})
    const hashedPassword = await bcrypt.hash(password, 10);
    if(x){
       const y=await User.findOne({ where: {Email:email,Password:hashedPassword}})
        return res.status(200).json(y)
}
return res.status(400).json('ree')
    }
    catch(err){
        res.status(500).json('internal error')
    }
    
}



module.exports = {SignUpUser,login}