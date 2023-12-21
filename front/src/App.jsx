import './App.css'
import './index.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx'
import EditProfile from './components/EditProfile.jsx';
import Cart from './components/Cart.jsx';
import AboutUs from './components/AboutUs.jsx';
import Admin from './components/Admin.jsx';
import Contact from './components/Contact.jsx';
import FlashSales from './components/FlashSales.jsx';
import BrowseCategory from './components/BrowseCategory.jsx';
import BestSellingProducts from './components/BestSellingProducts.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';

import AdminCategories from './components/AdminCategories.jsx'
import AddCateg from './components/AddCateg.jsx'

function App() {
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
        <Route path='/AdminCategories' element={<AdminCategories/>}></Route>
        <Route path='/addCategory' element={<AddCateg/>}></Route>
      </Routes>
      </div>
      
)}
export default App