import React from 'react'
import image from "./Images/about_2.jpg"
import image2 from "./Images/hero.jpg"
import image3 from "./Images/services.jpg"
import "./demo.css"
function Demo() {
  return (
    <div className='product_container'>
        <div className='singel_IMAGE'>
        <img className='image_' src={image} />

        </div>
         
        <div className='singel_IMAGE'>
        <img className='image_' src={image3} />

        </div>
        <div className='singel_IMAGE'>
        <img className='image_' src={image2} />

        </div>
    </div>
  )
}

export default Demo