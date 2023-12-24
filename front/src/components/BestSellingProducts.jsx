import React, { useState } from 'react'
import img from '../images/high.png'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
const BestSellingProducts = ({refresh,setRefresh}) => {
  const navigate=useNavigate()
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:3000/api/products/allProducts`)
    .then(r=>{setData(r.data.slice(19))
      console.log('sa',r.data.slice(21))} ).catch(err=>console.log(err))
  },[])
  
  return (
    <div className='ml-10'>
         <div className=' mb-10'>
    <div className=' w-5 h-10 bg-red rounded'></div>
    <h1 className='text-red absolute left-16 -mt-8 font-bold '>This Month</h1>
    <div className='grid grid-cols-2 mb-20'>
    <h1 className='text-5xl font-medium mt-10'>Best Sellings Products</h1>
    <button onClick={()=>{navigate('/AllProducts')
        setRefresh(!refresh)}} className='absolute right-60 mt-8 text-white bg-red w-32 h-12'>View All</button>
    </div>

    </div>
    <div className='flex gap-6'>

    {data.map(e=>(
    <div>
      <div className='w-80 h-72 bg-gray flex justify-center items-center mt-11'>
    <img className=' w-40 ' src={e.ProductImage} alt="" />
    </div>
        <h1>{e.Name}</h1>
        <div className='flex gap-4'>
        <h1 className='text-red'>${e.Price}</h1><h1 className='text-gray-300 line-through	'>$360</h1>
        </div>
        </div>))}
        </div>

        <div style={{'margin-top': '26%',
    'margin-left': '19%',
    'width':' 10%',
    'height':' 7%',
    'background-color': 'transparent',
    'cursor':'pointer'}} className='absolute w-28 h-20 bg-gray'></div>
        <img className=' ml-60 mt-20 mb-16'  src={img} alt="" />
    </div>
  )
}

export default BestSellingProducts