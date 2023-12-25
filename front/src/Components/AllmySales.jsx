import React,{useState,useEffect} from 'react'
import { FaRegHeart } from "react-icons/fa6";
import axios from 'axios';
import Footer from './Footer';
import {NavLink } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { setRef } from '@mui/material';



function AllmySales() {
  const[allSales,setAllSales]=useState([])
  const [refresh,setRefresh] = useState(false)
  const [show,setShow] = useState(0)
  const [name, setName] = useState("")
  const [description,setDescription] = useState("")
  const [quantity,setQuantity] = useState(0)
  const [price,setPrice] = useState(0)
  const [availability,setAvailability] = useState("")
  const [discount,setDiscount] = useState(0)
  const [color,setColor] = useState("")
  const [size,setSize] = useState("")



  useEffect(()=>{
    axios.get(`http://localhost:3000/api/products/allProducts`)
    .then(res=>setAllSales(res.data)).catch(err=>console.log(err))
},[refresh])


const updated = {
  Name : name,
  Description : description,
  Price : price,
  Availability : availability,
  Quantity : quantity,
  Discount : discount,
  Color : color,
  Size : size
}


const deleteProd = (id) => {
  axios.delete(`http://localhost:3000/api/products/deleteProd/${id}`)
  .then(res=>setRefresh(!refresh)).catch(err=>console.log(err))
}
const updateProd = (id,newData) => {
  axios.put(`http://localhost:3000/api/products/updateProd/${id}`,newData)
  .then(res=>setRefresh(!refresh)).catch(err=>console.log(err))
}
  return (
    <>
    <div><div className='flex items-center gap-2 h-10 bg-black text-white justify-center align-middle'>
            <h3 className='text-'>Make Discount on your sales and win Gold Coupon </h3></div>
            <div className='flex justify-center gap-8 mt-11 mb-6'>
        <NavLink to={'/seller'} >Home</NavLink>
        <NavLink to={'/contactAdmin'}>Contact Administration</NavLink>
        <NavLink to={'/addforsale'}>Add For Sale</NavLink>
        <NavLink to={'/allmysales'}>All My Sales </NavLink>

        <div className='w-auto h-8 flex float-right gap-16 absolute right-10 top-20'>
            <CgProfile size={25} />
        </div>
        </div></div>

    <div  className='mr-10 ml-10 mb-20 gap-7'>
          <h1 className='text-gray-300'>
          Home / <span className='text-black'> AllProducts</span>
        </h1>

      <div className='grid grid-cols-3 gap-4 overflow-hidden shadow-sm'>
      {allSales.map((el,i)=>(
        <div key={i} className=''>
          
          <div className='w-80 h-72 bg-gray mt-10 flex-wrap'>
          {el.Discount?<div className=' top-full left-0 w-20 rounded h-8 bg-red flex justify-center items-center text-white '>-{el.Discount}%</div>:""}
          <img className=' w-50 h-52 ml-16 ' src={el.ProductImage} alt=""/>
          
          <div>{el.Availability === "In Stock" ? <h1 className=' font-semibold text-lime-600 my-3' style={{"color": "green"}}> In Stock </h1> :  <h1 className='text-red'> Out of Stock </h1>}</div>
          
          </div>
          <h1>{el.Name}</h1>
         <div className='flex gap-4'>
         <h1 className='text-red'>${el.Price}</h1><h1 className='text-gray-800 line-through	'>{(el.Price / (1 - el.Discount/ 100)).toFixed(2)}</h1>
         
         </div>
         <button  className="hover:shadow-lg hover:text-red px-6 py-3 mb-1 mr-1 text-sm font-bold text-black bg-white uppercase rounded shadow "
          type="button" onClick={()=>{deleteProd(el.ProductID)}}> Delete </button>
         <button  className="hover:shadow-lg hover:text-red px-6 py-3 mb-1 mr-1 text-sm font-bold text-black bg-white uppercase rounded shadow "
          type="button" onClick={()=>{setShow(el.ProductID)}}> Update</button>
        <div>{show===el.ProductID && 
        <div className='border'>
           <div className="pt-0 mb-3 my-10">
     <input
          type="text"
          placeholder="Product Name"

          className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
          required
          onChange={(e)=>{setName(e.target.value)}}
        />
    </div>
    <div className="pt-0 mb-3 ">
     <input
          type='number'
          placeholder="Quantity to put in stock"

          className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
          onChange={(e)=>{setQuantity(e.target.value)}}
        />
    </div>
    <div className="pt-0 mb-3 ">
     <input
          type='number'
          placeholder="Product unit Price"

          className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
          onChange={(e)=>{setPrice(e.target.value)}}
        />
    </div>
    
    <div className="pt-0 mb-3 ">
     <input
          type='number'
          placeholder="Product Discount"

          className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
          onChange={(e)=>{setDiscount(e.target.value)}}
        />
    </div>
    <div className="pt-0 mb-3 ">
     <input
          type="text"
          placeholder="Product Color"

          className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
          onChange={(e)=>{setColor(e.target.value)}}
        />
    </div>
    <div className="pt-0 mb-3 ">
     <input
          type="text"
          placeholder="Product Size"

          className="relative w-full px-3 py-3 text-sm text-red-600 placeholder-gray-600 bg-gray border-0 rounded shadow"
          onChange={(e)=>{setSize(e.target.value)}}
        />
    </div>
    <div className="pt-0 mb-3 ">
    <fieldset>
<div className='flex items-center w-full gap-8'>
  <div>
    <input type="checkbox"  name="In Stock" value="In Stock" onChange={()=>{setAvailability('In Stock')}} />
    <label for="In Stock">In Stock</label>
  </div>

  <div>
    <input type="checkbox" id="Out of Stock" value="Out of Stock" name="Out of Stock for now" onChange={()=>{setAvailability("Out Of Stock")}}/>
    <label for="Out of Stock">Out of Stock</label>
  </div>
  </div>
</fieldset>
    </div>
    <div className="pt-0 mb-3">
        <textarea
          placeholder="Description"
          className="relative w-full h-24 px-3 py-3 text-sm text-red-600 placeholder-gray-400 bg-gray border-0 rounded shadow"
          required
        />
      </div>
   <button className='hover:shadow-lg hover:bg-white px-6 py-3 mb-1 mr-1 text-sm font-bold text-black bg-red uppercase rounded shadow' onClick={()=>{updateProd(el.ProductID,updated);
   setShow(0)}}> Validate </button>
        </div>
        
        }</div>
        </div>
        
      ))}
        
      </div>
    

    </div>
    <Footer/>
    </>
  )
}

export default AllmySales;