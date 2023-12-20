const Product=require('../Models/product')
const User=require('../Models/user')
const Category=require("../Models/category")
module.exports={
    getAll:async(req,res)=>{
       console.log('helo')
        let d=await Product.findAll()
        res.json(d)}
       
    }

