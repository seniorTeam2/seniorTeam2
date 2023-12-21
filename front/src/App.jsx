import './App.css';
import {Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart.jsx';
import Home from './Components/Home.jsx';
import AboutUs from './Components/AboutUs.jsx';
import Admin from './Components/Admin.jsx';
import Contact from './Components/Contact.jsx';
import FlashSales from './Components/FlashSales.jsx';
import BrowseCategory from './Components/BrowseCategory.jsx';
import BestSellingProducts from './Components/BestSellingProducts.jsx';
import Signup from './Components/Signup.jsx';
import Login from './Components/Login.jsx';
import AdminCategories from './Components/AdminCategories.jsx'
import AddCateg from './Components/AddCateg.jsx'
import SignUp from './Components/Signup.jsx';
import SingleProducts from './Components/SingleProducts.jsx';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/cart'element={<Cart/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/flashSales' element={<FlashSales/>}></Route>
        <Route path='/BrowseCategory' element={<BrowseCategory/>}></Route>
        <Route path='/BestSelling' element={<BestSellingProducts/>}></Route>
        <Route path='/AdminCategories' element={<AdminCategories/>}></Route>
        <Route path='/addCategory' element={<AddCateg/>}></Route>
        <Route path='/SingleProducts' element={<SingleProducts/>} ></Route>
      </Routes>
      </div>
      
)}
export default App