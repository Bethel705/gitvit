import React from 'react'
import "./Slids.scss"
import Slider from 'infinite-react-carousel';


const Slids = ({children,slidesToShow,arrowsScroll}) => {
  return (
    <div className='Slids'>
      <div className="container">
      <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
        {children}
  </Slider>

       </div>
    </div>
  )
}

export default Slids
