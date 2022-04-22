import React from 'react'
import { useNavigate } from 'react-router-dom';
const Login1 = (props) => {
    let navigate = useNavigate();
    let num = 0;
    function che(){
        if(num>=3){
            navigate('/');
        }
        num++

    }
    return (
        <>
            <div className='center'>
                <div>Login</div>
                <input type='email' className='input' placeholder='Enter Email'/>
                <br />
                <input type='password' className='input' placeholder='Enter Password' />
                <br />
                <input type='submit' className='btn' onClick={()=>che()} />
                <br/>
                <p className='user' onClick={()=>props.changeFalg()}>New User Click To Register</p>
            </div>
        </>
    )
}

export default Login1