import React, { useEffect, useState } from 'react'
import Header from './Header';
import './cart.css';
const Cart = (props) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        setProduct(props.cart)
    }, []);

    const remove = (elm) => {
        const newProduct = product.filter((i) => {
            return i.id != elm.id;
        });
        setProduct(newProduct)
    }
    return (<>
        <Header />
        <div className='main'>

            <div className='product'>
                {product.map((elm) => {
                    return (
                        <div key={elm.id}>
                            <img src={elm.image} alt='product img' className='productId' />
                            <h3>{elm.title}</h3>
                            <h2>{elm.price}</h2>
                            <button onClick={() => remove(elm)}>Remove Cart</button>
                        </div>
                    )
                })}
            </div>
            <div className='mainbtn'>
                <button>Place Order</button>
            </div>

        </div>

    </>


    )
}

export default Cart