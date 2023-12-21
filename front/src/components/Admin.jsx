import React from 'react'
import { NavLink } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import Footer from './Footer.jsx';

function Admin() {
  return (
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
       <div className='flex justify-center rounded mt-52 gap-x-72 '>
       <div><img src="https://canvasjs.com/wp-content/uploads/images/gallery/javascript-charts/overview/javascript-charts-graphs-index-data-label.png"/></div>
      <div><img src="https://chartio.com/assets/cad7f1/tutorials/charts/pie-charts/eaeaa38b48b5dc5229d876831ab031f38c2bedb2140cfab55b8f1ff22842cce9/pie-chart-example-1.png"/></div>
      </div>
      <Footer/>
    </div>
  )
}

export default Admin