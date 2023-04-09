import React, { useState } from 'react'
import IntroImage from '../assets/3dimage.png'
import Fade from 'react-reveal/Fade';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div name="home"
      className="relative bg-white flex items-center justify-center overflow-hidden pt-20"
      >       
      <div className="flex flex-col w-full  justify-center items-center z-30 p-5  bg-gray-100 bg-opacity-10">
      <div className='md:hidden flex flex-col items-center max-w-[1240px] mx-auto grid md:grid-cols-2'>   
             <Fade left>
       
        <img className='w-[350px] my-4 rounded-lg' src={IntroImage} alt='/' />
        </Fade>
        <Fade right>
        <div className='flex flex-col justify-center items-center mx-2'>
        <h1 className='md:text-4xl sm:text-3xl font-SignikaNegative font-bold text-center text-black text-2xl font-bold py-4'>Welcome to SportIn Leisure</h1>
            <p className='text-center text-gray-500 font-SignikaNegative'>
            We are leading leisure and entertainment design firm with a proven track record of creating high-quality indoor entertainment facilities, competitive socializing spaces, and visitor attractions across 13 countries. 
            </p>
            <div onClick={()=>{navigate('/gamezone')}} className='cursor-pointer  flex flex-row items-center justify-center bg-[#FF4500] hover:bg-white hover:text-[#FF4500] text-white w-[200px] rounded-3xl shadow-3xl font-medium my-6 mr-5  py-3'><p className='font-SignikaNegative cursor-pointer'>Build your own game zone</p></div>
        </div>
        </Fade>
        </div>


        <div className='hidden md:flex max-w-[1240px] mx-auto grid md:grid-cols-2'>
       <Fade left>
        <div className='w-1/2 ml-5 flex flex-col justify-center items-center'>
            <h1 className='md:text-7xl sm:text-3xl font-SignikaNegative font-bold text-center text-black text-2xl font-bold py-4'>Welcome to SportIn Leisure</h1>
            <p className='text-center text-gray-500 font-SignikaNegative'>
            We are leading leisure and entertainment design firm with a proven track record of creating high-quality indoor entertainment facilities, competitive socializing spaces, and visitor attractions across 13 countries. 
            </p>
            <div className='flex flex-row'>
            <div onClick={()=>{navigate('/gamezone')}} className='cursor-pointer  flex flex-row items-center justify-center bg-[#FF4500] hover:bg-white hover:text-[#FF4500] text-white w-[200px] rounded-3xl shadow-3xl font-medium my-6 mr-5  py-3'><p className='font-SignikaNegative cursor-pointer'>Build your own game zone</p></div>
            </div>
        </div>
        </Fade>
          <Fade right>
          <img className='w-[400px] ml-28  my-4 rounded-lg' src={IntroImage} alt='/' />
          </Fade>
        </div>
        </div>                  
    </div> 
  )
}

export default Hero