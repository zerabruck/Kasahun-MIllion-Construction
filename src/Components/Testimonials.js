import React from 'react'
import './Testimonial.css'
import user1 from './Images/user1.jpeg'
import user2 from './Images/user2.jpeg'
import user3 from './Images/user3.jpeg'
function Testimonials() {
  return (
    <div className='testimonials' id='testimonials'>
        <div className='container'>
            <h2>Testimonial</h2>
            <span className='line'></span>
            <div className='content'>
                <div className='card'>
                    <img src={user1} alt='user1' /> 
                    <p>it is not everyday that you come across a passionate and turstworthy finacial advisor.
                        john doe is true professional who does his work really well.Thanks john!
                    </p>
                    <p><span>john.M.J</span></p>
                    <p>Director of "finacial Times"</p>
                </div>
                <div className='card'>
                    <img src={user2} alt='user2' /> 
                    <p>in just 2 very short meetings with john he managed to find the solution
                        personally catered to my situation and expectations.Punctural,well informed andvery 
                        reliable
                    </p>
                    <p><span>carol Harper</span></p>
                    <p>Director at Risktec Solutions Ltd</p>
                </div>
                <div className='card'>
                    <img src={user3} alt='user3' /> 
                    <p>A very profeessional financial advisor, who is tru to his word. John has demonstraated a high amount of integrity in the time i have known him
                        and he is fast to respond to my concerns.
                    </p>
                    <p><span>Snow.J.R.</span></p>
                    <p>Managing Director of BPW Global</p>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Testimonials