import './App.css';
import { useEffect } from 'react';
import {Routes, Route, useNavigate } from 'react-router-dom';
import Cart from './components/Cart.jsx';
import Home from './components/Home.jsx';
import AboutUs from './components/AboutUs.jsx';
import Admin from './components/Admin.jsx';
import FlashSales from './components/FlashSales.jsx';
import EditProfile from './components/EditProfile.jsx'
import Contact from './components/Contact.jsx';
import BrowseCategory from './components/BrowseCategory.jsx';
import BestSellingProducts from './components/BestSellingProducts.jsx';
import { Login } from './components/Login.jsx';
import AdminCategories from './components/AdminCategories.jsx'
import AddCateg from './components/AddCateg.jsx'
import {Signup} from './components/Signup.jsx'
import AdminSellers from './components/AdminSellers.jsx'
import AdminClients from './components/AdminClients.jsx';
import SingleProducts from './components/SingleProducts.jsx'
import AdminProducts from './components/AdminProducts.jsx';
import AllProducts from './components/AllProducts.jsx';
import SellerInterface from './components/SellerInterface.jsx'
import AddForSale from './components/AddForSale.jsx'
import ContactAdmin from './components/ContactAdmin.jsx'
import { createContext, useState } from 'react';
import axios from 'axios'
import Concurrence from './components/Concurrence.jsx';
function App() {
  const navigate=useNavigate()
  const [img,setImg] =useState([])
  const[name,setName] = useState('')
  const[price,setPrice] = useState (0)
  const[data,setData]=useState([])
  const[All,setAll]=useState([])
  
  useEffect(()=>{
    axios.get(`http://localhost:3000/api/products/allProducts`)
    .then(r=>{
      console.log('all',r.data)
      setAll(r.data)}).catch(err=>console.log(err))
},[])
const searching=(inp)=>{
  let d=All.filter(e=>{
    return e.Name.indexOf(inp)!==-1
  })
  setAll(d)

}
  useEffect(()=>{
    axios.get(`http://localhost:3000/api/categories/allCategories`)
    .then(r=>{
      console.log('cat',r.data)
      setData(r.data)} ).catch(err=>console.log(err))
  },[])
  const handlerFuntion=(name)=>{
    let d=data.filter(e=>{
      console.log(e.Name===name)
      return e.NameCategory===name
    })
    setAll(d)
    navigate('/AllProducts')
  }
  const obj={
    img,
    name,
    price
  }
  const addCart=(obj)=>{
    axios.post("http://localhost:3000/api/cart/addCart",obj).then((res)=>{console.log(res)})
    .catch((err)=>console.log(err))
  }
  
  const singleAdd=(img,name,price)=>{
    setImg(img)
    setName(name)
    setPrice(price)

  }

  
  return (
    <div className="App">
      <Routes>
        <Route path='/cart'element={<Cart/>}></Route>
     
        <Route path='/home' element={<Home searching={searching} handlerFuntion={handlerFuntion} singleAdd={singleAdd}/>}></Route>
     
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

        <Route path='/AllProducts' element={<AllProducts All={All} singleAdd={singleAdd}/>}></Route>
        <Route path='/seller' element={<SellerInterface/>}></Route>
        <Route path='/addforsale' element={<AddForSale/>}></Route>
        <Route path='/contactAdmin' element={<ContactAdmin/>}></Route>

        <Route path='/concurrence' element={<Concurrence/>}></Route>

      </Routes>
      </div>
      
)}
export default App