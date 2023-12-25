import React, {useState,useEffect} from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import Footer from './Footer.jsx';
import { Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend} from 'chart.js'
import {Bar} from 'react-chartjs-2';


function Admin() {
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }}
 
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)
  const [products,setProducts] =useState([])
  const [prodNames,setProdNames] = useState([])
  const [prodPrice,setProdPrice] = useState([])
  const [prodAvail,setProdAvail] = useState([])


  // Get All products to make a chart //
  const fetchData = () => {
    axios.get('http://localhost:3000/api/products/allProducts')
    .then((result) => {
        setProducts(result.data)
        makeMyChart(result.data)
    })
    .catch((err) => { console.log(err)})

 
   
// function to select only the names and prices of products //
  const makeMyChart =(products) => { 
    let names=[]
    let price=[]
    let availability = []
   
    for(let i=0; i<products.length; i++) {
    names.push(products[i].Name)
    price.push(products[i].Price)
    if(products[i].Availability === 'In Stock'){ availability.push(1)}
    else{availability.push(0.1)}
   
  }
setProdNames(names)
setProdPrice(price)
setProdAvail(availability)

}
   }
  
useEffect(() => {
  fetchData()
},[])

// Chart Prices of Products //
const data = {
  labels: prodNames,
  datasets: [{
    label: 'Products Prices',
    data: prodPrice,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

// Chart of Availability of products //
const otherChart = {
  labels: prodNames,
  datasets: [{
    label: 'Availability of Products',
    data: prodAvail,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
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
      
      <div className='flex justify-center rounded gap-x-72  '>
    
      <div style={ {padding: '20px', width:'80%'}}>
        <h1 className='text-lg mb-8 font-extrabold'> Evolution of Prices </h1>
        <Bar className='mb-32 border-2 shadow-lg' data={data} options={options}/>
        <div style={ {padding: '20px', width:'80%'}}>
        <h1 className='text-lg mb-8 font-extrabold'> See Availability of Products  </h1>
        
        <Bar className='mb-40 my-36 ml-44 border-2 shadow-lg scale-150'  data={otherChart} options={options}/>
        </div>
      </div>
      </div>
      <Footer/>


    </div>
  )
}

export default Admin