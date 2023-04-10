import React from 'react'
import Bounce from 'react-reveal/Bounce';

const Services = () => {
  return (
    <div className='w-full'>
       <div className='grid md:grid-cols-3'>
            <div>   
              <Bounce bottom duration={1500}>     
                  <div class="h-96 flex flex-col relative bg-cover bg-cover hover:animate-pulse bg-no-repeat justify-center items-center">
                  <img src='https://res.cloudinary.com/dbwqjycvh/image/upload/v1681106373/WhatsApp_Image_2023-04-10_at_10.04.39_AM_atkl2c.jpg' className='hover:animate-pulse w-full h-96'/>
                  <h1 className="absolute text-white text-center sm:text-5xl text-5xl font-SignikaNegative opacity-0 hover:opacity-100  z-20 top-0 left-0 right-0 bottom-0 flex justify-center hover:animate-pulse items-center">GAMER BIKE</h1>                                    
                  </div>
              </Bounce>
            </div>
            

           
            <div>   
            <Bounce bottom duration={1900}>     
                  <div class="h-96 flex flex-col relative bg-cover bg-cover hover:animate-pulse bg-no-repeat justify-center items-center">
                  <img src='https://res.cloudinary.com/dbwqjycvh/image/upload/v1681106362/WhatsApp_Image_2023-04-10_at_10.04.41_AM_1_m7maac.jpg' className='hover:animate-pulse w-full h-96'/>
                  <h1 className="absolute text-white text-center sm:text-5xl text-5xl font-SignikaNegative opacity-0 hover:opacity-100  z-20 top-0 left-0 right-0 bottom-0 flex justify-center hover:animate-pulse items-center">GAMER BIKE</h1>                                    
                  </div>
              </Bounce>
            </div>
            <div>   
            <Bounce bottom duration={1700}>    
                  <div class="h-96 flex flex-col relative bg-cover bg-cover hover:animate-pulse bg-no-repeat justify-center items-center">
                  <img src='https://res.cloudinary.com/dbwqjycvh/image/upload/v1681106371/WhatsApp_Image_2023-04-10_at_10.04.40_AM_2_ehxaot.jpg' className='hover:animate-pulse w-full h-96'/>
                  <h1 className="absolute text-white text-center sm:text-5xl text-5xl font-SignikaNegative opacity-0 hover:opacity-100  z-20 top-0 left-0 right-0 bottom-0 flex justify-center hover:animate-pulse items-center">GAMER BIKE</h1>                                    
                  </div>
              </Bounce>
            </div>
            
        </div>       
    </div>
  )
}

export default Services