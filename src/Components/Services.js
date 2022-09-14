import React from 'react'
import "./services.css"
import Fade from "react-reveal/Fade"
import image from "./Images/services.jpg"
import image1 from "./Images/services_first.jpg"
import image2 from "./Images/about-us-inbetween-1.jpg"
import image3 from "./Images/service_third.jpg"
import image4 from "./Images/service-four.jpg"
import {Link,BrowserRouter as Router,Route,Outlet} from 'react-router-dom'
function Services() {
  return (
   <div className='services-body'>
     <div id='services'>
        <div className='service-header'>
            <h1>Services</h1>
            <span className='line'></span>
        </div>
        <Fade left>
        <div className='service-first' >
        <div className='container-first'>
            
            <div className='service-first_image_container'>
            <img src={image1} alt='services' />
            </div>
        
            
                
            
            <div className='first-col-2'>
                <h2>Building</h2>
                
                <p>intense is an international finacial planning company with officces in 
                    multiple jurisdicions over the world . Working with interse gives me the abiliy
                    to advise internat ional expartraites living in the middle east from where i live
                    in usa
                </p>
                <Link to="/contact" exact  ><button className='button btn-ser'>
                            contact us </button>
                            </Link>
               

            </div>


        </div>
        



    </div>

    
    </Fade>

    <Fade right>
        <div className='service-first' >
        <div className='container-first container-second'>
            
            
        
            
                
            
            <div className='first-col-2'>
                <h2>Redesign</h2>
                
                <p>intense is an international finacial planning company with officces in 
                    multiple jurisdicions over the world . Working with interse gives me the abiliy
                    to advise internat ional expartraites living in the middle east from where i live
                    in usa
                </p>
                <Link to="/contact" exact  ><button className='button btn-ser'>
                            contact us </button>
                            </Link>
               

            </div>

            <div className='service-first_image_container'>
            <img src={image2} alt='services' />
            </div>


        </div>
        



    </div>

    
    </Fade>


    <Fade left>
        <div className='service-first' >
        <div className='container-first'>
            
            <div className='service-first_image_container'>
            <img src={image3} alt='services' />
            </div>
        
            
                
            
            <div className='first-col-2'>
                <h2>Construction</h2>
                
                <p>intense is an international finacial planning company with officces in 
                    multiple jurisdicions over the world . Working with interse gives me the abiliy
                    to advise internat ional expartraites living in the middle east from where i live
                    in usa
                </p>
                <Link to="/contact" exact  ><button className='button btn-ser'>
                            contact us </button>
                            </Link>
               

            </div>


        </div>
        



    </div>

    
    </Fade>

    <Fade right>
        <div className='service-first' >
        <div className='container-first container-second'>
            
            
        
            
                
            
            <div className='first-col-2'>
                <h2>Heading</h2>
                
                <p>intense is an international finacial planning company with officces in 
                    multiple jurisdicions over the world . Working with interse gives me the abiliy
                    to advise internat ional expartraites living in the middle east from where i live
                    in usa
                </p>
                <Link to="/contact" exact  ><button className='button btn-ser'>
                            contact us </button>
                            </Link>
               

            </div>

            <div className='service-first_image_container'>
            <img src={image4} alt='services' />
            </div>


        </div>
        



    </div>

    
    </Fade>

    

    

     
    </div>
   </div>
  )
}

export default Services