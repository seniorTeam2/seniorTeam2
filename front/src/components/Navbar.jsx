import React from 'react'
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
const Navbar = () => {
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
            <div className='w-auto h-8 flex float-right gap-16 absolute right-10 top-20'>
                <input type="search"
                placeholder='What are you looking for?'
                className='bg-gray-200 p-2 text-xs rounded w-56 h-9'/>
               <IoSearchOutline size={25} className='absolute right-48 top-1'/>

                <FaRegHeart size={25}/>
                <AiOutlineShoppingCart  size={25}/>

            </div>
            </div>
           </nav>
    </div>
  )
}

export default Navbar