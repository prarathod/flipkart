
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './product.css'

const Producs = (props) => {

    const [product, setproduct] = useState([]);
    const [seach, setseach] = useState('');
    // console.log("product page: ",seach)
    useEffect(()=>{
        setseach(props.search)
    },[props.search])
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
                {product.filter((name)=>{
                    {/* console.log(seach) */}
                    if(seach===''|| seach===undefined){
                        return product;
                    }
                    else{
                        return name.title.toLowerCase().includes(seach.toLowerCase());

                    }
                }).
                map((elm) => {
                    return (
                        <div key={elm.id}>
                            <img src={elm.image} alt='product img' className='productId' />
                            <h3>{elm.title}</h3>
                            <h2>{elm.price}</h2>
                            <Link to='/products/detail'>
                                <button onClick={() => props.detail(elm)}>View</button>
                            </Link>
                            <button onClick={() => props.addTocart(elm)}>Add to Cart</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Producs