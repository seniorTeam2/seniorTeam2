import React from 'react'
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Home = () => {
  return (
    <div>
        <div className='flex items-center gap-2 h-10 bg-black text-white justify-center align-middle'>
            <h3 className='text-'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h3>
            <span className=' text-lg underline cursor-pointer ml-11'>Shop Now!</span>
            <select name='English' className='absolute right-5 text-white bg-black'>
                <option >English</option>
            </select>
        </div>
        <nav >
        
            <div className='flex justify-center gap-8 mt-11 mb-6'>
            <h1 className='absolute left-20 font-bold text-xl'>Exlusive</h1> 
            <NavLink to={'/home'} >Home</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/sing-up'}>Sing up</NavLink>
            <div className='w-96 h-8 bg-gray-500 flex float-right'>
                <input type="search"
                placeholder='What are you looking for?'
                className='bg-gray-200 p-2 text-xs border-r-8 w-80 h-7'/>
               
                <FaRegHeart />
                <AiOutlineShoppingCart />

            </div>
            </div>
           



            
            
            
            </nav>
            <hr />
        

    </div>
  )
}

export default Home