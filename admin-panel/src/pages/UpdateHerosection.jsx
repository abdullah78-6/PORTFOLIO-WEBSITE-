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
    <div>
    <form onSubmit={Update}>
                <div>
                    <label htmlFor='image3'>
                        <img className='w-32 h-32 md:w-32 md:h-32 object-cover rounded-xl border-2 border-dashed border-gray-300 group-hover:border-red-500 transition' alt="upload" src={img4? URL.createObjectURL(img4) : assestsimg.image} />

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
                <div>
                    <div>
                        <label htmlFor="name">Your Full Name</label>
                    </div>
                    <div>
                        <input onChange={onchangehandler3} name="name" value={herosectiondetails2.name} type="text" placeholder='Full Name'required />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="heading">Main Heading </label>
                    </div>
                    <div>
                        <input onChange={onchangehandler3} name="mainheading" value={herosectiondetails2.mainheading} type="text" placeholder='Headlines'required />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="name">Add Short Bio</label>
                    </div>
                    <div>
                        <textarea rows={10} cols={10} onChange={onchangehandler3} name="Bio" value={herosectiondetails2.Bio} type="text" placeholder='Short Bio'required ></textarea>
                    </div>
                </div>
                <div>
                    <button type="submit">Update Hero Section <span>{loading&&<ClipLoader/>}</span></button>
                </div>


            </form>
    </div>
  )
}

export default UpdateHerosection

