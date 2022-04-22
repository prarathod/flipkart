import React from 'react'

const Login1 = (props) => {
    return (
        <>
            <div className='center'>
                <div>Login</div>
                <input type='email' className='input' placeholder='Enter Email'/>
                <br />
                <input type='password' className='input' placeholder='Enter Password' />
                <br />
                <input type='submit' className='btn' />
                <br/>
                <p className='user' onClick={()=>props.changeFalg()}>New User Click To Register</p>
            </div>
        </>
    )
}

export default Login1