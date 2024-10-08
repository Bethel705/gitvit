import React from 'react'
import './parent.scss'

function ParentForm() {
  return (
    <div className='parent'>
        <h2>Client Information(Parent)</h2>
        <div className='pform'>
        <label>First Name</label>
        <input autoFocus required type="text" placeholder='First Name *' />
        <label>Last Name</label>
        <input autoFocus required type="text" placeholder='Last Name' />
        <label>Address</label>
        <input autoFocus required type="text" placeholder='State/City/Street *' />
        <label>Phone</label>
        <input autoFocus required type="text" placeholder='Phone *'/>
        <label>Email</label>
        <input autoFocus required type="email" placeholder='email *'/>
        <label>Contact me Via</label>
        <select>
            <option value="Phone">Phone Call</option>
            <option value="SMS">SMS</option>
            <option value="Email">Email</option>

        </select>
    </div>
        </div>
        
   
    
  )
}

export default ParentForm