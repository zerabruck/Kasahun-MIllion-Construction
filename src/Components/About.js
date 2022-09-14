import React from 'react'
import './about.css'
import image from './Images/about_second.jpg'
import {Link,BrowserRouter as Router,Route,Outlet} from 'react-router-dom'

function About() {
  return (
    <div className='about' id='about'>
      <div className='header_about_page'>
        <h2>
          we cut out the middle man and supply every demand and whish that you can possibly have.  
        </h2>
      </div>
        <div className='container'>
            
            <div className='image_container'>
            <img src={image} alt='about' />
            </div>
            
            
            
            <div className='col-2'>
                <h2>about</h2>
                <span className='line'></span>
                <p>intense is an international finacial planning company with officces in 
                    multiple jurisdicions over the world . Working with interse gives me the abiliy
                    to advise internat ional expartraites living in the middle east from where i live
                    in usa
                </p>
                <p>i am jogn dow, a senior advisor for an independetly owned finacial planning company called intense</p>
                
                <Link to="/about" exact  ><button className='button'>explore more</button></Link>

            </div>


        </div>



    </div>
  )
}

export default About