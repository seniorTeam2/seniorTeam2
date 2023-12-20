import React from 'react'

const BestSellingProducts = () => {
  return (
    <div className='ml-10'>
         <div className=' mb-10'>
    <div className=' w-5 h-10 bg-red rounded'></div>
    <h1 className='text-red absolute left-16 -mt-8 font-bold '>This Month</h1>
    <div className='grid grid-cols-2 mb-20'>
    <h1 className='text-5xl font-medium mt-10'>Best Sellings Products</h1>
    <button className='absolute right-60 mt-8 text-white bg-red w-32 h-12'>View All</button>
    </div>

    </div>
    <div className='w-80 h-72 bg-gray flex justify-center items-center mt-11'
   >
       
       
       
        
       <img className=' w-40 ' src="https://img.buzzfeed.com/buzzfeed-static/images/ZmxfbG9zc3kscV9hdXRv/yvwqrmwjffoqwzk08hnh/guccinorthface-9.jpeg.jpeg?downsize=900:*&output-format=auto&output-quality=auto" alt="" />
        
        </div>
        <h1>The north coat</h1>
        <div className='flex gap-4'>
        <h1 className='text-red'>$260</h1><h1 className='text-gray-300 line-through	'>$360</h1>
        </div>
        
        
    </div>
  )
}

export default BestSellingProducts