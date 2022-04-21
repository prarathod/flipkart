import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './category_header.css'
import { useNavigate } from 'react-router-dom'

const Category_header = (props) => {
  const [cat, setCat] = useState([]);
  const navigate = useNavigate()
  async function getUser() {
    try {
      const response = await axios.get('http://localhost:8000/category');
      // console.log(response.data);
      setCat(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  function gotoProduct(name) {
    props.data(name);
    navigate('products')
  }


  useEffect(() => {
    getUser()
  }, [])
  return (
    <>
      <div className="flex-container">
        {cat.map((elm) => {
          return (

            <div key={elm.id} onClick={() => gotoProduct(elm.title)}>
              <div style={{ padding: "0px", margin: "0px" }}>
                <img src={elm.img} style={{ width: "90px", height: '90px', padding: "0px", margin: "0px" }} />
              </div>
              <p style={{ fontSize: "20px", padding: "0px", margin: "0px" }}>{elm.title}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Category_header