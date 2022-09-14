import React from 'react'
import './footer.css'
import {Link,BrowserRouter as Router,Route,Outlet} from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <ul>
                <div className='nav-item-holder-one'>
                <li className='nav-item'>
                    <Link to="/" exact  >Home</Link>
                </li>
                
                <li className='nav-item'>
                    <Link to="/projects" exact  >some of our porjects</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/contact" exact>contact</Link>
                </li>
                </div>
            
                <div className='nav-item-holder-two'>
                <li className='nav-item'>
                    <Link to="/about" exact >about us</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/services" exact  >services</Link>
                </li>
                </div>
                
            </ul>
            <div className='bottom'>
                <span className='line'></span>
                <p>2020 Exceute,inc allright reserve</p>
            </div>
        </div>

    </div>
  )
}

export default Footer