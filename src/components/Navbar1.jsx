import { useState } from 'react'
import { Link } from 'react-scroll'
import { Link as LK} from 'react-router-dom'
import Logo from '../assets/logo.png'
import { HiMenuAlt2, HiOutlineX } from "react-icons/hi";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  const [isHovering, setIsHovering] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleClick = () => {
    setIsHover(!isHover)
  };


  return (
    <nav className="bg-[#FF4500] w-full h-[80px] fixed z-50">
      <div className="container mx-auto h-full flex items-center justify-between">
      <div className='flex items-center'>
        <img className='w-[250px] ml-5 my-4 rounded-lg' src={Logo} alt='/' />
        </div>
        <ul className="hidden md:flex items-center skew-x-6">
          <li>
            <LK to="/" smooth={true} duration={500}  className="text-white px-6 py-4 m-0  shadow-xl rounded-3xl font-medium cursor-pointer font-Rubik hover:text-white hover:bg-[#FF281B]">Home</LK>
          </li>
          <li className='relative ' onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <Link to="shop" smooth={true} offset={-200} duration={500} className="text-white px-6 py-4 m-0  shadow-xl rounded-3xl font-medium cursor-pointer font-Rubik hover:text-white hover:bg-[#FF281B]">Shop</Link>
            {isHovering?
            <ul className="absolute left-0 top-full bg-[#FF4500] py-2 px-4 rounded-3xl shadow-xl">
                <li>
                  <LK to="/carracing" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-medium hover:text-gray-900">Leisure</LK>
                </li>
                <li>
                  <LK to="/bikeracing" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-medium hover:text-gray-900">Sports</LK>
                </li>
              </ul>:<></>}      
          </li>
          <li>
          <LK to="/" smooth={true} offset={-50} duration={500} className="text-white px-6 py-4 m-0  shadow-xl rounded-3xl font-medium cursor-pointer font-Rubik hover:text-white hover:bg-[#FF281B]">About</LK>
          </li>
          <li>
          <LK to="/" smooth={true} offset={-50} duration={500} className="text-white px-6 py-4 m-0  shadow-xl rounded-3xl font-medium cursor-pointer font-Rubik hover:text-white hover:bg-[#FF281B]">Contact Us</LK>
          </li>
          <li>
          <LK to="/" smooth={true} offset={-100} duration={500} className="text-white px-6 py-4 m-0  shadow-xl rounded-3xl font-medium cursor-pointer font-Rubik hover:text-white hover:bg-[#FF281B]">Join Us</LK>
          </li>
         
        </ul>
        <div className="md:hidden flex items-center">
          <button className="text-white mx-10" onClick={toggleNavbar}>
            {isOpen ? <HiOutlineX className="bg-[#FF4500] w-8 h-8" /> : <HiMenuAlt2 className="bg-[#FF4500] w-8 h-8" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <ul className="bg-[#FF4500] fixed left-0 top-[80px] w-full py-4 px-4 text-center md:hidden">
          <li>
          <LK to="/" smooth={true} duration={500} className="block font-LibreBaskerville text-white font-medium mb-2" onClick={toggleNavbar}>Home</LK>
          </li>
          <li>
          <Link to="shop" smooth={true} offset={-200} duration={500} className="block text-white font-LibreBaskerville font-medium mb-2" onClick={()=>{handleClick()}}>Shop</Link>  
          {isHover?
            <ul className="bg-[#FF4500] md:hidden list-inside">
               <li onClick={toggleNavbar}>
                  <LK to="/carracing" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-medium hover:text-gray-900">Leisure</LK>
                </li>
                <li onClick={toggleNavbar}>
                  <LK to="/bikeracing" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-medium hover:text-gray-900">Sports</LK>
                </li>
               
          </ul>:<></>}
          </li>        

          <li>
          <LK to="/" smooth={true} offset={-50} duration={500} className="block text-white font-LibreBaskerville font-medium mb-2" onClick={toggleNavbar}>About</LK>
         </li>
         <li>
         <LK to="/" smooth={true} offset={-50} duration={500} className="block text-white font-LibreBaskerville font-medium mb-2" onClick={toggleNavbar}>Contact Us</LK>
         </li>
         <li>
         <LK to="/" smooth={true} offset={-100} duration={500} className="block text-white font-LibreBaskerville font-medium mb-2" onClick={toggleNavbar}>Join Us</LK>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar1
