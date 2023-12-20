const category = require('../database-squelize/index.js')

module.exports={
    getCategories:async(req, res) => {
    let cats=await category.findAll()
    res.json(cats)
  },
  addCategory:async(req,res)=>{
    let adCat=await category.create(req.body)
    res.json(adCat)
  }
 ,
 deleteCategory:async(req,res)=>{
    let deCat=await category.destroy({where:{id:req.params.id}})
    res.json(deCat)
  }}
  