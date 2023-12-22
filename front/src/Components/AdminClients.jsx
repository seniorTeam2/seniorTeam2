import React,{useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import Footer from './Footer.jsx';
import axios from 'axios';

function AdminClients() {
const [clients,setClients]= useState([])

useEffect(()=>{
    axios.get('http://localhost:3000/api/users/clients').then((res)=>{setClients(res.data)})
    .catch((err)=>{console.log(err)})
},[])

 return(
    <div>
        
        <nav >
        
        <div className='flex justify-center align-middle bg-black text-white h-20 gap-40 mb-6 items-center' >
         
          <NavLink to={'/administration'} >Administration</NavLink>
        <NavLink to={'/AdminClients'}>Clients</NavLink>
        <NavLink to={'/AdminSellers'}>Sellers</NavLink>
        <NavLink to={'/AdminCategories'}>Categories</NavLink>
        <NavLink to={'/AdminProducts'}>Products</NavLink>
        <div>
        <input type="search"
            placeholder='What are you looking for?'
            className='bg-gray-200 p-2 text-xs rounded w-56 h-9 right-36'/>
              <IoSearchOutline size={25} className='absolute right-10 top-7'/>
        </div>
 
        </div>
       </nav>
       <div>
        <div className='grid grid-cols-3 mx-44 justify-center my-40 bg-white gap-40 items-center text-center rounded-s align-middle' style={{"flex-wrap": "wrap"}}>
        {clients.map((el,i)=>(
        <div key={i} className='flex-wrap  mb-6 hover:box-content -mt-28 mr-60 shadow-2xl border-black border rounded w-60 '>
        <h1 className=' font-bold'>{el.FirstName}</h1>
        <h1 className=''>{el.LastName}</h1>
        <h1 className=''>{el.Email}</h1>
        <button className='bg-red text-white rounded w-40 h-9 my-5'> Send an email </button>
        </div>
    ))}</div>
    </div>
        <div>
        <Footer/>
  
      </div>
      </div>
 )
}

export default AdminClients;