import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';
import axios from 'axios';
import { GrUpdate } from "react-icons/gr";
import { MdOutlineRemoveRedEye } from 'react-icons/md';

function AdminProducts() {
  const [adminData, setAdminData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/products/allProducts')
      .then((result) => {
        setAdminData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);

  const deleteProd = (ProductID) => {
    axios
      .delete(`http://localhost:3000/api/products/deleteProd/${ProductID}`)
      .then(() => {
        console.log('deleted');
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const modify = (id) => {
    axios
      .put(`http://localhost:3000/api/products/updateProd/${id}`)
      .then(() => {
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
    <nav >
        
        <div className='flex justify-center align-middle bg-black text-white h-20 gap-40 mb-6 items-center' >
         
          <NavLink to={'/admin'} >Administration</NavLink>
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
      <div className='flex grid grid-cols-3 gap-4 overflow-hidden shadow-2xl'>
     {adminData.map((el,i)=>(
      <div className=''>
      {console.log(el.ProductID)}
      <div className='w-80 h-72 flex justify-center items-center mt-11'>
     <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center'><button ><GrUpdate onClick={() => modify(el.ProductID)}  size={20}/></button></div> 
        <div className='bg-white w-12 h-12 rounded-full flex items-center justify-center'><button ><MdOutlineRemoveRedEye onClick={() => deleteProd(el.ProductID)} size={20}/></button></div>

      

       
       
 
        
        <img className=' w-40 ' src={el.ProductImage} alt="" />
         </div>
         
         <h1>{el.Name}</h1>
         <div className='flex gap-4'>
         <h1 className='text-red'>${el.Price}</h1><h1 className='text-gray-300 line-through	'>{(el.Price / (1 - el.Discount/ 100)).toFixed(2)}</h1>
         </div>
         </div>
     ))
    
        }
    </div>
    </div>
  )
      }   

export default AdminProducts;



        {/* <div className="grid grid-cols-3 gap-4">
          {adminData.map((el) => (
            <div key={el._id} className="w-80 mt-11">
              <div className="flex flex-col items-center justify-center h-96 bg-gray-300 p-4">
                <img className="w-40 gap-4" src={el.ProductImage} alt="" />
                <div className="w-12 h-12 flex items-center justify-center">{el.Name}</div>
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                  <button onClick={() => deleteProd(el._id)}>
                    <MdOutlineRemoveRedEye size={20} />
                  </button>
                </div>
                  <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                  <button onClick={() => modify(el._id)}>
                    <GrUpdate size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    