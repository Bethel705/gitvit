import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import {Link, useLocation} from 'react-router-dom'
import {Link as LinkScroll } from "react-scroll"


const Navbar = () => {
    
     const [Scroll,setScroll] = useState(false)
     const [Clicked,setClicked] = useState(false)
     const [menuOpen, setMenuOpen] = useState(true)
     const {pathname} = useLocation()
     const isScroll = ()=>{
      window.scrollY > 0 ? setScroll(true) : setScroll(false)
    
    }
      useEffect(()=>{
        window.addEventListener("scroll", isScroll);
    
        return ()=>{
          window.removeEventListener("scroll", isScroll);
        };
    
      },[]);
   
      
      const Registered= {
       
        isRegistered:false 
        
        
      }
    
    
  return (
  <nav className={Scroll || pathname !="/" ?"Scroll" :""}>
    <Link to="/.">
        <div className="logo">
          <span className='text'>MasterMinds.</span>
          <span className='dot'>Tutorial and Training</span>

        </div>
        
        </Link>
    <div className='menu' onClick={()=>{
      setMenuOpen(!menuOpen);
    }}>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <ul className={menuOpen ? "open" : ""}>
      <li>
      <LinkScroll 
      to="Feauterd"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-130}
      duration={500}
>
Home
</LinkScroll>

      </li>
      <li>
      <LinkScroll 
      to="AboutUs"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-130}
      duration={500}
>
About Us
</LinkScroll>

      </li>
      <li>
      <LinkScroll 
      to="Services"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-130}
      duration={500}
>
Service
</LinkScroll>

      </li>
      <li>
      <LinkScroll 
      to="Testimonial"
      spy={true}
      smooth={true}
      hashSpy={true}
      duration={500}
>
Testimonial
</LinkScroll>
      </li>
      <li>
      <LinkScroll 
      to="Footer"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}
>
Contact
</LinkScroll>

      </li>
      <li>
      <Link to={"/Register"}>{!Registered?.isRegistered &&
      <button onClick={()=>{
        setClicked(!Clicked);
      }}
      className={Clicked ?"Clicked" :""}
      >
        join</button>
      }</Link>
      
        
      </li>
      <li>
      {Registered?.isRegistered && (
            <div className='user' onClick={()=>setOpen(!open)}>
              <img src="ayda.jpg" alt="" />
              {open && <div className="options">
                {Registered?.isRegistered && (
                  <>
                  <Link to="/Register">My subscription</Link>
                 
                  </>
                )};

                
  

              </div>}
            </div>
          )}

      </li>
    </ul>


    </nav>
   
  )
}

export default Navbar