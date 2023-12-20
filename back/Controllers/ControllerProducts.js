const Product=require('../Models/product')
const User=require('../Models/user')

module.exports={
    getAll:async(req,res)=>{
        try{
        let d=await Product.findAll()
        res.json('hello',d)}
        catch(err){
            res.json(err)
        }
    }

}