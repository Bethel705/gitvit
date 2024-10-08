import React from 'react'
import'./student.scss'

function Student() {
  return (
    <div className='stud'>
        <h2>Student Information</h2>
        <div className='fstud'>
            <label>First Name</label>
            <input autoFocus required type="text" placeholder='First Name *'/>
            <label>Last Name</label>
            <input autoFocus required type="text" placeholder='Last Name *'/>
            <label>Age</label>
            <input autoFocus required type="text" placeholder='Age (optional)'/>
            <label>School Name</label>
            <input autoFocus required type="text" placeholder='School Name (optional)'/>
            <label>Grade</label>
            <select>
                <option value="Grade">Grade 1-4</option>
                <option value="Grade">Grade 5-8</option>
                <option value="Grade">Grade 9-10</option>
                <option value="Grade">Grade 11-12</option>
                </select>
            <label>Select Package</label>
            <select>
                <option value="Grade">Basic Plan</option>
                <option value="Grade">Standared Plan</option>
                <option value="Grade">Premium Plan</option>
                <option value="Grade">Platinum Plan</option>
                <option value="Grade">Dimond Plan</option>
            </select>
            <label>Add Note</label>
            <input className='addnot' autoFocus required type="text" placeholder='Add more information'/>
           
    </div>
    </div>
    
    
    
  )
}

export default Student