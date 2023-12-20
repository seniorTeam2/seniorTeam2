const router=require('express').Router()
const productController=require('../Controllers/ControllerProducts')
const categoryController=require('..')
router.get('/products',productController.getAll)






module.exports=router