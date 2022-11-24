import React from 'react'
import "./profilecontact.css"
import {ImLocation} from "react-icons/im"
import {FaPhoneAlt} from "react-icons/fa"
import {BsFillClockFill} from "react-icons/bs"

function ProfileContact() {
  return (
    <div className='profile-contact-whole-body'>
        <div className='profile-contact-upper-container'>
            <p className='profile-contact-upper-header'>get in touch!</p>
            <p className='profile-contact-upper-discription'>we are looking forward to start a project with you</p>
        
        </div>
        <div className='profile-contact-outer-holder'>
            <div className='profile-contact-inner-holder'>
               <div className='profile-contact-first-half'>
               <div className='profile-contact-first-half-sections'>
               <div className='profile-contact-icon-holder'><ImLocation/></div>
                
                <p> 121 Rock Street,21 Avenue,New York,<br /> NY 92103-9000</p>
               </div>
               <div className='profile-contact-first-half-sections'>
               <div className='profile-contact-icon-holder'><FaPhoneAlt /></div>
               
               <p>1(234)56-891</p>
               <p>1(234)56-891</p>
               </div>
               <div className='profile-contact-first-half-sections'>
               <div className='profile-contact-icon-holder'><BsFillClockFill/></div>
               
               <p>Mon - Fri....10am-8pm</p>
               <p>Sat,Sun .....Closed</p>
               </div>
               </div>
               <div className='profile-contact-second-half'>
                
                    <input type='text' placeholder='Enter your Name' />
                    <input type='text' placeholder='Enter your valid email adress' />
                    <textarea placeholder='Enter your message' />
                    <button>submit</button>
                
               </div>
            </div>
        </div>

    </div>
  )
}

export default ProfileContact