import React from 'react'

const About = () => {
  return (
    <div name="about"  className='w-full bg-white'>
       <div className='grid md:grid-cols-2'>
            
            <div class="h-screen flex flex-col relative  justify-center items-center shadow-xl">
                 <h1 className="text-[#525252] text-center sm:text-5xl text-5xl font-SignikaNegative relative z-20">ABOUT US</h1>
                <p className="w-1/2 text-[#525252] text-center mt-10 sm:text-lg text-lg font-SignikaNegative relative z-20">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            </div> 
            <div class="h-screen flex flex-col relative bg-contain bg-no-repeat justify-center items-center" style={{backgroundImage: "url('https://res.cloudinary.com/dbwqjycvh/image/upload/v1680512780/boyenjoy_bm53m9.jpg')"}}>
                <div className="absolute inset-0 bg-[#525252] opacity-30 z-10"></div>                
            </div>          
        </div>       
    </div>
  )
}

export default About