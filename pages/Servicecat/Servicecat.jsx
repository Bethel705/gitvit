import React from 'react';
import "./Servicecat.scss";
import {ServiceCard} from "../../data";
import Services from '../../src/component/Services/Services';

function Servicecat() {
  return (
    <div className='Service'>
        <div className="container">
            <span className='master'>Master minds Tutorial Services</span>
            <h1>School Subjects</h1>
            <p>Get the boost you need to achive acadamiv sucsess</p>
            <div className="menu">
                <div className="left">
                    <span>Budget</span>
                    <input type="text" placeholder='min price'/>
                    <input type="text" placeholder='min price'/>
                    <button>Apply</button>
                </div>
               
                
            </div>
            <div className="cards">
                    {ServiceCard.map(ServiceCard=>(
                        <Services key={ServiceCard.id} item={ServiceCard}/>
                    ))}

                </div>
        </div>
        
    </div>
  )
}

export default Servicecat