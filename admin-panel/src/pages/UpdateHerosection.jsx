import React, { useEffect, useState } from 'react'
import { control } from '../store/slice'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"
import { ClipLoader } from "react-spinners";
import assestsimg from '../assets/assests';
import {toast} from "react-hot-toast"
import axios from "axios"
const UpdateHerosection = ({url})=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const[img4,setimg4]=useState(false);
    const herosectionid=useSelector(state=>state.main.herosectionid);
    const herosectiondetails2=useSelector(state=>state.main.herosectiondetails2);
    const backendemail=useSelector(state=>state.main.backendemail);
    const [loading,setloading]=useState(false);
    const onchangehandler3=(e)=>{
        dispatch(control.setherosectiondetails2({
            name:e.target.name,
            value:e.target.value
        }))

    }
    useEffect(()=>{
        if(!herosectionid){
            navigate("/herosection");
            return ;

        }

    },[])
    const Update=async(e)=>{
        e.preventDefault();
        if(!img4){
            toast.error("Please Upload New Image");
            return ;
            
        }
        if(!backendemail){
            toast.error("Admin Login Required");
            return ;
        }
        try {
            setloading(true);
            const formdata=new FormData();
     formdata.append("image",img4);
     formdata.append("id",herosectionid);
     formdata.append("name",herosectiondetails2.name);
     formdata.append("mainheading",herosectiondetails2.mainheading);
     formdata.append("Bio",herosectiondetails2.Bio);
            const res=await axios.put(url+"/api/admin/update",formdata,
                {
            withCredentials:true
                }
            )
            if(res.data.status){
                toast.success(res.data.message);
                setloading(false);
            }
            else{
                toast.error(res.data.message);
                setloading(false);
            }
            
        } catch (error) {
            console.log("this is a update hero section error ",error);
            toast.error(error.message);
            setloading(false);
            
        }

    }
return (
    <div className='font-semibold capitalize ' >
        <div  >
            <div className='flex justify-center items-center flex-wrap mt-20 ml-150  ' >
    <form className='flex justify-center items-center flex-col bg-[#5C469C] p-30 rounded-lg flex-wrap' onSubmit={Update}>
                <div>
                    <label htmlFor='image3'>
                        <img className='w-32 h-22 md:w-32 md:h-22 object-cover rounded-lg border-3 border-dashed border-[#950101]  transition ease-in-out duration-200' alt="upload" src={img4? URL.createObjectURL(img4) : assestsimg.image} />

                    </label>
                    
                </div>
                <div>
            <input
            className="hidden"
              onChange={(e) => setimg4(e.target.files[0])}
              id="image3"
              type="file"
              accept="image/*" 
              />
                </div>
                <div className='flex justify-center items-center gap-2 text-xl flex-col mt-2'>
                    <div className='mb-4'>
                        <label className='text-purple-950' htmlFor="name">Your Full Name</label>
                    </div>
                    <div>
                        <input className='border-2 border-[#0C134F] outline-none p-1 rounded-4xl focus:ring-2 focus:ring-[#5F264A] text-purple-900 text-xl' onChange={onchangehandler3} name="name" value={herosectiondetails2.name} type="text" placeholder='Full Name'required />
                    </div>
                </div>
                <div>
                    <div className='mb-4'>
                        <label className='text-purple-950' htmlFor="heading">Main Heading </label>
                    </div>
                    <div>
                        <input className='border-2 border-[#0C134F] outline-none p-1 rounded-4xl focus:ring-2 focus:ring-[#5F264A] text-purple-900 text-xl' onChange={onchangehandler3} name="mainheading" value={herosectiondetails2.mainheading} type="text" placeholder='Headlines'required />
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2 text-xl flex-col mt-2'>
                    <div className='mb-4'>
                        <label className='text-purple-950' htmlFor="name">Add Short Bio</label>
                    </div>
                    <div>
                        <textarea className='border-2 border-[#0C134F] outline-none p-2 rounded-lg focus:ring-2 focus:ring-[#5F264A] text-purple-900 text-xl' rows={5} cols={25} onChange={onchangehandler3} name="Bio" value={herosectiondetails2.Bio} type="text" placeholder='Short Bio'required ></textarea>
                    </div>
                </div>
                <div className='mb-4'>
                    <button className='bg-[#FF0000] mt-3 p-2 rounded-xl text-purple-300 hover:scale-110 transition ease-in-out duration-200' type="submit">Update Hero Section <span>{loading&&<ClipLoader color='#3E2C41'/>}</span></button>
                </div>


            </form>
            </div>
            </div>
    </div>
  )
}

export default UpdateHerosection

