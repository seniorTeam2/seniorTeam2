import React from 'react'
import { Link } from 'react-router-dom'
const ExploreProd = ({products}) => {
  return (
    <div>
        <div className='ml-10'>
         <div className=' mb-10'>
    <div className=' w-5 h-10 bg-red rounded'></div>
    <h1 className='text-red absolute left-16 -mt-8 font-bold '>Our Products</h1>
    <div className='grid grid-cols-2 mb-20'>
    <h1 className='text-5xl font-medium mt-10'>Explore Our Products</h1>
    <Link to={'/AllProducts'}><button className='absolute right-60 mt-8 text-white bg-red w-32 h-12'>View All</button></Link>
    </div>

    </div>
    <div className='flex gap-6 flex-wrap'>
    {products.map((el,i)=>(
       <div className='w-80 h-72 bg-gray flex justify-center items-center mt-11'>
       <div>
       <img className=' w-32 ' src={el.ProductImage[0]?el.ProductImage[0]:el.ProductImage} alt="" />
       <h1>{el.Name}</h1>
        <div className='flex gap-4'>
        <h1 className='text-red'>${el.Price}</h1>
        </div>
        </div>
        </div>

    )

    )}
   
        </div>
       
        
    </div>
    </div>
  )
}

export default ExploreProd