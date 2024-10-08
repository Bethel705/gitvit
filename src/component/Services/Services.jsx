import React from 'react'
import './Services.scss'
import {Link} from 'react-router-dom'
function Services({item}) {
  return (
    <div className="cont">
 
      <div className='Services'>
  
        <Link to="/service/123">
        <img src={item.img} alt="" />
        <div className="info">
          <h2>{item.title}</h2>
          <div className="star">
            <p>{item.desc}</p>
            <div className="img">
              <img src="./star.png" alt="" />
              <img src="./star.png" alt="" />
              <img src="./star.png" alt="" />
              <img src="./star.png" alt="" />
              <img src="./star.png" alt="" />
            </div>
          
          </div>

        </div>
        <hr />
        <div className="detail">
            <img src="./heart.png" alt="" />
            <div className="price">
                <span>Total Monthly price </span>
                <h1>${item.price}</h1>
            </div>

        </div>
        
        </Link>
    </div>
    
    </div>
    
  )
}

export default Services