import './App.css';
import {Routes, Route } from 'react-router-dom';
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
import {SingleProducts} from './components/SingleProducts.jsx';
import AdminProducts from './Components/AdminProducts.jsx';


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
        <Route path='/SingleProducts' element={<SingleProducts/>} ></Route>
        <Route path='/AdminCategories' element={<AdminCategories/>}></Route>
        <Route path='/addCategory' element={<AddCateg/>}></Route>
        <Route path='/AdminProducts' element={<AdminProducts/>}></Route>

        <Route path='/AdminSellers' element={<AdminSellers/>}></Route>
        <Route path='/AdminClients' element={<AdminClients/>}></Route>
      </Routes>
      </div>
      
)}
export default App