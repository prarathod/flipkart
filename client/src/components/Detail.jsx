import React from 'react'
import Header from './Header';
import './detail.css';
import { Link } from 'react-router-dom';
const Detail = ({ productDetail }) => {
    // console.log(productDetail)
    return (
        <>
            <Header />
            <div className='main'>
                <div>
                    <img src={productDetail.image} alt='product img' />
                </div>
                <div>
                    <h3>Category: <span>{productDetail.category}</span></h3>
                    <h1>{productDetail.title}</h1>
                    <span>Price: {productDetail.price}</span>
                    <hr />
                    <p>{productDetail.description}</p>
                    <button className='btn'>Add To Cart</button>
                    <Link to="/payment">
                    <button className='btn'>Place Order</button>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Detail