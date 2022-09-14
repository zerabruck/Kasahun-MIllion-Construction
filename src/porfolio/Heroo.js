import React from 'react'
import image from '../Components/Images/group_of_workers.jpg'
import image2 from "./Image/portfolio-logo.png"
import "./heroo.css"
import {motion,AnimatePresence,AnimateSharedLayout} from "framer-motion"

function Heroo() {
  return (
    <div className='profile-projects'>

        <h1>protfolio projects</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem excepturi praesentium in sunt tenetur repellendus nam modi? Possimus cupiditate quo laborum? Architecto quos, voluptate ab libero adipisci hic! Tenetur, harum.

        </p>
        

        <div className='projects-contianer'>
            <motion.div animate={{scale:1}} whileHover={{scale:1.1}} className='first-image'>

                <img src={image} />
            </motion.div>
            <motion.div animate={{scale:1}} whileHover={{scale:1.1}} className='second-image'>
                <img src={image} />
            </motion.div>
            <motion.div animate={{scale:1}} whileHover={{scale:1.1}} className='third-image'>
                <img src={image} />
            </motion.div>
            <motion.div animate={{scale:1}} whileHover={{scale:1.1}} className='fourth-image'>
                <img src={image} />
            </motion.div>
            <motion.div animate={{scale:1}} whileHover={{scale:1.1}} className='fifth-image'>
                <img src={image} />
            </motion.div>
            <motion.div animate={{scale:1}} whileHover={{scale:1.1}} className='sixth-image'>
                <img src={image} />
            </motion.div>
            <motion.div animate={{scale:1}} whileHover={{scale:1.1}} className='seventh-image'>
                <img src={image} />
            </motion.div>


        </div>
        
        
        
    </div>
  )
}

export default Heroo