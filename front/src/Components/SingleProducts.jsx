import React from 'react'
import Navbar from './Navbar'
import ReactStars from 'react-stars'

function SingleProducts() {
    const ratingChanged = (newRating) => {
        console.log(newRating)
      }
  return (
    <>
    <Navbar/>
    <div className='ml-40 mt-10 '>
         <h1 className='text-gray-300'>Home /  
        <span className='text-black'> SingleProduct</span>
      </h1>
      <div className='float-right w-[309px] h-[24px] mt-10 mr-48'>
      
        <h1 className='text-2xl'>Havic HV G-92 Gamepad</h1>
        <ReactStars 
        count={5} 
        onChange={ratingChanged}
        size={20}
        color2={'#ffd700'}
        />
        <h1 className='text-xl'>192$</h1>
        <h1 className='text-sm'>
        PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
        </h1>
      </div>
      <div className='float-right mt-20'>
     
      </div>
    
      
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default SingleProducts