import React from 'react'
import { ClipLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className='font-bold text-6xl capitalize flex justify-center items-center h-screen flex-col gap-18 flex-wrap'>
     <div className='flex justify-center items-center flex-wrap'>
      <div className='text-center'><h1 className='text-[#5DF8D8]' >abdullah <span className='text-[#D91656]'>qidwai.</span></h1></div>
     </div>
     <div className='flex justify-center items-center'>
      
      <h1  className='text-slate-400 '>Loading...
        
      </h1>
      
       
     </div>
    </div>
  )
}

export default Loader
