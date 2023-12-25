import './App.css';
import { useEffect } from 'react';
import {Routes, Route, useNavigate } from 'react-router-dom';

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
import SellerInterface from './Components/SellerInterface.jsx'
import AddForSale from './Components/AddForSale.jsx'
import ContactAdmin from './Components/ContactAdmin.jsx'
import axios from 'axios'
import Concurrence from './Components/Concurrence.jsx';
import { createContext, useState } from 'react';

function App() {
  const navigate=useNavigate()
  const [img,setImg] =useState([])
  const[name,setName] = useState('')
  const[price,setPrice] = useState (0)
  const[data,setData]=useState([])
  const[All,setAll]=useState([])
  const[refresh,setRefresh]=useState(false)
  const[email,setEmail] =useState('')
  const[password,setPassword] =useState('')
  const[refresh1,setRefresh1]=useState(false)
const[counter,setCounter]=useState(0)
const[login,setLogin]=useState([])
const[userID,setUserID]=useState(-1)
const log=()=>{
  axios.post('http://localhost:3000/auth/login',{
    email:email,
    password:password
  }).then((response)=>{setLogin(response.data)
    setUserID(response.data.user.UserID)
    console.log('hosemsalim',response.data.user.UserID)
  navigate('/home');}).catch((error)=>console.log(error))
}
  useEffect(() => {
    axios.get(`http://localhost:3000/api/cart/UserCart/${userID}`)
      .then((response) => {
        setCounter(response.data.length)
       
       
      })
      .catch((error) => console.log(error));
  }, [refresh1]);
  useEffect(()=>{
    axios.get(`http://localhost:3000/api/products/allProducts`)
    .then(r=>{
      console.log('all',r.data)
      setAll(r.data)}).catch(err=>console.log(err))
},[refresh])
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
    price,
    name,
    
  }
  const addCart=(obj)=>{
    axios.post("http://localhost:3000/api/cart/",obj).then((res)=>{console.log(res)})
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
        <Route path='/cart'element={<Cart userID={userID} refresh1={refresh1} setRefresh1={setRefresh1}/>}></Route>
     
        <Route path='/home' element={<Home userID={userID}  refresh1={refresh1} setRefresh1={setRefresh1} counter={counter} refresh={refresh} setRefresh={setRefresh} searching={searching} handlerFuntion={handlerFuntion} singleAdd={singleAdd}/>}></Route>
     
        <Route path='/edit' element={<EditProfile login={login}/>}></Route>
        <Route path='/login' element={<Login setEmail={setEmail} setPassword={setPassword} log={log}/>}></Route>
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