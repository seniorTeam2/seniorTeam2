const router=require('express').Router()
const productController=require('../Controllers/ControllerProducts')
const categoryController=require('../Controllers/ControllerCart')
router.get('/products',productController.getAll)






module.exports=router