import React from 'react'
import "./Footer.scss"
import { Link, useLocation   } from 'react-router-dom'
import imag from "/image/social.webp"
const Footer = () => {
  return (
    <div className='Footer'>
      <div className="container">
        <div className="top">
          <div className="left">
            <div className="media">
            <Link to="/https://t.me/Mastermindtutorial">
                <img src="./telegram.jfif" alt="" />
              </Link>
              <Link to="/https://www.facebook.com/profile.php?id=61564880458376">
                <img src="./facebook.jfif" alt="" />
              </Link>
              <Link to="https://wa.me/251716163853 ">
                <img src="./whatsapp.png" alt="" />
              </Link>
                <Link to=" https://youtube.com/@mastermindtutorial?si=Q12j_MmEE4PNmiuo">
                <img src="./youtube.png" alt="" />
              </Link>
              <Link to=" https://x.com/MastermindsTut?t=TQfC75OueREe0b9pPWZIjg&s=35 ">
                <img src="./xpage.png" alt="" />
              </Link>

            </div>
              <h1>Tutoring</h1>
              <h3>Get Tutor</h3>
              <h3>Become a Tutor</h3>
              <h3>Partner With Us</h3>   
          

            
          
           
          </div>
          <div className="right">
            <h1>Contact Us</h1>
            <h2>welosefer , Giorgis Adebabay</h2>

          </div>
         
        </div>
        <hr/>
        <div className="bottom">
          <div className="left">
            <h1>MasterMinds.</h1>
            <span>Copyright © 2024 Bethel.T,Masterinds Tutorial and Training, Addis Ababa, Ethiopia</span>
          </div>
          <div className="right">
            <Link to="/https://t.me/Mastermindtutorial">
              <img src="./telegram.jfif" alt="" />
            </Link>
            <Link to="/https://www.facebook.com/profile.php?id=61564880458376">
              <img src="./facebook.jfif" alt="" />
            </Link>
            <Link to="https://wa.me/251716163853 ">
              <img src="./whatsapp.png" alt="" />
            </Link>
              <Link to=" https://youtube.com/@mastermindtutorial?si=Q12j_MmEE4PNmiuo">
              <img src="./youtube.png" alt="" />
            </Link>
            <Link to=" https://x.com/MastermindsTut?t=TQfC75OueREe0b9pPWZIjg&s=35 ">
              <img src="./xpage.png" alt="" />
            </Link>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Footer