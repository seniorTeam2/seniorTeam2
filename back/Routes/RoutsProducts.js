const router=require('express').Router()
const productController=require('../Controllers/ControllerProducts')
const categoryController=require('..')

router.get('/getProducts',productController.getAll)






module.exports=router