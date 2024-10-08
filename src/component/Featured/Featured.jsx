import React from 'react'
import "./Featured.scss"
import pic from '../../../public/baby.png'
const Feauterd = () => {
  return (
    <div className='Feauterd'>
      <div className="container">
        <div className="left">
          <h1>
          "Academic Excellence through Personalized Coaching"
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./image/search.png" alt="" />
              <input type="text" placeholder='search for better coach'/>

            </div>
            <button>Search</button>

          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Tutorial service</button>
            <button>International Language </button>
            <button>Psycological Tutor</button>
            <button>Regional Exam</button>
            <button>National Exam</button>
          
          </div>
        </div>
        <div className="right">
          <img src={pic} alt="" />
        </div>
       
         </div>
         
         </div>
  )
}

export default Feauterd