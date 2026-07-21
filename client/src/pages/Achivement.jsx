import React from 'react'
import axios from "axios"
import {toast} from "react-hot-toast"
import {useDispatch,useSelector} from "react-redux"
import { useEffect } from 'react'
import { control } from '../store/slice'
import { FaTrophy } from "react-icons/fa6";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Achivement = ({url}) => {
    const dispatch=useDispatch();
    const achivement=useSelector(state=>state.main.achivement);
    const Fetch=async()=>{
   try {
            const res=await axios.get(url+"/api/client/get_achive",{
                withCredentials:true
            })
            if(res.data.status){
                dispatch(control.setachivement(res.data.answer));
            }
            else{
                toast.error("Problem In Server");
            }
        } catch (error) {
            console.log("achivement error",error);
            
        }

    }
    useEffect(()=>{
        Fetch();
    },[])
  return (
    <div className='font-semibold mt-10'>
        <h1 className='text-center capitalize text-4xl text-[#D91656]'>achievements</h1>
        <div className='flex justify-center items-center mt-7 flex-wrap gap-50'>
            <div>
                  <DotLottieReact
                           className="w-[350px] h-[350px] object-contain"
                            src="Coder.lottie"
                           
                            loop
                            autoplay
                        />
            </div>
            <div >
                {achivement.map((i,index)=>{
                    return <div key={index} className="bg-gradient-to-br from-[#17153B] to-[#1B3C53] border border-[#240750] hover:border-[#5DF8D8] rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 text-center flex justify-center items-center flex-col gap-3 mt-3">
                        <div >
                            <FaTrophy className='text-6xl text-amber-400 xl ' />
                        </div>
                        <div className="flex items-center gap-5 justify-center ">
                            <h1 className='text-center text-[#5DF8D8]'>{i.headline}</h1>
                        </div>
                        <div className="flex items-center gap-5 justify-center ">
                            <p className='text-2xl   text-[#bab9e2] capitalize break-words  w-90'>{i.description}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
      
    </div>
  )
}

export default Achivement

