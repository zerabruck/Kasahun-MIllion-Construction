import React from 'react'
import "./services_page.css"
import first from "./Images/service_1.jpg"
function Services_page() {
  return ( 
  <>
  <div className='services_hader_backgournd'>
      <p>our service </p>
      <span className='line'></span>
  </div>


   <div className='services_whole_card_container'>
   <div className='services_holder'>
        <div className='services_card_holder'>
            <div className='services_card_image_holder'>
                <img src={first}></img>
            </div>
            <div className='services_card_text_holder'>
                <p className='services_card_text_holder_header'>white deer in the snow</p>
                <p className='services_card_text_holder_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur reprehenderit optio saepe nam voluptas, harum iste dicta et ratione quis commodi explicabo voluptates deserunt, eligendi architecto officia! Laudantium, illo eaque.

                </p>
            </div>
        </div>
       
        <div className='services_card_holder_bigger bigger'>
            <div className='services_card_image_holder'>
                <img  className='services_card_image_holder_bigger' src={first}></img>
            </div>
            <div className='services_card_text_holder'>
                <p className='services_card_text_holder_header'>white deer in the snow</p>
                <p className='services_card_text_holder_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur reprehenderit optio saepe nam voluptas, harum iste dicta et ratione quis commodi explicabo voluptates deserunt, eligendi architecto officia! Laudantium, illo eaque.

                </p>
            </div>
        </div>
        <div className='services_card_holder card_dissapire'>
            <div className='services_card_image_holder'>
                <img src={first}></img>
            </div>
            <div className='services_card_text_holder'>
                <p className='services_card_text_holder_header'>white deer in the snow</p>
                <p className='services_card_text_holder_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur reprehenderit optio saepe nam voluptas, harum iste dicta et ratione quis commodi explicabo voluptates deserunt, eligendi architecto officia! Laudantium, illo eaque.

                </p>
            </div>
        </div>
    </div>
    <div className='services_holder'>
        <div className='services_card_holder'>
            <div className='services_card_image_holder'>
                <img src={first}></img>
            </div>
            <div className='services_card_text_holder'>
                <p className='services_card_text_holder_header'>white deer in the snow</p>
                <p className='services_card_text_holder_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur reprehenderit optio saepe nam voluptas, harum iste dicta et ratione quis commodi explicabo voluptates deserunt, eligendi architecto officia! Laudantium, illo eaque.

                </p>
            </div>
        </div>
        <div className='services_card_holder_middle'>
            <div className='services_card_image_holder'>
                <img src={first}></img>
            </div>
            <div className='services_card_text_holder'>
                <p className='services_card_text_holder_header'>white deer in the snow</p>
                <p className='services_card_text_holder_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur reprehenderit optio saepe nam voluptas, harum iste dicta et ratione quis commodi explicabo voluptates deserunt, eligendi architecto officia! Laudantium, illo eaque.

                </p>
            </div>
        </div>
       
        
        <div className='services_card_holder card_dissapire'>
            <div className='services_card_image_holder'>
                <img src={first}></img>
            </div>
            <div className='services_card_text_holder'>
                <p className='services_card_text_holder_header'>white deer in the snow</p>
                <p className='services_card_text_holder_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur reprehenderit optio saepe nam voluptas, harum iste dicta et ratione quis commodi explicabo voluptates deserunt, eligendi architecto officia! Laudantium, illo eaque.

                </p>
            </div>
        </div>
    </div>
    

   </div>

  

  </>
    
  )
}

export default Services_page