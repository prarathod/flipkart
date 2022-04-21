import React from 'react'
import Header from './Header';
import './showproduct.css';
import axios from 'axios';
import{ useEffect, useState } from 'react';
import './product.css'

const ShowProduct = (props) => {
  console.log("show products ", props)

  const [product, setproduct] = useState([]);

  async function getUser() {
      try {
        if(props.catName=="Top Offers"){
          const response = await axios.get('http://localhost:8000/products');
          console.log(response.data)
          setproduct(response.data);
        }else{
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
  <Header/>
    <div className='Prod'>
        <div>1</div>
        <div className='product'>
                {product.map((elm) => {
                    return (
                        <div key={elm.id}>
                            <img src={elm.image} alt='product img' className='productId' />
                            <h3>{elm.title}</h3>
                            <h2>{elm.price}</h2>
                            <button>View</button>
                            <button>Add to Cart</button>
                        </div>
                    )
                })}
            </div>
    </div>

  </>
  )
}

export default ShowProduct