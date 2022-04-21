
import './App.css';
import Home from './components/Home';
import React,{useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import ShowProduct from './components/ShowProduct'
function App() {
  const [catName, setCatName] = useState("hello");
  const catnamefun = (name)=>{
    setCatName(name);
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Home name={catnamefun}/>}/>
        <Route path='/products' element={<ShowProduct catName={catName}/>}/>
      </Routes>
      
    </>
  );
}

export default App;
