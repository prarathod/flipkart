import React ,{useState}from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './header.css';

import { Link } from 'react-router-dom';

const Header = ({seachFunc}) => {
    const [inputData,setInputData] = useState('')
    
    function chageData (e){
        setInputData(e.target.value)
        seachFunc(inputData)
    }
    return (
        <>
            <div className='header'>
                <Link to='/'>
                    <div className='header_first'><img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt='flipkart logo' />
                        <div className='header_first1'>
                            <span style={{
                                fontSize: "11px",
                                color: 'white',
                                fontStyle: 'italic'
                            }}>Explore</span>
                            <span style={{
                                color: '#f9e107',
                                fontSize: '11px',
                                fontStyle: 'italic'
                            }}>Plus</span>
                            <span><img width='10' src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png' alt='' /></span>
                        </div>
                    </div>
                </Link>
                <div className='header_second'>
                    <input type='text' placeholder='Seach for products' onChange={(e)=>chageData(e)}/>
                    <SearchIcon />
                </div>
                <Link to='/login'>
                    <div className='header_third'>
                        <button>Login</button>
                    </div>
                </Link>
                <div className='header_fourth'>
                    <span>More</span>
                    <KeyboardArrowDownIcon />
                </div>
                <Link to='/cart'>
                    <div className='header_fifth'>
                        <ShoppingCartIcon />
                        <p>Cart</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Header