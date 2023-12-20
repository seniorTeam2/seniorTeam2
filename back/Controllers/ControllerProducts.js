const Product=require('../Models/product')
const {User}=require('../Models/user')
module.exports={
    getAll:async(req,res)=>{
        let d=await Product.findAll()
        res.json(d)
    }

}