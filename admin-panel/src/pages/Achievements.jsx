import React, { useState } from 'react'
import { control } from '../store/slice'
import { useDispatch, useSelector } from 'react-redux'
import {toast} from "react-hot-toast"
import { ClipLoader } from "react-spinners";
import axios from "axios"
const Achievements = ({url}) => {
    const [loading,setloading]=useState(false);
    const achievements=useSelector(state=>state.main.achievements);
    const backendemail=useSelector(state=>state.main.backendemail);
    const dispatch=useDispatch();
    const onchangehandler=(e)=>{
        dispatch(control.setachievements({
            name:e.target.name,
            value:e.target.value
        }))
        

    }
    const Addachievements=async(e)=>{
         e.preventDefault();
          if(!backendemail){
        toast.error("Admin Login Required");
        return ;
  }
  try {
            setloading(true);
        const response=await axios.post(
        
        url+"/api/client/add_achive",
        achievements,
        {
            withCredentials:true
        }
     );
     
     if(response.data.status){
        toast.success(response.data.result);
        setloading(false);
     }
     else{
        toast.error(response.data.result);
        setloading(false);
     }

            
        } catch (error) {
            toast.error(error.message);
            console.log("upload achievement error",error);
            
        }



    }
  return (
    <div>
        <form onSubmit={Addachievements}  className='flex justify-center items-center flex-col bg-[#5C469C] p-7 rounded-lg flex-wrap'>
                <div className='flex justify-center items-center gap-2 text-xl flex-col mt-2'>
                <div className='mb-4'>
                    <label className='text-purple-950' htmlFor='name'> Main Heading</label>
                </div>
                <div>
                    <input onChange={onchangehandler} name="headline" value={achievements.headline}  className='border-2 border-[#0C134F] outline-none p-1 rounded-4xl focus:ring-2 focus:ring-[#5F264A] text-purple-900 text-xl'  type="text" placeholder='Short headline' required/>
                </div>
                </div>
                <div className='flex justify-center items-center gap-2 text-xl flex-col'>
                <div className='mb-4'>
                    <label className='text-purple-950' htmlFor='desc'>Short Description</label>
                </div>
                <div>
                    <input onChange={onchangehandler} name="description" value={achievements.description}  className='border-2 border-[#0C134F] outline-none p-1 rounded-4xl focus:ring-2 focus:ring-[#5F264A] text-purple-900 text-xl'  type="text" placeholder='Short Description' required/>
                </div>
                </div>
                
                <div className='mb-4 '>
                    <button className='bg-[#FF0000] mt-3 p-2 rounded-xl text-purple-300 hover:scale-110 transition ease-in-out duration-200' type="submit">Add Achievements<span>{loading&&<ClipLoader color='#3E2C41' />}</span></button>
                </div>
                 


            </form>
            
    
    </div>
  )
}

export default Achievements
