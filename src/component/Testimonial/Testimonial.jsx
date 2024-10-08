import React from 'react'
import "./Testimonial.scss"
import {tutors} from "../../../data"

const Testimonial = () => {
  return (
    <section className='Testimonial'>
        <div className="title">
            <h1>Testimonial </h1>
            <p>What are ciliants saying.</p>
        </div>
        <div className="slider-container">
            {tutors.map((tutors)=>( 
                <div key={tutors.id} className='tes'>
                    <img src={tutors.img} className='reviwe_img' alt="" />
                    <div className="content">
                        <p className="text">{tutors.text}</p>
                        <div className="info">
                            <p className="user">{tutors.name}</p>
                            <div className="rating">
                                <span className='star'>&#9733;</span>
                                <span className='star'>&#9733;</span>
                                <span className='star'>&#9733;</span>
                                <span className='star'>&#9733;</span>
                                <span className='star'>&#9733;</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            ))}

        </div>
    </section>
  )
}

export default Testimonial