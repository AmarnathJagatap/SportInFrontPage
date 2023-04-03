import React from 'react'
import Logo from '../assets/logo.png'


import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();
  return (
    <div  className='w-full pt-4 bg-white text-gray-300 px-2'>
        
        <div className='flex flex-col max-w-[1240px] px-2 py-1 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4 font-Merriweather text-black'>2023 Sport In. All rights reserved</p>
        <div className='flex justify-between text-black sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaTwitch />
            <FaGithub />
        </div>
        </div>
    </div>
  )
}

export default Footer