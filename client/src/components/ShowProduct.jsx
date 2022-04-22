import React from 'react'
import Header from './Header';
import './showproduct.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './product.css';
import Price from './filtes/Price'
import { Link } from 'react-router-dom';
const ShowProduct = (props) => {
  const [product, setproduct] = useState([]);
  const [filter, setFilter] = useState(0)



  async function filterFun(elm) {
    setFilter(elm);
    if (filter == 10) {
      product.sort((a, b) => {
        // console.log(a);
        return b.price - a.price
      })
    } else {
      product.sort((a, b) => {
        // console.log(a);
        return a.price - b.price
      })
    }
  }
  async function getUser() {
    try {
      if (props.catName == "Top Offers") {
        const response = await axios.get('http://localhost:8000/products');
        // console.log(response.data)
        setproduct(response.data);
      } else {
        const response = await axios.get(`http://localhost:8000/products?category=${props.catName.toLowerCase()}`);
        setproduct(response.data);
      }

    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUser()
  }, [])
  return (<>
    <Header />
    <div className='Prod'>
      <div>
        <Price data={filterFun} />
      </div>
      <div className='product'>
        {product.map((elm) => {
          return (
            <div key={elm.id}>
              <img src={elm.image} alt='product img' className='productId' />
              <h3>{elm.title}</h3>
              <h2>{elm.price}</h2>
              <Link to='/products/detail'>
                <button onClick={() => props.detail(elm)}>View</button>
              </Link>
              <button onClick={() => props.addTocart(elm)} >Add to Cart</button>
            </div>
          )
        })}
      </div>
    </div>

  </>
  )
}

export default ShowProduct