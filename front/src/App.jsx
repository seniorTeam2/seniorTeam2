import './App.css'
import './index.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx'
function App() {
  return (
    <div >
      <Routes>
        {/* <Route path='/' element={<Login/>}></Route> */}
        <Route path='/home' element={<Home/>}></Route>

      </Routes>

    </div>
 
  );
}

export default App;
