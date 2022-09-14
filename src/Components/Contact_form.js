import React,{useEffect} from 'react'
import { AiFillPhone } from "react-icons/ai";
import {IoMdMailUnread} from "react-icons/io"
import {ImLocation} from "react-icons/im"
import "./contact_form.css"
import NavBar_between_pages from './NavBar_between_pages';
import Footer from './Footer';
function Contact_form() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
 }, []);
  return (
    <>
    <NavBar_between_pages></NavBar_between_pages>
    <div className='contact_container_header'>
                 <p className='header_small'>get in touch</p>
                 <p>contact us</p>
                 <span className='line'></span>
             </div>

             <div className='contact_container_background'>
             <div className='contact_container'>
      



          

          
      <div className='contact_form_container'>  
           <div className='contact_form_first'>
              <p><AiFillPhone></AiFillPhone> +888-8888-888</p>
              <p><IoMdMailUnread></IoMdMailUnread> kasahun-million</p>
              <a className='contact_link' target="_blank" href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJlGVGQDzCLxKblBTnKJXqQSNndZHblhNzzvKsbSFbSXTjvCpCNSxncXLlvWwxwNlfzSgKg'>
                <p><ImLocation></ImLocation> Addis,ababa</p></a>
  
            </div>
            <div className='contact_line'></div>
  
         <div className='contact_form_second'>
           
         <form>
           <p className='form_p'>your name</p>
         <div className="form-floating mb-3 contact_indivisual">
           <input type="email" className="contact_form contact_form_input" id="floatingInput" placeholder="name@example.com"/>
           {/* <label className='contact_form_text' htmlFor="floatingInput t">your name</label> */}
          </div>
          <p className='form_p'>your email</p>
  
          <div className="form-floating mb-3">
          <input type="email" className=" contact_form contact_form_input" id="floatingInput" placeholder="name@example.com"/>
          {/* <label className='contact_form_text' htmlFor="floatingInput ">Email address</label> */}
          </div>
          <p className='form_p'>the reason to contact us</p>
  
          <div className="form-floating ">
          <textarea className=" contact_form contact_form_textarea"  placeholder="Leave a comment here" id="floatingTextarea2" rows="5" cols="40" ></textarea>
          {/* <label className='contact_form_text' htmlFor="floatingTextarea2">tell me a little about your project</label> */}
          </div>
  
          <button type="submit" className="contact_button " >
              submit
                 </button>
         </form>
  
         </div>
         
  
      </div>
         
  
         
  
        </div>
     
             </div>

      <Footer></Footer>
    </>

    
  )
}

export default Contact_form