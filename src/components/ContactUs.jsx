import React,{useState} from 'react'
import { Fade } from 'react-reveal';

const ContactUs = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
  };
  return (
    <div name='contact' className='w-full'>
       <div className='grid md:grid-cols-2'>
        <div>
       <div class="h-screen flex flex-col relative bg-contain bg-no-repeat justify-center items-center">
      <Fade left>
       <img src='https://res.cloudinary.com/dbwqjycvh/image/upload/v1680516360/fun-3d-illustration-cartoon-kid-with-vr-helmet_183364-81193_vfvsqb.jpg' className='hover:animate-pulse w-full h-screen'/>
       </Fade>
           <div className="absolute inset-0 bg-[#525252] opacity-30 z-10"></div>                
      </div> 
      </div> 
            <div class="h-screen flex flex-col relative bg-cover bg-no-repeat justify-center items-center bg-white">
            <Fade right>
            <h1 className="text-[#525252] py-10 text-center sm:text-5xl text-5xl font-SignikaNegative relative z-20">Contact US</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center h-screen">
      <label htmlFor="name" className="text-left font-SignikaNegative font-bold text-[#525252]">Name</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        value={name} 
        onChange={(event) => setName(event.target.value)} 
        className="w-1/2 px-2 border-2 border-[#525252] bg-white text-black rounded-md py-2 mb-4 focus:outline-none focus:ring-1 focus:ring-gray-900" 
      />

      <label htmlFor="email" className="text-left font-SignikaNegative font-bold text-[#525252]">Email</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        value={email} 
        onChange={(event) => setEmail(event.target.value)} 
        className="w-1/2 px-2 border-2 border-[#525252] bg-white text-black rounded-md py-2 mb-4 focus:outline-none focus:ring-1 focus:ring-gray-900" 
      />

     <label htmlFor="subject" className="text-left font-SignikaNegative font-bold text-[#525252]">Subject</label>
      <input 
        type="text" 
        id="subject" 
        name="subject" 
        value={subject} 
        onChange={(event) => setSubject(event.target.value)} 
        className="w-1/2 px-2 border-2 border-[#525252] bg-white text-black rounded-md py-2 mb-4 focus:outline-none focus:ring-1 focus:ring-gray-900" 
      />
      <label htmlFor="message" className="text-left font-SignikaNegative font-bold text-[#525252]">Message</label>
      <textarea 
        id="message" 
        name="message" 
        value={message} 
        onChange={(event) => setMessage(event.target.value)} 
        className="w-1/2 px-2 border-2 border-[#525252] bg-white text-black rounded-md py-2 mb-4 focus:outline-none focus:ring-1 focus:ring-gray-900" 
      />

<button type="submit" className="bg-transparent rounded-xl text-xl text-[#525252] hover:text-white font-SignikaNegative font-medium py-2 px-6 border rounded-none border-[#525252] hover:bg-[#525252] hover:text-white transition-colors duration-300 relative z-20 mt-10">Submit</button>

    </form>
    </Fade>
            </div>
            
        </div>       
    </div>
  )
}

export default ContactUs