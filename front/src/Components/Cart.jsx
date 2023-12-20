import React from 'react'

function Cart() {
 return (
    <div className='ml-40 mt-20'>
      <h1 className='text-gray-300'>Home /  
        <span className='text-black'> Cart</span>
      </h1>
      <div className='grid grid-cols-4 mt-10 shadow items-center items-center h-14 w-5/6 '>
        <h1 className='ml-10'>Product</h1>
        <h1 className='ml-10'>Price</h1>
        <h1 className='ml-10'>Quantity</h1>
        <h1 className='ml-10'>Subtotal</h1>
      </div>
    </div>
 )
}

export default Cart