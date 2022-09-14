import React,{useState,useEffect} from 'react'
import {Data} from "./Data_projects"
// import image from "./Images/services.jpg"
// import image2 from "./Images/first_project.jpg"
// import image3 from "./Images/second_project.jpg"
// import image4 from "./Images/thrid_project.jpg"
// import image5 from "./Images/fourth_project.jpg";
// import image6 form "./Images/fifth_project.jpg";
import "./Projects.css"
import {motion,AnimatePresence,AnimateSharedLayout} from "framer-motion"
import Single_project from './Single_project'
// import Navbar from './Navbar'
import Footer from './Footer'
import NavBar_between_pages from './NavBar_between_pages'
function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0);
     }, []);
    const [expand,setextpand]=useState(false)
    const [layoutId,setlayoutId]=useState(null);
    const expander=(id)=>{
        if(expand!=true){
            setlayoutId(id)
            setextpand(true)
        }
        else{
            setlayoutId(null)
            setextpand(false)
        }
        
        

    }
  return (
      <div className="apple">
          <AnimateSharedLayout type="crossfade">
         {expand?<div></div>:

         <div>
             <NavBar_between_pages></NavBar_between_pages>
             
             <div className='product_container_header'>
                 <p>some of our projects</p>
                 <span className='line'></span>
             </div>
             <div className="product_containerr">
                
              
              {Data.map((item)=>{
                let datae=item.image
                  return (
                      <motion.div animate={{scale:1}} whileHover={{scale:1.1}} className="product_card" onClick={()=>expander(item.id)} key={item.id} layoutId={item.id}>
                          <img src={datae} alt="" />
                          <p>{item.product}</p>
                          
                      </motion.div>
                  )
                  
              })}

              
          </div>
          <Footer></Footer>
          
         </div>
         
          }
    <AnimatePresence>
    {expand&& <Single_project id={layoutId} expander={expander}> </Single_project>}
    </AnimatePresence>
    </AnimateSharedLayout>
    
      </div>
    
  )
}

export default Projects