const express = require('express');
const cors=require('cors');
const db=require('./database-squelize/index');
const CartRouter=require('./Routes/RoutesCart');
const router=require('./Routes/RoutsProducts')


const app = express();
 const router=require('./Routes/RoutsProducts')
 const userRouter = require('./Routes/UserRoute.js')
 const categRouter = require('./Routes/CategoryRoute.js')
 const prodRouter = require('./Routes/RoutsProducts.js')
const PORT = 3000;
app.use(cors())
app.use(express.json())

app.use('/api/products',CartRouter)
app.use('api/products',router);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
 app.use('/api',router)
 app.use('/api/users',userRouter)
 app.use('/api/categories',categRouter)
 app.use('/api/products', prodRouter)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
  