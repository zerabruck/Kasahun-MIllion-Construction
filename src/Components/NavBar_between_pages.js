import React,{useState} from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import logo from './Images/front_logo_removed.png'
import './navbar.css'
import {Link,BrowserRouter as Router,Route,Outlet} from 'react-router-dom'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Testimonials from './Testimonials'
import Footer from './Footer'
import Contact_form from './Contact_form'
import Projects from './Projects'
import {useNavigate} from 'react-router-dom'

function NavBar_between_pages(props) {
    const [click,setClick]=useState(false)
    const handleClick=()=>setClick(!click)
    const closeHandelr=()=>setClick(false)
    const [color,setColor]=useState(false)
    const click_handler=(value)=>{
        // useNavigate(value)
        window.history.replaceState({}, document.title)
    }
    const changeColor=()=>{
        if(window.scrollY>=100){
            setColor(true)
        }else{
            setColor(false)
        } 
    }
    window.addEventListener('scroll',changeColor)
  return (
      
          <div className={color?'header header-bg':'header'}>
        <nav className='navbar'>
            <Link onClick={()=>click_handler("/")} className='logo' to="/" >
                <img src={logo} alt='logo' />

            </Link>
            <div className='hamburger' onClick={handleClick}>
                {click?(<FaTimes size={30} style={{color:'#ffffff'}} />):(<FaBars size={30} style={{color:'#ffffff'}} />)}
                  

            </div>
            <ul className={click ? 'nav-menu active':'nav-menu'}>
                <li className='nav-item'>
                    <Link to="/" exact  onClick={()=>click_handler("/")}>Home</Link>
                </li>
                
                <li className='nav-item'>
                    <Link to="/projects" exact onClick={()=>click_handler("projects")} >some of our porjects</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/contact" exact onClick={()=>click_handler("contact")} >contact</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/about" exact onClick={()=>click_handler("contact")} >about us</Link>
                </li>
                <li className='nav-item'>
                    <Link to="/services" exact onClick={()=>click_handler("contact")} >services</Link>
                </li>
                
                
            </ul>
        </nav>
    </div>
     
      
    
  )
}

export default NavBar_between_pages