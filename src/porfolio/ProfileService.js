import React from 'react'
import "./profileservice.css"
import {GoDeviceDesktop} from 'react-icons/go'

function ProfileService() {
  return (
    <div className='profile-servicee'>
        <div className='profile-servicee-headers'>
        <h1>my services</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem libero quae, illo accusantium aut optio doloribus similique dicta incidunt. Sed aliquam quod sapiente, velit dolor dolore omnis nulla iusto est.

        </p>
        </div>
        <div className='profile-service-holder'>
        <div className='first-service profile-service-cards'>
            <GoDeviceDesktop className='service-icons' />
            <p>web development</p>
            <p>Blog,E-Commerce</p>
        </div>
        <div className='second-service profile-service-cards'>
        <GoDeviceDesktop className='service-icons' />
            <p>ui/ux Design</p>
            <p>mobile App.Website Design</p>
        </div>
        <div className='third-service profile-service-cards'>
        <GoDeviceDesktop className='service-icons' />
            <p>sound design</p>
            <p>voice Over,Beat making</p>
        </div>
        <div className='fourth-service profile-service-cards'>
        <GoDeviceDesktop className='service-icons' />
            <p>Game desgin</p>
            <p>Character Design,Props objects</p>
        </div>
        <div className='fifth-service profile-service-cards'>
        <GoDeviceDesktop className='service-icons' />
            <p>Photography</p>
            <p>portarit, Product Photography</p>
        </div>
        <div className='sixth-service profile-service-cards'>
        <GoDeviceDesktop className='service-icons' />
            <p>Advertising</p>
            <p> ea repellendus explicabo harum maiores

            </p>
        </div>
        </div>
        
    </div>
  )
}

export default ProfileService