import React from 'react'
import "./profileabout.css"
import image from "./Image/profolio-about-name.jpg"
import logo from "./Image/portfolio-logo.png"
import sign from "./Image/sign.png"
import signiture from "./Image/signature.png"
import {FiArrowUpRight} from "react-icons/fi"
import {TiLocationOutline} from "react-icons/ti"
import {GiStarShuriken} from "react-icons/gi"

function ProfileAbout() {
  return (
    <div className='profile-whole-body-holder'>
       <div className='profile-slim-body-holder'>
        <div className='profile-upper-header'>
          <div className='profile-upper-header-logo-container'>
             <img src={signiture} /> 
          </div>
          <p>zerabruckm@gmail.com <FiArrowUpRight /></p>
        </div>
        <div className='profile-upper-part-holder'>
        <div className='profile-about-first-half'>
            <p className='profile-about-first-half-first' >
                <TiLocationOutline /> metabourani,Austraila
            </p>
            <p className='profile-about-first-half-second'>
                hello,<br />i'm <span className='profile-about-first-half-second-name'>inid harris</span>
            </p>
            
            <p className='profile-about-first-half-thrid'>
              i'm a revenue and cutomer success manager based in melbourna,Ausralia. I have unwavering passion and evergy for people and customer experince.

                
            </p>
           <div className='profile-about-first-half-fourth-fifth-sixth-container'>
           <p className='profile-about-first-half-fourth'>
              Email <FiArrowUpRight />
            </p>
            <p className='profile-about-first-half-fifth'>Linkedin <FiArrowUpRight /></p>
            <p className='profile-about-first-half-sixth'>
              Resume <FiArrowUpRight />
            </p>
           </div>
        </div>

        <div  className='profile-about-second-half'>
          <img src={image} />

          
        </div>
        </div>

        <div className='profile-about-bottom'>
          <p>
            A little about me
          </p>

          <p>
            Thanks for stopping by.For the past 6 years,i've excelled in cutomer succes teams at some of Austraila's top hotels.Recently,
            I was part of the founding team of Meboume's rand new.Hilton
            Hotel, where i cuttentely supervise revenue and reservations operations.
          </p>

          <p>
            I have and unwavering passion and energy for people. for people which has proven a valuable asset in my career.
             I beleve the best customer experinces come from genuine enpathy.
             while always maintaining a friendly. postive and energetic character. 
          </p>
          <div className='profolio-bottom-signiture'>
            <img src={sign} />
          </div>


        </div>



    </div>
    </div>
    
   
  )
}

export default ProfileAbout