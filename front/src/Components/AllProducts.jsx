import React,{useState,useEffect} from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';


function AllProducts() {
  const[All,setAll]=useState([])
  const[showAddToCart,setShowAddToCart]=useState(false)
  const[index,setIndex]=useState(-1)

  useEffect(()=>{
    axios.get(`http://localhost:3000/api/products/allProducts`)
    .then(r=>setAll(r.data)).catch(err=>console.log(err))
},[])

  return (
    <>
    <Navbar/>
    <div  className='mr-10 ml-10 mb-20 gap-7'>
          <h1 className='text-gray-300'>
          Home / <span className='text-black'> AllProducts</span>
        </h1>
      <div className='flex grid grid-cols-3 gap-4 overflow-hidden shadow-sm'>
      {All.map((All,i)=>(
        <div key={i} className=''>
          <div className='w-80 h-72 bg-gray mt-10 flex-wrap'
          onMouseEnter={()=>{setShowAddToCart(!showAddToCart)
            setIndex(i)}}
          onMouseLeave={()=>{setShowAddToCart(!showAddToCart)
          setIndex(-1)}}>
          <div className=' top-full left-0 w-20 rounded h-8 bg-red flex justify-center items-center text-white '>-{All.Discount}%</div>
          <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center float-right'><FaRegHeart size={20}/> </div>
          <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center float-right'><MdOutlineRemoveRedEye size={20}/></div>
          {index===i&&showAddToCart&&<button style={{'margin-top': '214px'}} className='cursor-pointer w-80 h-11 bg-black text-white flex justify-center items-center absolute'>Add To Cart</button>}
          <img className=' w-40' src={All.ProductImage} alt="" onClick={()=>{}} />
            
          </div>
          <h1>{All.Name}</h1>
         <div className='flex gap-4'>
         <h1 className='text-red'>${All.Price}</h1><h1 className='text-gray-300 line-through	'>$9720</h1>
         </div>
        </div>
      ))}
        
      </div>
    

    </div>
    <Footer/>
    </>
  )
}

export default AllProducts