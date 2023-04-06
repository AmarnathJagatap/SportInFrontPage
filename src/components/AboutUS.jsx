import React from 'react'
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div name="about"  className='w-full bg-white'>
       <div className='grid md:grid-cols-2'>
            <div>  
            <div class="h-screen flex flex-col relative  justify-center items-center shadow-xl">
            <Fade left>         
              
                 <h1 className="text-[#525252] text-center sm:text-5xl text-5xl font-SignikaNegative relative z-20">ABOUT US</h1>
                <p className="w-1/2 text-[#525252] text-center mt-10 sm:text-lg text-lg font-SignikaNegative relative z-20">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                </Fade>

            </div> 
            </div>
            <div>
              <Fade right>
            <div class="h-screen flex flex-col relative  justify-center items-center">
                <img src='https://res.cloudinary.com/dbwqjycvh/image/upload/v1680512780/boyenjoy_bm53m9.jpg' className='hover:animate-pulse w-full h-screen'/>
            </div>
            </Fade> 
            </div>         
        </div>       
    </div>
  )
}

export default About