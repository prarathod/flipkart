import React from 'react'
import Header from '../Header'
const Payment = () => {
  // const history = useHistory();
  const pay = () => {
    setTimeout(() => {
      alert("Payment success..")
      // history.push({pathname:  "/"});
    }, 3000)

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
        <input type='submit' className='btn' />
        <br />
        <p className='user' onClick={() => pay()}>Existing User Click To Payment</p>
      </div>
    </>
  )
}

export default Payment