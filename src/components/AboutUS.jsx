import React from 'react'
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div name="about"  className='w-full bg-white'>
       <div className='grid md:grid-cols-2'>
       <div className="block md:hidden">
              <Fade right>
            <div class="h-screen flex flex-col relative  justify-center items-center">
                <img src='https://res.cloudinary.com/dbwqjycvh/image/upload/v1680512780/boyenjoy_bm53m9.jpg' className='hover:animate-pulse w-full'/>
            </div>
            </Fade> 
            </div>    
            <div>  
            <div class="flex flex-col relative  justify-center items-center my-10">
            <Fade left>         
              
                 <h1 className="text-[#525252] text-center sm:text-5xl text-5xl font-SignikaNegative relative">What We Do</h1>
                <p className="text-[#525252] mx-4 text-justify mt-2 sm:text-lg text-lg font-SignikaNegative relative">At Sportin Leisure, we specialize in creating exceptional leisure and entertainment destinations for our clients. We understand the importance of understanding our clients' needs, which is why we work closely with them to understand their vision, project brief, and ideal budget. We also take into consideration the target clientele, project feasibility, and site analysis to cater to the demographic.
                </p>
                <p className="text-[#525252] mx-4 text-justify mt-2 sm:text-lg text-lg font-SignikaNegative relative">
We create and ideate by focusing on brand value, master planning, conceptualization, themed ambiances, schematic and detailed design. Our aim is to realize the creation by providing design supervision, project management, commissioning, pre-opening, and soft launch services.</p>
<p className="text-[#525252] text-justify mt-2 mx-4 sm:text-lg text-lg font-SignikaNegative relative">We provide post-launch support, including operations management, revenue analysis, marketing and promotion, and maximizing revenues. Our goal is to ensure that our clients' leisure facilities are not just operational but successful in the long term.</p>
                </Fade>

            </div> 
            </div>
            <div className="hidden md:block">
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
