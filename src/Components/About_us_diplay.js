import React from 'react'
import About_us_page from './About_us_page'
import Footer from './Footer'
import NavBar_between_pages from './NavBar_between_pages'
import { useEffect } from 'react'

function About_us_diplay() {
  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);
  return (
    <div>
        <NavBar_between_pages></NavBar_between_pages>
        <About_us_page></About_us_page>
        <Footer></Footer>
    </div>
  )
}

export default About_us_diplay