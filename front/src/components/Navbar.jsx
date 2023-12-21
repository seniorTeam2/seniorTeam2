import React from 'react'
import { NavLink,useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div>
  
        <nav >
        <div className='flex justify-center gap-8 mt-11 mb-6'>
        <h1 className='absolute left-20 font-bold text-xl'>Exlusive</h1> 
        <NavLink to={'/home'} >Home</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
        <NavLink to={'/AboutUs'}>AboutUs</NavLink>
        <NavLink to={'/Login'}>Sing up</NavLink>
        <div className='w-auto h-8 flex float-right gap-16 absolute right-10 top-20'>
            <input type="search"
            placeholder='What are you looking for?'
            className='bg-gray-200 p-2 text-xs rounded w-56 h-9'/>
           <IoSearchOutline size={25} className='absolute right-15 top-1 ' style={{'right': '57%'}}/>


            <FaRegHeart size={25}/>
            <AiOutlineShoppingCart className='cursor-pointer' size={25} onClick={()=>navigate('/cart')} />
            <CgProfile size={25} />

        </div>
        </div>
       </nav>
           <hr className='text-gray-300'/>

    </div>
  )
}

export default Navbar