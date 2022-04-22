import React from 'react'
import Header from './Header'
import './login.css';
const Login = () => {
    return (
        <>
            <Header />
            <div className='center'>
                <div>Login</div>
                <input className='input' />
                <br/>
                <input className='input' />
                <br/>
                <input type='submit' />
            </div>
        </>
    )
}

export default Login