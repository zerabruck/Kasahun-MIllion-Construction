import React from 'react'
import Footer from './Footer'
import NavBar_between_pages from './NavBar_between_pages'
import Services_page from './Services_page'
import { useEffect } from 'react'

function Services_display() {
  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);
  return (
    <div>
        <NavBar_between_pages></NavBar_between_pages>
        <Services_page></Services_page>
        <Footer></Footer>
    </div>
  )
}

export default Services_display