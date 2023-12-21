import React, {useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function AdminCat() {

    const [categs,setCategs] = useState([])
    const [refresh,setRefresh] = useState(false)

    useEffect(()=>{
        axios.get('http://localhost:3000/api/categories/allCategories').then((res)=>{setCategs(res.data)})
        .catch((err)=>{console.log(err)})
    },[refresh])
    
    const deleteCateg = (id) => {
        axios.delete(`http://localhost:3000/api/categories/deleteCategory/${id}`).then((res)=>{setRefresh(!refresh)})
        .catch((err)=>{console.log(err)})
    }


  return (
    <div>
        <div>
<div className='flex justify-center align-middle bg-black text-white h-20 gap-40 mb-6 items-center' >
         
         <NavLink to={'/addCategory'} >Add New Category</NavLink>
       <NavLink to={'/admin'}>Get Back to Administration </NavLink>
       <div>
       <input type="search"
           placeholder='Search Category'
           className='bg-gray-200 p-2 text-xs rounded w-56 h-9 right-10'/>

       </div>
       </div>
       <div className='flex justify-center my-40 bg-white gap-40 items-center text-center rounded-s align-middle'>
      {categs.map((el,i)=>(
        <div key={i} className='grid-cols-5 mb-6   hover:box-content '>
        <img className=' h-40 w-30 shadow-lg rounded-3xl' src={el.CategoryImage} alt="" />
        <h1 className='text-'>{el.NameCategory}</h1>
        <button className='bg-red text-white rounded w-20 h-9 my-5' onClick={()=>{deleteCateg(el.CategoryID)}}> delete </button>
        </div>
    ))}
       </div>
    </div> 
    </div> 
  )
}

export default AdminCat;