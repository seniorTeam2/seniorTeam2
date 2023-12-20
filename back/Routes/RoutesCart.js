///route
//route here
const CartRouter=require('express').Router();
const CartController =require('../Controllers/ControllerCart')

CartRouter.get("/Cart",CartController.getAllCrats)
CartRouter.get('/OneCart/:id',CartController.getOneCart)
CartRouter.delete('/deleteCart/:id',CartController.DeleteCart)
CartRouter.post('/addCart',CartController.addCart)

module.exports=CartRouter
