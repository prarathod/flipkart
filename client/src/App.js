
import './App.css';
import Home from './components/Home';
import React,{useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import ShowProduct from './components/ShowProduct'
import Cart from './components/Cart';
import Login from './components/Login';
function App() {
  const [catName, setCatName] = useState("hello");
  let cart = [];
  const catnamefun = (name)=>{
    setCatName(name);
  }

  function addTocart(elm){
    cart.push(elm)
    console.log("clied",cart)
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<Home name={catnamefun} addTocart={addTocart}/>}/>
        <Route path='/products' element={<ShowProduct catName={catName} addTocart={addTocart} />}/>
        <Route path='/cart' element={<Cart cart={cart}/>}/>
        <Route path='/login' element={<Login/>}/>
        
      </Routes>
      
    </>
  );
}

export default App;
