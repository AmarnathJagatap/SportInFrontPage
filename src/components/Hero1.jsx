import React from 'react'
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div  className='w-full bg-white'>
       <div className='grid md:grid-cols-2'>
            <Fade left>           
                <div class="h-96 flex flex-col relative bg-cover bg-no-repeat justify-center items-center" style={{backgroundImage: "url('https://res.cloudinary.com/dbwqjycvh/image/upload/v1681106366/WhatsApp_Image_2023-04-10_at_10.04.41_AM_emclkl.jpg')"}}>
                    <div className="absolute inset-0 bg-[#525252] opacity-30 z-10"></div>
                    
                </div>
            </Fade>  
              <div className="h-96 flex flex-col relative  justify-center items-center shadow-xl bg-[#6C0BA9]">
              <Fade right>
                <h1 className="text-white text-center sm:text-5xl text-5xl font-SignikaNegative relative z-20">NEW ARRIVALS</h1>
                <button className="bg-transparent text-xl text-white font-SignikaNegative font-medium py-2 px-6 border rounded-xl border-white hover:bg-white hover:text-[#6C0BA9] transition-colors duration-300 relative z-20 mt-10">Shop Now</button>
                </Fade>       
              </div> 
        </div>       
    </div>
  )
}

export default About