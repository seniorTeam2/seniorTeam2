const Product=require('../Models/product')
const User=require('../Models/user')
const Category=require("../Models/category")
module.exports={
    getAll:async(req,res)=>{
       
        let d=await Product.findAll()
        res.json('hello',d)}
       
    }

