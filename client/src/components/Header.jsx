import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './header.css';
const Header = () => {
  return (
    <>
        <div className='header'>
            <div className='header_first'><img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt='flipkart logo'/>
            <div className='header_first1'>
                <span style={{
                    fontSize:"11px",
                    color:'white',
                    fontStyle:'italic'
                }}>Explore</span>
                <span style={{
                    color:'#f9e107',
                    fontSize:'11px',
                    fontStyle:'italic'
                }}>Plus</span>
                <span><img width='10' src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png' alt=''/></span>
            </div></div>
            <div className='header_second'>
                <input type='text' placeholder='Seach for products'/>
                <SearchIcon/>
            </div>
            <div className='header_third'>
                <button>Login</button>
            </div>
            <div className='header_fourth'>
                <span>More</span>
                <KeyboardArrowDownIcon/>
            </div>
            <div className='header_fifth'>
                <ShoppingCartIcon/>
                <p>Cart</p>
            </div>
        </div>
    </>
  )
}

export default Header