
import './App.css';
import Home from './components/Home';
import React,{useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import ShowProduct from './components/ShowProduct'
import Cart from './components/Cart';
import Login from './components/Login';
function App() {
  const [catName, setCatName] = useState("hello");
  const [cart,setCart] = useState([]);
  const catnamefun = (name)=>{
    setCatName(name);
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Home name={catnamefun}/>}/>
        <Route path='/products' element={<ShowProduct catName={catName}/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        
      </Routes>
      
    </>
  );
}

export default App;
