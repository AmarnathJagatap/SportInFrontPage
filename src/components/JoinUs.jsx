import React,{useState} from 'react'

const JoinUs = () => {
  const [email, setEmail] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}\n`);
  };
  return (
    <div name="join" className='w-full'>
        <div class="flex flex-col relative bg-cover py-20 bg-no-repeat justify-center items-center bg-[#6C0BA9]">
        <div class="flex flex-col relative  justify-center items-center">
                <h1 className="text-white text-center sm:text-5xl text-5xl font-SignikaNegative relative z-20">JOIN OUR MAILING LIST</h1>
                <p className="w-1/2 text-white mt-4 sm:text-lg text-lg font-SignikaNegative relative z-20">
                AND NEVER MISS AN UPDATE
          </p>
             
            </div>
        <form onSubmit={handleSubmit} className="flex flex-col w-full items-center justify-center mt-20">
     
        <label htmlFor="email" className="text-left font-SignikaNegative font-bold text-white">Email</label>

      <input 
        type="email" 
        id="email" 
        name="email" 
        value={email} 
        onChange={(event) => setEmail(event.target.value)} 
        className="w-1/2 border-2 border-white bg-white text-black rounded-md px-2 py-2 mb-4 focus:outline-none focus:ring-1 focus:ring-gray-900" 
      />

    

<button type="submit" className="w-1/2 bg-transparent text-xl text-white hover:text-[#6C0BA9] font-SignikaNegative font-medium py-2 px-6 border rounded-none border-white hover:bg-white hover:text-white transition-colors duration-300 relative z-20 mt-10">Submit</button>

    </form>
            </div>
            
    </div>
  )
}

export default JoinUs