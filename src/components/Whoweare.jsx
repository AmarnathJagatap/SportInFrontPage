import React from 'react'
import Fade from 'react-reveal/Fade';

const Whoweare = () => {
  return (
    <div name="about"  className='w-full bg-white'>
       <div className='grid md:grid-cols-2'>
            
            <div>
              <Fade right>
            <div class="h-screen flex flex-col relative justify-center items-center">
                <img src='https://res.cloudinary.com/dbwqjycvh/image/upload/v1681052716/funny-illustration-3d-cartoon-backpacker_183364-80286_mqfvqr.jpg' className='hover:animate-pulse justify-center  w-full'/>
            </div>
            </Fade> 
            </div> 
            <div>  
            <div class="h-screen flex flex-col relative  justify-center items-center shadow-xl">
            <Fade left>         
              
                 <h1 className="text-[#525252] text-center sm:text-5xl text-5xl font-SignikaNegative relative z-20">Who We Are?</h1>
                <p className="mx-4 text-[#525252] text-justify mt-10 sm:text-lg text-lg font-SignikaNegative relative z-20">Sportin Leisure is a leading leisure and entertainment design firm with a proven track record of creating high-quality indoor entertainment facilities, competitive socializing spaces, and visitor attractions across 13 countries. Our innovative designs are backed by a strong understanding of market demographics, project dynamics, and business feasibility, allowing us to create unique and operationally efficient destinations that set themselves apart from the competition. We are committed to meeting the creative and commercial aspirations of our clients and delivering exceptional leisure experiences.
                </p>
                
                </Fade>

            </div> 
            </div>        
        </div>       
    </div>
  )
}

export default Whoweare