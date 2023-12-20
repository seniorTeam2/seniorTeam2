import React, { useState } from 'react'
import { IoIosPhonePortrait } from "react-icons/io";
import { useSearchParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const BrowseCategory = () => {
const[change,setChange]=useState(false)
  return (
    <div className='ml-10'>
        <div className='mb-10'>
    <div className=' w-5 h-10 bg-red rounded'></div>
    <h1 className='text-red absolute left-16 -mt-8 font-bold'>Categories</h1>
  
    </div>
    <h1 className='text-5xl font-medium mb-20'>Browse By Category</h1>
    <div className=' w-9 h-9 rounded-full bg-gray flex justify-center items-center absolute right-14'><FaArrowLeft /></div>
    <div className='w-9 h-9 rounded-full bg-gray flex justify-center items-center absolute right-0'><FaArrowRight /></div>
    {change?<div className=' w-52 h-52 border border-gray-300 rounded flex justify-center items-center mb-20	'
    onClick={()=>setChange(!change)}>
        <div>
        <IoIosPhonePortrait size={90} />
        <h1 className='ml-5'>Phones</h1>

        </div>
    </div>:<div className=' w-52 h-52 border border-gray-300 bg-red rounded flex justify-center items-center mb-20	'
    onClick={()=>setChange(!change)}>
        <div>
        <IoIosPhonePortrait size={90} color='white' />
        <h1 className='ml-5 text-white'>Phones</h1>

        </div>
    </div>}
    <hr className='text-gray-300 w-5/6 mb-14'/>
    </div>
  )
}

export default BrowseCategory