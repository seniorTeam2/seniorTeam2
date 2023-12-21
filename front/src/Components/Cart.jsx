import React from 'react'

function Cart() {
 return (
    <div className='ml-40 mt-20'>
      <h1 className='text-gray-300'>Home /  
        <span className='text-black'> Cart</span>
      </h1>
      <div className='grid grid-cols-4 mt-10 shadow items-center h-14 w-5/6 '>
        <h1 className='ml-10'>Product</h1>
        <h1 className='ml-10'>Price</h1>
        <h1 className='ml-10'>Quantity</h1>
        <h1 className='ml-10'>Subtotal</h1>
      </div>
      <div className='grid grid-cols-4 mt-10 shadow items-center h-14 w-5/6 '>
        <img className='w-10 ml-10' src="https://cdn-icons-png.flaticon.com/512/65/65687.png" alt="" />
        <h1 className='ml-10'>19$</h1>
        <input className='w-10 ml-10 border-gray-300 border rounded' type="number" />
        <h1 className='ml-10'>19$</h1>
      </div>
      <div>
        <button className='shadow border-gray-300 border mt-10'>Return To Shop</button>
      </div>

    </div>
 )
}

export default Cart