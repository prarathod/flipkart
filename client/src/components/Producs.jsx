
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './product.css'

const Producs = (props) => {

    const [product, setproduct] = useState([]);

    async function getUser() {
        try {
            const response = await axios.get('http://localhost:8000/products');
            // console.log(response.data);
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
                            <h2>{elm.price}</h2>
                            <button>View</button>
                            <button onClick={()=>props.addTocart(elm)}>Add to Cart</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Producs