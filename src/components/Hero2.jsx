import React from 'react'

const Hero2 = () => {
  return (
    <div  className='w-full bg-white'>
       <div className='grid md:grid-cols-2'>
            <div class="h-96 flex flex-col relative bg-contain bg-no-repeat justify-center items-center" style={{backgroundImage: "url('https://res.cloudinary.com/dbwqjycvh/image/upload/v1681106366/WhatsApp_Image_2023-04-10_at_10.04.41_AM_emclkl.jpg')"}}>
                <div className="absolute inset-0 bg-[#525252] opacity-30 z-10"></div>
                
            </div>
            <div class="h-96 flex flex-col relative  justify-center items-center shadow-xl">
                <h1 className="text-[#FF4500] text-center sm:text-5xl text-5xl font-SignikaNegative relative z-20">NEW ARRIVALS</h1>
                <button className="bg-transparent text-xl text-[#FF4500] font-SignikaNegative font-medium py-2 px-6 border rounded-xl border-[#FF4500] hover:bg-[#FF4500] hover:text-white transition-colors duration-300 relative z-20 mt-10">Shop Now</button>
            </div>           
        </div>       
    </div>
  )
}

export default Hero2