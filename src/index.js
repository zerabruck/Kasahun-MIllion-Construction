import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Contact_form from './Components/Contact_form';
import Projects from './Components/Projects';
import Projects_display from './Components/Projects_display';
import About_us_diplay from './Components/About_us_diplay';
import Services_display from './Components/Services_display';
import Heroo from './porfolio/Heroo';
import ProfileService from './porfolio/ProfileService';
import ProfileAbout from './porfolio/ProfileAbout';
import PortfolioPage from './porfolio/PortfolioPage';
import ProfileContact from './porfolio/ProfileContact';

// import your route components too
// import { Redirect } from 'react-router-dom';

{/* <Route path='/redirect-page' element={ <Redirect to="/error-page" /> }/> */}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="contact" element={<Contact_form />} />
      <Route path="projects" element={<Projects_display />} />
      <Route path="about" element={<About_us_diplay />} />
      <Route path="services" element={<Services_display />} />

      
       <Route index element={<ProfileContact/>} />
     
     {/* <Route index element={<Contact_form />} /> */}
        
        {/* <Route path="projects/contact" element={<Contact_form />} /> */}
           
        {/* <Route path="projects/contact" element={<Contact_form />} /> */}
          
          
       
      
    </Routes>
  </BrowserRouter>
);






// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


