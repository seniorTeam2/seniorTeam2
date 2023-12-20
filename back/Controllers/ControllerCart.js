///controller
const {Cart} = require('../database-squelize/index')


const getAllCrats = async(req,res) =>{
 const carts=await Cart.findAll()
    res.json(carts)
}
const getOneCart = async(req,res) =>{
    const carts=await  Cart.findOne({where:{CartID:req.params.id}})
    res.json(carts)
}
const DeleteCart = async(req,res) =>{
    const carts=await Cart.destroy({where:{CartID:req.params.id}})
    res.json(carts)
}
const addCart = async(req,res) =>{
    const carts=await Cart.create(req.body)
    res.json(carts)
}

module.exports = {getAllCrats,getOneCart,DeleteCart,addCart}