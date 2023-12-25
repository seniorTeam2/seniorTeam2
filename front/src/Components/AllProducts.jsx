import React,{useState,useEffect} from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';


function AllProducts({singleAdd,All,searching}) {
  const[showAddToCart,setShowAddToCart]=useState(false)
  const[index,setIndex]=useState(-1)




  return (
    <>
    <Navbar searching={searching}/>
    <div  className='mr-10 ml-10 mb-20 gap-7'>
          <h1 className='text-gray-300'>
          Home / <span className='text-black'> AllProducts</span>
        </h1>
      <div className='flex  gap-4 flex-wrap shadow-sm'>
      {All.map((All,i)=>{
        const productImageObject = JSON.parse(All.ProductImage)
        return(
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
            <Link to={'/SingleProducts'}><img className=' w-40' src={productImageObject?productImageObject[1]:All.ProductImage} alt="" onClick={()=>{
              singleAdd(productImageObject,All.Name,All.Price)
            }} /></Link>
            
          </div>
          <h1>{All.Name}</h1>
         <div className='flex gap-4'>
         <h1 className='text-red'>${All.Price}</h1><h1 className='text-gray-300 line-through	'>{(All.Price / (1 - All.Discount/ 100)).toFixed(2)}</h1>
         </div>
        </div>
      )})}
        
      </div>
    

    </div>
    <Footer/>
    </>
  )
}

export default AllProducts