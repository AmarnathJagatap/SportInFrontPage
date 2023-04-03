import React from 'react'

const About = () => {
  return (
    <div  className='w-full bg-white'>
       <div className='grid md:grid-cols-2'>
            <div class="h-96 flex flex-col relative bg-cover bg-no-repeat justify-center items-center" style={{backgroundImage: "url('https://img.freepik.com/free-photo/gamification-3d-rendering-concept_23-2149484774.jpg?w=826&t=st=1680511645~exp=1680512245~hmac=f19276fa660444eb93e61383c5b72b5f544d9a1020a439d077a89f5a960a1df9')"}}>
                <div className="absolute inset-0 bg-[#525252] opacity-30 z-10"></div>
                
            </div>
            <div class="h-96 flex flex-col relative  justify-center items-center shadow-xl bg-[#6C0BA9]">
                <h1 className="text-white text-center sm:text-5xl text-5xl font-LibreBaskerville relative z-20">NEW ARRIVALS</h1>
                <button className="bg-transparent text-xl text-white font-LibreBaskerville font-medium py-2 px-6 border rounded-xl border-white hover:bg-white hover:text-[#6C0BA9] transition-colors duration-300 relative z-20 mt-10">Shop Now</button>
            </div>           
        </div>       
    </div>
  )
}

export default About