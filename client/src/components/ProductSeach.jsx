
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../showproduct.css';
import { Link } from 'react-router-dom';

const ShowProducts = (props) => {

    const [product, setproduct] = useState([]);

    async function getUser() {
        try {
            const response = await axios.get('http://localhost:8000/products');
            console.log(response.data);
            setproduct(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getUser()
    }, [])

    return (
        <>
            <div className='product'>
                {product.map((elm) => {
                    return (
                        <div key={elm.id}>
                            <img src={elm.image} alt='product img' className='productId' />
                            <h3>{elm.title}</h3>
                            <h2><span><b>{elm.price}</b></span><span>Rating{elm.rating}</span></h2>
                            <Link to='/products/detail'>
                            <button onClick={()=>props.detail(elm)}>View</button>
                            </Link>
                            <button>Add to Cart</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ShowProducts