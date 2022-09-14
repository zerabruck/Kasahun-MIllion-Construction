import React,{useEffect} from 'react'
import About from './Components/About';
import Contact_form from './Components/Contact_form';
import Demo from './Components/Demo';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Map_container from './Components/Map_container';
import Navbar from './Components/Navbar';
import NavBar_between_pages from './Components/NavBar_between_pages';
import Projects from './Components/Projects';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
import {Link,BrowserRouter as Router,Switch,Route,} from 'react-router-dom'
import About_us_page from './Components/About_us_page';
import Services_page from './Components/Services_page';


function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
 }, []);
 
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <NavBar_between_pages></NavBar_between_pages>
      
      <Hero></Hero>
      <About></About>
      <Services></Services>
      
      <Testimonials></Testimonials>
      <Footer></Footer>
      
      

      
      
      
    </div>
  );
}

export default App;
