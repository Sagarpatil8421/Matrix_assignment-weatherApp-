import React from 'react'
import './card.css'
const Card = ({img,name, temp,city,date}) => {
  return (
        <div className="card">
            <div className={`name C${img}`}>
              <span>{name}</span>
            </div> 
            <div className="details">
              <div className="card-temp">
                {temp} <span>°</span>
              </div> 
              <div className="city-name">
                {city}  <br />
                <span>24/03/23</span> 
              </div>
            </div>
        </div>
   
  )
}


export default Card