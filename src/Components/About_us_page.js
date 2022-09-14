import React from 'react'
import "./about_us_page.css"
import aim from "./Images/aim.jpg"
import goal from "./Images/goal.jpg"
import vision from "./Images/vison.jpg"

function About_us_page() {
  return (
      <>
  <div className='about_us_whole_container'>
   <div className='about_us_header_background'>
       
        <div className='about_us_header'>
            <p className='about_us_title'>a culture of thinking & makers.</p>
            {/* <p className="about_us_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odit architecto rerum neque temporibus quia quo nostrum ex! Assumenda porro saepe cum blanditiis ullam recusandae ipsam dolorum, excepturi quas optio modi obcaecati quibusdam alias quo molestias. Beatae optio minima exercitationem praesentium ab asperiores facilis fugiat unde adipisci? Laborum labore neque mollitia sunt saepe autem sit ea nobis, ipsam vel excepturi placeat, iusto cumque in voluptatibus? Odit, est unde tempora ex inventore dicta amet aut sunt reprehenderit laudantium culpa quidem, officiis incidunt similique. Omnis, tenetur nihil inventore cumque commodi quaerat neque harum similique fuga? Voluptatibus, repellendus veniam! Amet deserunt numquam doloremque.

            </p>
            <p className="about_us_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio totam, vel nobis unde quo voluptatibus, aliquam dolorem dolore voluptas dignissimos quis hic suscipit reiciendis? Blanditiis laudantium est incidunt asperiores neque dolorum magnam. Quae veniam ab maxime consequatur, fugiat ipsa omnis neque. Amet sunt ipsa explicabo tempore veniam deserunt sit veritatis earum deleniti provident laudantium necessitatibus illum laboriosam, similique minima assumenda repellendus harum iste tempora accusantium! Quasi inventore libero alias nemo sequi blanditiis cum animi, voluptatibus quod perferendis modi mollitia quo deserunt id tempore quae provident nulla consectetur sapiente? Totam et reiciendis velit, aliquam harum facere quasi accusamus voluptatem. Sint, sequi!

            </p>
            <p className="about_us_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, fugiat repellat nemo voluptates aspernatur nostrum excepturi voluptatibus neque! Rem distinctio explicabo maiores consectetur earum voluptatum quia ipsum dignissimos reprehenderit aspernatur. Officia eius iste nisi tenetur placeat quam asperiores recusandae voluptates impedit odit, eligendi atque perspiciatis ut reprehenderit at a maxime odio ipsum. Vero dicta ad animi, sequi accusantium omnis dolorem fugit sed velit itaque amet repellendus similique ipsam consequatur esse quam optio nisi architecto quos consectetur tempora ipsum ut. Distinctio tenetur quae iste atque est, maxime debitis voluptate quia fuga assumenda expedita tempora amet quos vero et totam consequatur a!

            </p> */}
        </div>
    </div>

    <div className='about_us_second_part'>
        <p className='about_us_second_part_header'>we create new ways to get inspired.</p>
        <p className='about_us_second_part_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eos culpa ipsa enim quas, corporis placeat omnis repellat reprehenderit itaque nulla. Voluptates cumque perspiciatis, mollitia nostrum maxime quis suscipit! Velit, labore odit! Officia ipsam perspiciatis, dolore in, saepe quam, est illum sint ab fugit aperiam? Enim quod fuga laborum repellat!

        </p>
    </div>
    <div className='about_us_thrid_part_1'>
        <p>we help innovate develop and pioneer.</p>
    </div>
    
    <div className='about_us_fourth_part_1'>
        <div className='about_us_fourth_part_1_image' >
            <img src={vision}></img>
            

        </div>
        <div className='about_us_fourth_part_1_text'>
            <p className='about_us_fourth_part_1_text_header'>our vison</p>
            <p className='about_us_fourth_part_1_text_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio quibusdam consequatur? Fuga commodi aliquam, perspiciatis dolorem non laudantium dolore animi quibusdam libero aliquid dignissimos molestiae. Assumenda cupiditate reprehenderit officiis nisi delectus totam fugit est amet maiores sapiente, architecto debitis ipsam itaque facere placeat natus magnam non blanditiis maxime quibusdam?</p>
        
        </div>
    </div>
    <div className='about_us_thrid_part_2'>
        <p>we design brand and product experiences for the connected world.</p>
    </div>
    <div className='about_us_fourth_part_1'>
        <div className='about_us_fourth_part_1_image' >
            <img src={aim}></img>
            

        </div>
        <div className='about_us_fourth_part_1_text_aim'>
            <p className='about_us_fourth_part_1_text_header'>our aim</p>
            <p className='about_us_fourth_part_1_text_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio quibusdam consequatur? Fuga commodi aliquam, perspiciatis dolorem non laudantium dolore animi quibusdam libero aliquid dignissimos molestiae. Assumenda cupiditate reprehenderit officiis nisi delectus totam fugit est amet maiores sapiente, architecto debitis ipsam itaque facere placeat natus magnam non blanditiis maxime quibusdam?</p>
        
        </div>
    </div>
    <div className='about_us_thrid_part_1'>
        <p>we help innovate develop and pioneer.</p>
    </div>
    <div className='about_us_fourth_part_1'>
        <div className='about_us_fourth_part_1_image' >
            <img src={goal}></img>
            

        </div>
        <div className='about_us_fourth_part_1_text_goal'>
            <p className='about_us_fourth_part_1_text_header'>our goal</p>
            <p className='about_us_fourth_part_1_text_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit optio quibusdam consequatur? Fuga commodi aliquam, perspiciatis dolorem non laudantium dolore animi quibusdam libero aliquid dignissimos molestiae. Assumenda cupiditate reprehenderit officiis nisi delectus totam fugit est amet maiores sapiente, architecto debitis ipsam itaque facere placeat natus magnam non blanditiis maxime quibusdam?</p>
        
        </div>
    </div>
    

</div>
</>
   
  )
}

export default About_us_page