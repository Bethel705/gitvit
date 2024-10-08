import React from 'react'
import './register.scss'
import { useMultistepForm } from '../../useMultistepsForm'
import ParentForm from './parentForm'
import Student from './Student'
import CreatAccount from './CreatAccount'

function Register() {
  const { Steps, currentStepIndex, step, next, back, isFirststep, isLaststep} =useMultistepForm([
    <ParentForm/>,
    <Student/>,
    <CreatAccount/>
  ])



  return (
    <div className='reg'>
      <div className='register'>
        <form>
          <div className='step'>
            {currentStepIndex +1}/{Steps.length}
          </div>
          <div>
            {step}

          </div>
          <div className="btn">
            {!isFirststep && <button type='button' onClick={back}>Back</button>}
            <button type='submit' onClick={next}>
              {isLaststep ? "Finish" : "Next"}
              </button>
          </div>
        </form>
    </div>

    </div>
    
  )
}

export default Register