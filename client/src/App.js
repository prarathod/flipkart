
import './App.css';
import Home from './components/Home';
import React,{useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import ShowProduct from './components/ShowProduct'
import Cart from './components/Cart';
import Login from './components/Login';
import Payment from './components/Login/Payment';
import Detail from './components/Detail';
function App() {
  const [catName, setCatName] = useState("hello");
  const [productDetail,setProductDetail] = useState({})
  let cart = [];
  const catnamefun = (name)=>{
    setCatName(name);
  }
  function detail(elm){
    setProductDetail(elm)
  }
  function addTocart(elm){
    cart.push(elm)
    console.log("clied",cart)
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<Home name={catnamefun} addTocart={addTocart} detail={detail} />}/>
        <Route path='/products' element={<ShowProduct catName={catName} addTocart={addTocart} detail={detail} />}/>
        <Route path='/cart' element={<Cart cart={cart}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/products/detail' element={<Detail productDetail={productDetail}/>}/>
        
      </Routes>
      
    </>
  );
}

export default App;
