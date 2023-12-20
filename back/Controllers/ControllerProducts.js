const Product=require('../models/product')

const {User}=require('../Models/user')
module.exports={
    getAll:async(req,res)=>{
        let d=await Product.findAll()
        res.json(d)
    }
  }

module.exports={
    getProducts:async(req,res)=>{
        try{ let d=await Product.findAll()
        res.json(d)}
        catch(err){ res.json(err)
        }
    },
  addProd:async(req,res)=>{
    let adProd=await Product.create(req.body)
    res.json(adProd)
  }
  ,
  getOneProd:async(req,res)=>{
    let gp=await Product.findOne({where:{ProductID:req.params.ProductID}})
    res.json(gp)
  },
  deleteProd:async(req,res)=>{
    let de=await Product.destroy({where:{ProductID:req.params.ProductID}})
    res.json(de)
  },
  updateProd: async(req,res) => {
    let upProd = await Product.update({where:{ProductID : req.params.ProductID}})
    res.json(upProd)
  }
}