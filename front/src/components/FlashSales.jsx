import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Img1 from '../images/g92-2-500x500-1-550x400h.jpg-PhotoRoom.png-PhotoRoom.png' 
const FlashSales = () => {
  return (
    <div className='ml-10'>
    <div className='mb-10'>
    <div className=' w-5 h-10 bg-red'></div>
    <h1 className='text-red absolute left-16 -mt-8'>Today's</h1>
    </div>
    <div className='grid grid-cols-2'>
    <h1 className='text-5xl font-medium '>Flash Sales</h1>
    <div className=' w-9 h-9 rounded-full bg-gray flex justify-center items-center absolute right-14'><FaArrowLeft /></div>
    <div className='w-9 h-9 rounded-full bg-gray flex justify-center items-center absolute right-0'><FaArrowRight /></div>
    </div>
    <div className='w-96 h-96 bg-gray flex justify-center items-center mt-11'>
        <img src={Img1} alt="" />
    </div>
        
        
        
    
    </div>
   
  )
}

export default FlashSales