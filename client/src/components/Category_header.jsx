import axios from 'axios';
import React, { useEffect,useState } from 'react';
import './category_header.css'

const Category_header = () => {
    const [cat,setCat] = useState([]);

    async function getUser() {
        try {
          const response = await axios.get('http://localhost:8000/category');
          console.log(response.data);
          setCat(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    useEffect(()=>{
        getUser()
    },[])
    return (
        <>
            <div className="flex-container">
            {}
            </div>
        </>
    )
}

export default Category_header