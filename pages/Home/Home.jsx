import React from 'react'
import "./home.scss"
import Feauterd from '../../src/component/Featured/Featured'
import AboutUs from '../../src/component/AboutUs/AboutUs'
import Slids from '../../src/component/slids/slids';
import Testimonial from '../../src/component/Testimonial/Testimonial';
import {tutors} from '../../data'

import Services from '../../src/component/Services/Services'
import {ServiceCard} from "../../data"
import Service from '../../src/component/Service/Service'
import Footer from '../../src/component/Footer/Footer'



const Home = () => {
  return (
    <div className='Home'>
      <Feauterd/>
      <AboutUs/>
      <hr/>
      <Slids slidesToShow={3} arrowsScroll={1}>
        {ServiceCard.map(ServiceCard=>(
          <Services key={ServiceCard.id} item={ServiceCard}/>
          ))}

          </Slids>
          
      <Service/>
            
      <Slids>
        {tutors.map(card=>(
          <Testimonial item={card} key={card.id}/>
        ))}
        </Slids>
      <Footer/>


  </div>
  

  )
}

export default Home