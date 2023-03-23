import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="heading">WEATHERAPP</div>
        <div className="links">
            <ul>
                <li><a href="#"> Home</a></li>
                <li><a href="#"> Cities</a></li>
                <li><a href="#"> News</a></li>
            </ul>
            <ul>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">FAQs</a></li>
                
            </ul>
        </div>
    </footer>
  )
}

export default Footer