import React from 'react'
import Header from '../Header'
import { useNavigate } from 'react-router-dom';
const Payment = () => {
  let navigate = useNavigate();
  const pay = () => {
    setTimeout(() => {
      alert("Payment success..")
      navigate('/');
    }, 1000)

  }
  return (
    <>
      <Header />
      <div className='center'>
        <div>Payment</div>
        <input className='input' placeholder='Enter Name' />
        <br />
        <input type='number' className='input' placeholder='Enter Cart Number' />
        <br />
        <input type='number' className='input' placeholder='Enter CVV' />
        <br />
        <input type='submit' className='btn' onClick={() => pay()} placeholder="Make Payment"/>
        <br />
      </div>
    </>
  )
}

export default Payment