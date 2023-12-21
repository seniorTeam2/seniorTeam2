import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Cart() {
 return (
  <>
  <Navbar/>
    <div className='ml-40 mt-20'>
      <h1 className='text-gray-300'>Home /  
        <span className='text-black'> Cart</span>
      </h1>

      <div className='grid grid-cols-4 mt-10 shadow items-center  h-14 w-5/6 '>
        <h1 className='ml-10'>Product</h1>
        <h1 className='ml-10'>Price</h1>
        <h1 className='ml-10'>Quantity</h1>
        <h1 className='ml-10'>Subtotal</h1>
      </div>

      <div className='grid grid-cols-4 mt-10 shadow items-center  h-14 w-5/6 '>

        <img className='w-10 ml-10' src="https://cdn-icons-png.flaticon.com/512/65/65687.png" alt="" />
        <h1 className='ml-10'>19$</h1>
        <input className='w-10 ml-10 border-gray-300 border rounded' type="number" />
        <h1 className='ml-10'>19$</h1>
      </div>
      <div>
        <button className='shadow border-gray-300 border mt-10 w-40 h-14 border rounded text-sm '></button>
        <button className='shadow border-gray-300 border mt-10 w-40 h-14 border rounded text-sm float-right mr-56 '></button>
      </div>
      <div className='mt-20 '>
        <input className='border-gray-300 border rounded w-48 h-12 text-center text-sm' type="text" placeholder='Coupon Code '/>
        <button className=' ml-3 bg-red w-40 h-12 border rounded text-white text-sm'>Apply Coupon</button>
      </div>
      <div className='float-right -mt-28 mr-60 shadow border-black border rounded w-80  text-start  '>
        <h1 className='ml-5 mt-2'>Cart Total</h1>
        <h3 className='ml-5 mt-6' >Subtotal:</h3>
        <hr class="text-gray-300 w-5/6 text-center "/>
        <h3 className='ml-5 mt-6'>Shiping:</h3>
        <hr class="text-gray-300 w-5/6 "/>
        <h3 className='ml-5 mt-6' >Total:</h3>
        <button className='shadow border-gray-300 border rounded ml-20 bg-red text-white w-40 h-12 mt-4'>Procees to checkout</button>
      </div>
  
    </div>  
    <Footer/>
    </>
 )
}

export default Cart