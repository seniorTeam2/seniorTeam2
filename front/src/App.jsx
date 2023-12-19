import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="" > 
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/aboutUs' element={<AboutUs/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/admin' element={<Admin/>}/>
 

    </Routes>
    </div>
    </Router>
  );
}

export default App;
