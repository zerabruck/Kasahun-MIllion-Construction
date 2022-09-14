import React from 'react'
import  {Data} from "./Data_projects"
import image from "./Images/services.jpg"
import {RiArrowGoBackFill} from "react-icons/ri"
import "./single_project.css"
import {motion,AnimatePresence,AnimateSharedLayout} from "framer-motion"
import {Link,BrowserRouter as Router,Route,Outlet} from 'react-router-dom'
function Single_project({id,expander}) {
    const phone=Data.find((item)=>item.id===parseInt(id));
  return (
    <motion.div key={id} className="expanded_card" layoutId={id}>
        <p onClick={expander} className='expanded_back_icon'>
            Back
                <RiArrowGoBackFill></RiArrowGoBackFill>
            </p>
        
        <div className='expanded_element_container'>
        <div className='expanded_image'>   
        
            <div className='expanded_image_container'>
            <img src={phone.image} alt="poduct"></img>
            </div>
         
            
        </div>
        <div className='expanded_text'>
            <div className='expanded_text_content'>
                <p className='expanded_text_header'>{phone.product}</p>
                <span className='line'></span>
                <p className='expanded_text_details'>{phone.detals}</p>
                <div className=' button_expanded'>
                    
                        
                        <Link to="/contact" exact  ><button className='button btn-ser'>
                            contact </button>
                            </Link>
                        
                
                
                </div>
            </div>
        </div>
        </div>
        
    </motion.div>
  )
}

export default Single_project