import './App.css';
import {Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/cart'element={<Cart/>}></Route>
      </Routes>
      </div>
      
)}
export default App