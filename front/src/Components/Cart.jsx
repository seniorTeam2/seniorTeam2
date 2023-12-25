import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import {useNavigate } from "react-router-dom";


function Cart({refresh1,setRefresh1,userID}) {
  const [cartData, setCartData] = useState([]);
  const [refresh,setRefresh] = useState(false);
  const navigate=useNavigate()
  const deleteC = (CartID) => {
    console.log('cart ID:', CartID);
    axios.delete(`http://localhost:3000/api/cart/deleteCart/${CartID}`)
      .then((res) => {
        console.log(res.data)
        setRefresh(!refresh);
        setRefresh1(!refresh1)
       
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  

  useEffect(() => {
    axios.get(`http://localhost:3000/api/cart/UserCart/${userID}`)
      .then((response) => {
        console.log('houss', response.data);
        setCartData(response.data);
       
      })
      .catch((error) => console.log(error));
  }, [refresh])

  const calculateSubtotal = (quantity, price) => {
    return quantity * price;
  };

  return (
    <div>
      <Navbar />
      <div className='ml-40 mt-20'>
        <h1 className='text-gray-300'>
          Home / <span className='text-black'> Cart</span>
        </h1>

        <div className='grid grid-cols-4 mt-10 shadow items-center h-14 w-5/6 '>
          <h1 className='ml-20'>Product</h1>
          <h1 className='ml-20'>Price</h1>
          <h1 className='ml-20'>Quantity</h1>
          <h1 className='ml-10'>Subtotal</h1>
        </div>
{console.log('housi',cartData)}
        {cartData.map((item, i) => (
          <div key={i} className='grid grid-cols-4 mt-10 shadow items-center h-14 w-5/6 ' style={{'display':'flex','justifyContent':'space-around'}}>
            <img className='w-10 ml-10' src={item.CartImage} alt="" />
            <h1 className='ml-10'>{item.Price}</h1>
            <input
              className='w-10 ml-10 border-gray-300 border rounded'
              type="number"
              value={item.quantity || 1}
              onChange={(e) => {
                const newQuantity = parseInt(e.target.value);
                setCartData(prevData => {
                  const newData = [...prevData];
                  newData[i].quantity = isNaN(newQuantity) ? 1 : newQuantity;
                  return newData;
                });
              }}
            />
            <h1 className='ml-20'>{calculateSubtotal(item.quantity || 1, item.Price)}$</h1>
            <MdDelete className='ml-10 cursor-pointer'  onClick={() => { deleteC(item.CartID)}}/>
            
          </div>
          
        ))}

        <div>
          <button className='shadow border-gray-300 border mt-10 w-40 h-14 border rounded text-sm'></button>
          <button className='shadow border-gray-300 border mt-10 w-40 h-14 border rounded text-sm float-right mr-56'></button>
        </div>

        <div className='mt-20 '>
          <input className='border-gray-300 border rounded w-48 h-12 text-center text-sm' type="text" placeholder='Coupon Code' />
          <button className='ml-3 bg-red w-40 h-12 border rounded text-white text-sm'>Apply Coupon</button>
        </div>

        <div className='float-right -mt-28 mr-56  shadow border-black border rounded w-80  text-start  '>
          <h1 className='ml-5 mt-2'>Cart Total</h1>
          <h3 className='ml-5 mt-6'>Subtotal: {cartData.reduce((total, item) => total + calculateSubtotal(item.quantity || 0, item.Price), 0)}$</h3>
          <hr className="text-gray-300 w-5/6 text-center" />
          <h3 className='ml-5 mt-6'>Shipping: Free</h3>
          <hr className="text-gray-300 w-5/6" />
          <h3 className='ml-5 mt-6'>Total: {cartData.reduce((total, item) => total + calculateSubtotal(item.quantity || 0, item.Price), 0)}$</h3>
          <button className='shadow border-gray-300 border rounded ml-20 bg-red text-white w-40 h-12 mt-4' onClick={()=>{navigate('/paiment')}}>Proceed to checkout</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;