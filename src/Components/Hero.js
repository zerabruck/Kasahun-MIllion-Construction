import React from 'react'
import './hero.css'
import {Link,BrowserRouter as Router,Route,Outlet} from 'react-router-dom'
function Hero() {
  return (
    <div className='hero' id='hero'>
        <div className='content'>
            <p> call us </p>
            <p> 0911207757</p>
            {/* <p className='abrsh'> 0930777888</p> */}
            <p>we here strive for </p>
            <p> success</p>
            <Link to="/projects" exact  ><button className='button btn-ser'>
                             see our projects</button>
                            </Link>
        </div>

    </div>
  )
}

export default Hero