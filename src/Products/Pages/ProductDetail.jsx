import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar1 from '../../components/Navbar1';
import Footer from '../../components/Footer';
import emailjs from "@emailjs/browser";

const ProductDetail = () => {
    const location = useLocation();
    const [showform, setShowForm] = useState(false)

    const [ambform, setAmbForm] = useState({
        name:'',
        email:"",
        message:"",
        contact:"",
    
    
      })

      const updateForm = (e) => {
        setAmbForm ({
            ...ambform,
            [e.target.name]: e.target.value,
        })
        console.log(e.target)
        console.log(ambform)
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setShowForm(false)
        emailjs
          .sendForm(
            "service_cxg1ziw",
            "template_rw12e3zd",
            "#ambform",
            "NN0ALMdg06ypB1317qpt"
          )
          .then((result) => {
            setShowForm(false)
            console.log(
                result.text
                );
        }, (error) => {
            console.log(error.text);
        });
         e.target.reset();
      };


  return (
    <>
    <Navbar1/>
    <div 
      className="relative bg-white flex items-center justify-center overflow-hidden pt-20"
      >       
      <div className="flex flex-col w-full items-center  justify-center items-center z-30 p-5  bg-gray-100 bg-opacity-10">
      <img className='w-[250px] h-[250px] my-4 rounded-lg' src={location.state.productdetail.image} alt='/' />
      <div className='md:hidden flex flex-col items-center max-w-[1240px] mx-auto grid md:grid-cols-2'> 
      
    <div className='flex flex-col justify-center items-center mx-2'>
        <h1 className='text-xl  font-SignikaNegative font-bold text-center text-black text-2xl font-bold py-4'>{location.state.productdetail.title}</h1>
        <p className='text-center text-gray-500 font-SignikaNegative'>
             <span className='font-bold text-black'>Discription: </span> {location.state.productdetail.discription}
        </p>
    </div>
    <div className='flex flex-col items-center py-10'>
    <p className='text-center text-gray-900 font-SignikaNegative'>
    Price : {location.state.productdetail.rate} rupees
        </p> 
        <p className='text-center text-gray-900 font-SignikaNegative'>
    Dimension : {location.state.productdetail.dimension} 
        </p>  
      <div onClick={()=>{setShowForm(true)}} className='cursor-pointer  flex flex-row items-center justify-center bg-[#FF4500] hover:bg-white hover:text-[#FF4500] text-white w-[200px] rounded-3xl shadow-3xl font-medium my-6 mr-5  py-3'><p className='font-Merriweather cursor-pointer'>Buy Now</p></div>
    </div>
        </div>
        <div className='hidden md:flex max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='w-1/2 ml-5 flex flex-col justify-center items-center'>
            <h1 className='text-2xl  font-SignikaNegative font-bold text-center text-black text-2xl font-bold py-4'>{location.state.productdetail.title}</h1>
            <p className='text-center text-gray-500 font-SignikaNegative'>
             <span className='font-bold text-black'>Discription: </span> {location.state.productdetail.discription}
            </p>
            <div className='flex flex-row'>
            </div>    
        </div>
        <div className='flex flex-col items-center w-full'>
        <p className='text-center py-2 text-gray-900 font-SignikaNegative'>
         Price : {location.state.productdetail.rate} rupees
        </p>    
        <p className='text-center py-2 text-gray-900 font-SignikaNegative'>
    Dimension : {location.state.productdetail.dimension} 
        </p>      
        <div onClick={()=>{setShowForm(true)}} className='cursor-pointer  flex flex-row items-center justify-center bg-[#FF4500] hover:bg-white hover:text-[#FF4500] text-white w-[200px] rounded-3xl shadow-3xl font-medium my-6 mr-5  py-3'><p className='font-Merriweather cursor-pointer'>Buy Now</p></div>

        </div>        
        </div>
         </div>      
            
    </div> 
    <Footer/>

    {showform ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <form class="w-full max-w-lg" onSubmit={sendEmail} id="ambform">
                        
                        <div class="flex flex-wrap -mx-3 mb-2">
                          <div class="w-2/3 px-3">
                            <label  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                              Name
                            </label>
                            <input name="name" value={ambform.name} onChange={updateForm} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text"/>
                          </div>
                          </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                          <div class="w-2/3 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                              Email
                            </label>
                            <input  name="email" value={ambform.email} onChange={updateForm} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text"/>
                          </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                          <div class="w-2/3 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                              Message
                            </label>
                            <input  name="message" value={ambform.message} onChange={updateForm} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text"/>
                          </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                          <div class="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                              Contact Number
                            </label>
                            <input  name="contact" value={ambform.contact} onChange={updateForm}  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text"/>
                          </div>

                         
                        
                        </div>

                        <div className='flex flex-row md:ml-28'>
    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                 
                 <div 
                 onClick={()=>{setShowForm(false)}}
                  
                 className="cursor-pointer rounded-xl hover:bg-white text-red bg-gray-400 font-bold uppercase px-6 py-2 text-sm border-red-500  mr-1 mb-1 ease-linear"
                 > Close</div>
  </div>
  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                 
                 <button 
                   type = "submit"
                   id= "submitBtn"
                   className="cursor-pointer text-white bg-black font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                   > Get a Call Back</button>
  </div>

    </div>
                </form>
                </div>
                {/*footer*/}
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>

  )
}

export default ProductDetail