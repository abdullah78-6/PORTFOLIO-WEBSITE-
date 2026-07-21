import React, { useEffect } from 'react'
import { control } from '../store/slice'
import {useDispatch,useSelector} from "react-redux"
import axios from "axios"
import {toast} from "react-hot-toast"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Education = ({url}) => {
    const dispatch=useDispatch();
    const education=useSelector(state=>state.main.education);
    const Fetch=async()=>{
        try {
            const res=await axios.get(url+"/api/client/get_education",{
                withCredentials:true
            })
            if(res.data.status){
                dispatch(control.seteducation(res.data.answer));
            }
            else{
                toast.error("Problem In Server");
            }
        } catch (error) {
            console.log("education error",error);
            
        }

    }
    useEffect(()=>{
        Fetch();

    },[])
return (
    <div className='font-semibold '>
        <h1 className='text-center capitalize text-4xl text-[#D91656]'>education</h1>
        <div className='flex justify-center gap-24 items-center flex-wrap mt-15'>
            <div>
                <DotLottieReact
                //  src="https://lottie.host/40277c62-f0d2-4e64-bbcd-cd43d74338f8/doWw0GLaI0.lottie"
                 src="Computer Programming.lottie"
                 loop
                 autoplay
                 className="w-[350px] h-[350px] object-contain"
    />
                
            </div>
            <div className='flex flex-row flex-wrap gap-8 w-full lg:w-[550px]' >
            {education.map((i,index)=>(
                <div key={index}   className="bg-gradient-to-br from-[#17153B] to-[#1B3C53] border border-[#240750] hover:border-[#5DF8D8] rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 text-center" >
                    <div  className="flex items-center gap-5 justify-center ">
                        <img className='w-12  h-12 object-contain ' src="school.png"alt="degree icon "/>
                    </div>
                        <div  >
                            <h1 className='text-center text-[#5DF8D8]'>{i.duration}</h1>
                        </div>
                        <div >
                            <h1 className='text-2xl   text-[#bab9e2]  uppercase break-words'>{i.degreename}</h1>
                        </div>
                        <div >
                            <h1 className='text-[#bab9e2]'>{i.collegename}</h1>
                        </div>
                        <div >
                            <h1 className='text-[#bab9e2]'>{i.cgpi}</h1>
                        </div>

                    </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default Education
