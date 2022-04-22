import React from 'react'

const Register = (props) => {
  return (
    
         <>
            <div className='center'>
                <div>Register</div>
                <input className='input' placeholder='Enter Name' />
                <br/>
                <input type='email' className='input' placeholder='Enter Email'/>
                <br />
                <input type='password' className='input' placeholder='Enter Password' />
                <br />
                <input type='submit' className='btn' />
                <br/>
                <p className='user' onClick={()=>props.changeFalg()}>Existing User Click To Login</p>
            </div>
        </>
    
    
  )
}

export default Register;