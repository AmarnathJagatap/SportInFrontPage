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
  const [onLeisure, setOnLeisure ] =useState(false);
  const [onSports, setOnSports] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleLeisure= ()=>{
    setOnLeisure(!onLeisure)
  };

  const handleSports = () =>{
    setOnSports(!onSports)
  };

  const handleClick = () => {
    setIsHover(!isHover)
  };


  return (
    <nav className="bg-[#FF4500] w-full h-[80px] fixed z-50">
      <div className="container mx-auto h-full flex items-center justify-between">
      <div className='flex items-center'>
      <img className='w-[150px] h-[70px] ml-5 my-4 rounded-lg' src={Logo} alt='/' />
        </div>
        <ul className="hidden md:flex items-center skew-x-6">
          <li>
            <LK to="/" smooth={true} duration={500}  className="text-white px-6 py-4 m-0  shadow-xl rounded-3xl font-medium cursor-pointer font-SignikaNegative hover:text-white hover:bg-[#FF281B]">Home</LK>
          </li>
          <li className='relative ' onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <Link to="shop" smooth={true} offset={-200} duration={500} className="text-white px-6 py-4 m-0  shadow-xl rounded-3xl font-medium cursor-pointer font-SignikaNegative hover:text-white hover:bg-[#FF281B]">Explore</Link>
            {isHovering?
            <div className="absolute flex flex-row left-0 top-full bg-[#FF4500] py-2 px-4 rounded-3xl shadow-xl">
                <div className='mx-4'>
                  <div  offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">Leisure </div>
                  <ol className='list-disc list-inside'>
                    <li>
                      <LK to="/" smooth={true} offset={-70} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">TICKET REDEMPTION GAMES</LK>
                    </li> 
                    <li>
                      <LK to="/" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">VR GAMES</LK>
                    </li> 
                    <li>
                      <LK to="/" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">ARCADE</LK>
                    </li>  
                    <li>
                      <LK to="/" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">SOFT PLAY</LK>
                    </li>  
                    <li>
                      <LK to="/" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">TRAMPOLINE PARKS</LK>
                    </li>                    
                    <li>
                      <LK to="/" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">SKILL GAMES</LK>
                    </li>  
                    <li>
                      <LK to="/" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">KIDDIE RIDES</LK>
                    </li>  
                  </ol>
                </div>
                <div className='mx-4'>
                  <LK to="/" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900">Sports</LK>
                  <ol className='list-disc list-inside'>
                    <li>
                      <LK to="#" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">CRICKET</LK>
                    </li> 
                    <li>
                      <LK to="#" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">FOOTBALL</LK>
                    </li> 
                    <li>
                      <LK to="#" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">BADMINTON</LK>
                    </li> 
                    <li>
                      <LK to="#" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">HOCKEY</LK>
                    </li>                    
                  </ol>
                 </div>
            </div>
            :<></>}      
          </li>
          <li>
          <LK to="/" smooth={true} offset={-50} duration={500} className="text-white px-6 py-4 m-0  shadow-xl rounded-3xl font-medium cursor-pointer font-SignikaNegative hover:text-white hover:bg-[#FF281B]">About</LK>
          </li>
          <li>
          <LK to="/" smooth={true} offset={-50} duration={500} className="text-white px-6 py-4 m-0  shadow-xl rounded-3xl font-medium cursor-pointer font-SignikaNegative hover:text-white hover:bg-[#FF281B]">Contact Us</LK>
          </li>
          <li>
          <LK to="/" smooth={true} offset={-100} duration={500} className="text-white px-6 py-4 m-0  shadow-xl rounded-3xl font-medium cursor-pointer font-SignikaNegative hover:text-white hover:bg-[#FF281B]">Join Us</LK>
          </li>
         
        </ul>
        <div className="md:hidden flex items-center">
          <button className="text-white mx-10" onClick={toggleNavbar}>
          {isOpen ? <HiOutlineX className="bg-[#6C0BA9] w-8 h-8" /> : <HiMenuAlt2 className="bg-[#6C0BA9] w-8 h-8" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <ul className="bg-[#FF4500] fixed left-0 top-[80px] w-full py-4 px-4 text-center md:hidden">
          <li>
          <LK to="/" smooth={true} duration={500} className="block font-SignikaNegative text-white font-medium mb-2" onClick={toggleNavbar}>Home</LK>
          </li>
          <li>
          <Link to="shop" smooth={true} offset={-200} duration={500} className="block text-white font-SignikaNegative font-medium mb-2" onClick={()=>{handleClick()}}>Explore</Link>  
          {isHover?
            <ul className="bg-[#FF4500] md:hidden list-inside">
               <li onClick={toggleNavbar}>
                  <Link  smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900" onClick={handleLeisure}>Leisure</Link>
                  {
                    onLeisure?
                  
                  <ol className='list-inside list-disc w-full'>
                  <li>
                      <LK to="#" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">TICKET REDEMPTION GAMES</LK>
                    </li> 
                    <li>
                      <LK to="#" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">VR GAMES</LK>
                    </li> 
                    <li>
                      <LK to="#" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">ARCADE</LK>
                    </li>  
                    <li>
                      <LK to="#" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">SOFT PLAY</LK>
                    </li>  
                    <li>
                      <LK to="#" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">TRAMPOLINE PARKS</LK>
                    </li>                    
                    <li>
                      <LK to="#" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">SKILL GAMES</LK>
                    </li>  
                    <li>
                      <LK to="#" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">KIDDIE RIDES</LK>
                    </li>  
                  </ol>:<></>}
                </li>
                <li onClick={toggleNavbar}>
                  <Link to="#" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900" onClick={handleSports}>Sports</Link>
                  {onSports?
                  <ol className='list-disc list-inside'>
                    <li>
                      <LK to="#" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">CRICKET</LK>
                    </li> 
                    <li>
                      <LK to="#" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">FOOTBALL</LK>
                    </li> 
                    <li>
                      <LK to="#" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">BADMINTON</LK>
                    </li> 
                    <li>
                      <LK to="#" smooth={true} offset={-50} duration={500} className="text-white cursor-pointer font-SignikaNegative font-medium hover:text-gray-900 my-2">HOCKEY</LK>
                    </li>                    
                  </ol>:<></>}
                </li>               
          </ul>:<></>}
          </li>              

          <li>
          <LK to="/" smooth={true} offset={-50} duration={500} className="block text-white font-SignikaNegative font-medium mb-2" onClick={toggleNavbar}>About</LK>
         </li>
         <li>
         <LK to="/" smooth={true} offset={-50} duration={500} className="block text-white font-SignikaNegative font-medium mb-2" onClick={toggleNavbar}>Contact Us</LK>
         </li>
         <li>
         <LK to="/" smooth={true} offset={-100} duration={500} className="block text-white font-SignikaNegative font-medium mb-2" onClick={toggleNavbar}>Join Us</LK>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar1
