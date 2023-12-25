import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const WishList = ({wishes}) => {

  return (
    <div>
        <Navbar/>
        <div className='mb-20 mt-28 ml-20 shadow-md rounded w-5/6 h-20 bg-white flex items-center justify-center gap-96'>
            <h1>Product</h1>
            <h1>Price</h1>
            <h1>Image</h1>
        </div>
           
        <div className='mb-20 mt-28 ml-20 shadow-md rounded w-5/6 h-20 bg-white flex items-center justify-center gap-96'>

        {wishes.length&&wishes.map((e,i)=>(
        <div>
        <h1>{e.NameWish}</h1>
        <h1>{e.WishPrice}</h1>
        <img src={e.WishImage} alt="" />
        </div>
        ))}
    </div>

        <Footer/>
    </div>
  )
}

export default WishList