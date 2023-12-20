import './App.css';
import {Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart.jsx';
import Home from './Components/Home.jsx';
import AboutUs from './Components/AboutUs.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/cart'element={<Cart/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
      </Routes>
      </div>
      
)}
export default App