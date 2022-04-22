import React ,{useState}from 'react'
import Header from './Header'
import './login.css';
import Login1 from './Login/Login1';
import Register from './Login/Register';
const Login = () => {

    const [flag,setFalg] =useState(false);
    function changeFalg(){
        setFalg(!flag);
    }
    
    return (
        <>
            <Header />
            <div>
                {flag?<Login1 changeFalg={changeFalg}/>:<Register changeFalg={changeFalg}/>}
            </div>
            
        </>
    )
}

export default Login