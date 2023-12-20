const prodRouter=require('express').Router()
const productController=require('../Controllers/ControllerProducts')
const categoryController=require('..')

<<<<<<< HEAD
router.get('/getProducts',productController.getAll)
=======
prodRouter.get('/allProducts',productController.getProducts)
prodRouter.get('/getOneProd',productController.getOneProd)
prodRouter.post('/addProd',productController.addProd)
prodRouter.delete('/deleteProd/:ProductID',productController.deleteProd)
prodRouter.put('/updateProd/:ProductID',productController.updateProd)
>>>>>>> 544e0727028db4b52bbc3bc24bbf4f31c859aa7e






module.exports= prodRouter;