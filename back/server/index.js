const express = require('express');
const cors=require('cors');
const db=require('../database-squelize/index');
const CartRouter=require('../Routes/RoutesCart');





const app = express();
const PORT = 3000;

app.use(express.json())
app.use(cors())
app.use('/api/products',CartRouter)


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
  