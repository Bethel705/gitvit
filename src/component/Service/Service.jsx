import React from 'react'
import './Service.scss'
import { Link, useLocation   } from 'react-router-dom'

const Service = () => {
  return (
    <div className="start">
        <div className="title">
        <h1>How to Get Started</h1>
        </div>
        <div className="component">
            <Link to="/Register"><div className="reg"><img src="./register.png" alt="" />Register Now</div></Link>
            <Link to="/Services"><div className="reg"><img src="./findd.png" alt="" />Find a Mach</div></Link>
            <div className="reg"><img src="./helpp.png" alt="" />How to Start</div>

        </div>
    
    
    
    </div>
  )
}

export default Service