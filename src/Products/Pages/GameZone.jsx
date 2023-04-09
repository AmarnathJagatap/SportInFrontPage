import React from 'react'
import Navbar1 from '../../components/Navbar1'
import Footer from '../../components/Footer'
const GameZone = () => {
    
  return (
    <>
    <Navbar1/>
    <div name='carracing' className='w-full pt-28 py-10 bg-white'>
        <div className='flex flex-col items-center max-w-[1240px] mx-auto'>
        <h1 className='md:text-4xl sm:text-3xl text-center font-Rubik text-black text-2xl font-bold py-2'>Game Zone</h1>

              <img src='https://res.cloudinary.com/dbwqjycvh/image/upload/v1681065073/realistic-coming-soon-background_52683-59078_qko5gn.jpg' className='my-10 rounded-lg hover:animate-pulse w-[400px] h-[400px]'/>
               <p className="text-lg text-center font-SignikaNegative">At SportIn we have built state of the art tool to help game zone owners build and conceptualize their game zones.</p>
               
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default GameZone