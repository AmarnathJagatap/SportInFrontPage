import React from 'react'

const Services = () => {
  return (
    <div className='w-full'>
       <div className='grid md:grid-cols-3'>
            <div class="h-96 flex flex-col relative bg-cover bg-cover hover:animate-pulse bg-no-repeat justify-center items-center" style={{backgroundImage: "url('https://res.cloudinary.com/dbwqjycvh/image/upload/v1680512771/carImage_gdebtg.jpg')"}}>
                <div className="absolute inset-0 bg-[#525252] opacity-30 z-10"></div>
                <h1 className="text-white text-center sm:text-5xl text-5xl font-SignikaNegative opacity-0 hover:opacity-100 relative z-20">GAMER BIKE</h1>
                                
            </div>
            <div class="h-96 flex flex-col relative bg-cover hover:animate-pulse bg-no-repeat justify-center items-center" style={{backgroundImage: "url('https://res.cloudinary.com/dbwqjycvh/image/upload/v1680512787/AnimateRace_jkzogd.jpg')"}}>
                <div className="absolute inset-0 bg-[#525252] opacity-30 z-10"></div>
                <h1 className="text-white text-center sm:text-5xl text-5xl font-SignikaNegative opacity-0 hover:opacity-100 relative z-20">HATER BIKE</h1>
                
            </div>
            <div class="h-96 flex flex-col relative bg-cover hover:animate-pulse bg-no-repeat justify-center items-center" style={{backgroundImage: "url('https://img.freepik.com/free-photo/f1-racing-24-hours-le-mans-render-3d-illustration_654080-332.jpg?w=826&t=st=1680513766~exp=1680514366~hmac=7e9feda31ba1bb7bf7a8c4b54929d208179b81248b9d9a4aa763d61871f8a4fe')"}}>
                <div className="absolute inset-0 bg-[#525252] opacity-30 z-10"></div>
                <h1 className="text-white text-center sm:text-5xl text-5xl font-SignikaNegative opacity-0 hover:opacity-100 relative z-20">LOVELY CAR</h1>
                
            </div>
        </div>       
    </div>
  )
}

export default Services