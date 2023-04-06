import React from 'react'
import Bounce from 'react-reveal/Bounce';

const Services = () => {
  return (
    <div className='w-full'>
       <div className='grid md:grid-cols-3'>
            <div>   
              <Bounce bottom duration={1500}>     
                  <div class="h-96 flex flex-col relative bg-cover bg-cover hover:animate-pulse bg-no-repeat justify-center items-center">
                  <img src='https://res.cloudinary.com/dbwqjycvh/image/upload/v1680512771/carImage_gdebtg.jpg' className='hover:animate-pulse w-full h-96'/>
                  <h1 className="absolute text-white text-center sm:text-5xl text-5xl font-SignikaNegative opacity-0 hover:opacity-100  z-20 top-0 left-0 right-0 bottom-0 flex justify-center hover:animate-pulse items-center">GAMER BIKE</h1>                                    
                  </div>
              </Bounce>
            </div>
            

            <div>   
            <Bounce bottom duration={1700}>    
                  <div class="h-96 flex flex-col relative bg-cover bg-cover hover:animate-pulse bg-no-repeat justify-center items-center">
                  <img src='https://res.cloudinary.com/dbwqjycvh/image/upload/v1680512787/AnimateRace_jkzogd.jpg' className='hover:animate-pulse w-full h-96'/>
                  <h1 className="absolute text-white text-center sm:text-5xl text-5xl font-SignikaNegative opacity-0 hover:opacity-100  z-20 top-0 left-0 right-0 bottom-0 flex justify-center hover:animate-pulse items-center">GAMER BIKE</h1>                                    
                  </div>
              </Bounce>
            </div>
            
            <div>   
            <Bounce bottom duration={1900}>     
                  <div class="h-96 flex flex-col relative bg-cover bg-cover hover:animate-pulse bg-no-repeat justify-center items-center">
                  <img src='https://img.freepik.com/free-photo/f1-racing-24-hours-le-mans-render-3d-illustration_654080-332.jpg?w=826&t=st=1680513766~exp=1680514366~hmac=7e9feda31ba1bb7bf7a8c4b54929d208179b81248b9d9a4aa763d61871f8a4fe' className='hover:animate-pulse w-full h-96'/>
                  <h1 className="absolute text-white text-center sm:text-5xl text-5xl font-SignikaNegative opacity-0 hover:opacity-100  z-20 top-0 left-0 right-0 bottom-0 flex justify-center hover:animate-pulse items-center">GAMER BIKE</h1>                                    
                  </div>
              </Bounce>
            </div>
        </div>       
    </div>
  )
}

export default Services