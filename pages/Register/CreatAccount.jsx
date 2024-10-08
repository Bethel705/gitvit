import React from 'react'
import './Creat.scss'

function CreatAccount() {
  return (
    <div className='acc'>
      <h2>Creat Account</h2>
      <div className='facc'>
        <label>User Name</label>
        <input autoFocus required type="text" placeholder='username *' />
        <label>Email</label>
        <input autoFocus required type="text" placeholder='email *'/>
        <label>Password</label>
        <input autoFocus required type="text" placeholder='password *'/>
        <label>Confirm Password</label>
        <input autoFocus required type="text" placeholder='confirm password *'/>
      </div>
  
    </div>
    
   
  )
}

export default CreatAccount