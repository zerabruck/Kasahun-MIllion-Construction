import React,{useEffect} from 'react'
import Footer from './Footer'
import NavBar_between_pages from './NavBar_between_pages'
import Projects from './Projects'

function Projects_display() {
    useEffect(() => {
        window.scrollTo(0, 0);
     }, []);
  return (
    <div>
        
        <Projects></Projects>
        
    </div>
  )
}

export default Projects_display