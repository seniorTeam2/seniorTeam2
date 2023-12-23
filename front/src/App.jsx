import './App.css';
import {Routes, Route } from 'react-router-dom';

import Cart from './Components/Cart.jsx';
import Home from './Components/Home.jsx';
import AboutUs from './Components/AboutUs.jsx';
import Admin from './Components/Admin.jsx';
import FlashSales from './Components/FlashSales.jsx';
import EditProfile from './Components/EditProfile.jsx'
import Contact from './Components/Contact.jsx';
import BrowseCategory from './Components/BrowseCategory.jsx';
import BestSellingProducts from './Components/BestSellingProducts.jsx';
import { Login } from './Components/Login.jsx';
import AdminCategories from './Components/AdminCategories.jsx'
import AddCateg from './Components/AddCateg.jsx'
import {Signup} from './Components/Signup.jsx'
import AdminSellers from './Components/AdminSellers.jsx'
import AdminClients from './Components/AdminClients.jsx';
import SingleProducts from './Components/SingleProducts.jsx'
import AdminProducts from './Components/AdminProducts.jsx';
import AllProducts from './Components/AllProducts.jsx';
import { useState } from 'react';
import axios from 'axios'

function App() {
  const [img,setImg] =useState([])
  const[name,setName] = useState('')
  const[price,setPrice] = useState (0)
  const addCart=(obj)=>{
    axios.post("http://localhost:3000/api/cart/addCart",obj).then((res)=>{console.log(res)})
    .catch((err)=>console.log(err))
  }
  const singleAdd=(img,name,price)=>{
    setImg(img)
    setName(name)
    setPrice(price)

  }
  const obj={
    img,
    name,
    price
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/cart'element={<Cart/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/edit' element={<EditProfile/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/flashSales' element={<FlashSales/>}></Route>
        <Route path='/BrowseCategory' element={<BrowseCategory/>}></Route>
        <Route path='/BestSelling' element={<BestSellingProducts/>}></Route>
        <Route path='/AdminCategories' element={<AdminCategories/>}></Route>
        <Route path='/addCategory' element={<AddCateg/>}></Route>
        <Route path='/SingleProducts' element={<SingleProducts obj={obj} addCart={addCart}/>} ></Route>
        <Route path='/AdminCategories' element={<AdminCategories/>}></Route>
        <Route path='/addCategory' element={<AddCateg/>}></Route>
        <Route path='/AdminProducts' element={<AdminProducts/>}></Route>

        <Route path='/AdminSellers' element={<AdminSellers/>}></Route>
        <Route path='/AdminClients' element={<AdminClients/>}></Route>
        <Route path='/AllProducts' element={<AllProducts singleAdd={singleAdd}/>}></Route>
      </Routes>
      </div>
      
)}
export default App