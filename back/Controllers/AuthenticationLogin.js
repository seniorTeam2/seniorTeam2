// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const db=require('../database-squelize/index');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User= require('../Models/user')



// const secretKey = 'my_secret_key_2023$#@!';

// function generateToken(user) {
//     const expire=60*60*24
//   return jwt.sign(user, secretKey),{expire: expire}
// }

// const SignUpUser = async (req, res) => {
//     const { UserName, UserEmail, UserPassword } = req.body;
//     try {
//         const hashedPassword = await bcrypt.hash(UserPassword, 10);
        
        
//         const newUser = {
//             UserName,
//             UserEmail,
//             UserPassword: hashedPassword
//         };
//         // addOne({ body: newUser }, res);
//     } catch (error) {
//         res.status(500).json({ error: 'Error' });
//     }
// };
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
        console.log(req.body);
    const {email,password}=req.body;
    const x=await User.findOne({ where: { Email:email }})
    console.log(x);
    
    if(x){
        const hashedPassword = await bcrypt.compare(password,x.Password);
       const y=await User.findOne({ where: {Email:email,Password:hashedPassword}})
        return res.status(200).json("success")
}
return res.status(400).json("invalid password")
    }
    catch(err){
        res.status(500).json('internal error')
    }
    
}






module.exports = {SignUpUser,login}