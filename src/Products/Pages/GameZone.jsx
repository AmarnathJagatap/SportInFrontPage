import React from 'react'
import Navbar1 from '../../components/Navbar1'
import Footer from '../../components/Footer'
const GameZone = () => {
    
  return (
    <>
    <Navbar1/>
    <div name='carracing' className='h-screen w-full pt-28 py-10 bg-white'>
        <div className='flex flex-col items-center max-w-[1240px] mx-auto'>
            <div className='text-center'>
               <h1 className='md:text-4xl sm:text-3xl text-center font-Rubik text-black text-2xl font-bold py-2'>Coming Soon...</h1>
            </div>           
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default GameZone