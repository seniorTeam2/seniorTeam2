const {Products}=require('../Models/product')
const {User}=require('../Models/user')
module.exports={
    getAll:async(req,res)=>{
        let d=await Products.findAll()
        res.json('hello',d)
    }

}