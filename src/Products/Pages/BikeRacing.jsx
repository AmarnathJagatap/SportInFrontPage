import React from 'react'
import { BikesData } from '../Data/BikesData'
import Navbar1 from '../../components/Navbar1'
import Footer from '../../components/Footer'
import { useNavigate } from 'react-router-dom'
const BikeRacing = () => {
    const navigate = useNavigate();
  return (
    <>
    <Navbar1/>
    <div name='carracing' className='w-full pt-28 py-10 bg-white'>
        <div className='flex flex-col items-center max-w-[1240px] mx-auto'>
            <div className='text-center'>
               <h1 className='md:text-4xl sm:text-3xl text-center font-Rubik text-black text-2xl font-bold py-2'>Bike Racing</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mx-4 ">
                {BikesData.map((product) => (
                    <div key={product.id} onClick={()=>{navigate('/productdetail',{state:{productdetail:product}})}} className="p-2 bg-white rounded-2xl shadow-lg">
                    <div className="bg-white p-4 rounded-lg">
                       <img className='w-[250px] h-[250px] my-4 rounded-lg' src={product.image} alt='/' />
                        <h2 className="text-lg  text-left font-SignikaNegative">{product.title}</h2>
                        <p className="text-sm text-left font-SignikaNegative">Rupees {product.rate}</p>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default BikeRacing