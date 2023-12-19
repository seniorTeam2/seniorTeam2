const router=require('express').Router()
const productController=require('../Controllers/ControllerProducts')

router.get('/products',productController.getAll)






module.exports=router