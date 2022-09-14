import React,{useState} from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import logo from './Images/logo.png'
import './navbar.css'
import {Link} from 'react-scroll'
import {Link as LInk,Outlet} from "react-router-dom"

function Navbar() {
    const [click,setClick]=useState(false)
    const handleClick=()=>setClick(!click)
    const closeHandelr=()=>setClick(false)
    const [color,setColor]=useState(false)
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
            <Link className='logo' to="hero" spy={true} smooth={true} offset={0} duration={500}>
                <img src={logo} alt='logo' />

            </Link>
            <div className='hamburger' onClick={handleClick}>
                {click?(<FaTimes size={30} style={{color:'#ffffff'}} />):(<FaBars size={30} style={{color:'#ffffff'}} />)}
                 

            </div>
            <ul className={click ? 'nav-menu active':'nav-menu'}>
                <li className='nav-item'>
                    <LInk to="/"  >Home</LInk>
                </li>
                <li className='nav-item'>
                    <Link to="about" spy={true} smooth={true} offset={-40} duration={500}  onClick={closeHandelr} >about us</Link>
                </li>
                <li className='nav-item'>
                    <LInk to="/projects"  >some of our porjects</LInk>
                </li>
                <li className='nav-item'>
                    <Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500}  onClick={closeHandelr} >testimonials</Link>
                </li>
                <li className='nav-item'>
                    <Link to="services" spy={true} smooth={true} offset={-100} duration={500}  onClick={closeHandelr} >services</Link>
                </li>
                <li className='nav-item'>
                    <LInk to="/contact"  >contact</LInk>
                </li>
                
            </ul>
        </nav>
        
    </div>
  )
}

export default Navbar