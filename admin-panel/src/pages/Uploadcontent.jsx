import React, { useState } from 'react'
import axios from "axios"
import {toast} from "react-hot-toast"
import { control } from '../store/slice'
import {useDispatch,useSelector} from "react-redux"
import assestsimg from '../assets/assests'
import { ClipLoader } from "react-spinners";
const Uploadcontent = ({url}) => {
    const dispatch=useDispatch();
    const projectdetails=useSelector(state=>state.main.projectdetails);
    const backendemail=useSelector(state=>state.main.backendemail);
    const[img1,setimg1]=useState(false);
    const[loading,setloading]=useState(false);
    const[loading2,setloading2]=useState(false);
    const skilldetails=useSelector(state=>state.main.skilldetails);
    const[img2,setimg2]=useState(false);
    const [img3,setimg3]=useState(false);
    const [loading3,setloading3]=useState(false);
    const herosectiondetails=useSelector(state=>state.main.herosectiondetails);
    const onchangehandler1=(e)=>{
        dispatch(control.setprojectdetails({
            name:e.target.name,
            value:e.target.value
        }))

    }
    const onchangehandler2=(e)=>{
        dispatch(control.setskilldetails({
             name:e.target.name,
            value:e.target.value
        }))
        
    }
    const onchangehandler3=(e)=>{
         dispatch(control.setherosectiondetails({
             name:e.target.name,
            value:e.target.value
        }))
       
        
    }
    const Addproject=async(e)=>{
        e.preventDefault();
        if(!img1){
            toast.error("Please Add Image")
            return ;
        }
        if(!backendemail){
            toast.error("Admin Login Required");
            return ;
        }
        try {
            setloading(true);
            const formdata=new FormData();
     formdata.append("image",img1);
     formdata.append("name",projectdetails.name);
     formdata.append("description",projectdetails.description);
     formdata.append("url",projectdetails.url);
     const response=await axios.post(
        
        url+"/api/admin/addproject",
        formdata,
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
            console.log("upload project error",error);
            
        }
    

    }
    const Addskill=async(e)=>{
         e.preventDefault();
         if(!img2){
            toast.error("Please Add Image")
            return ;
        }
        if(!backendemail){
            toast.error("Admin Login Required");
            return ;
        }
        try {
            setloading2(true);
            const formdata=new FormData();
     formdata.append("image",img2);
     formdata.append("name",skilldetails.name);
     const response=await axios.post(
        
        url+"/api/admin/addskill",
        formdata,
        {
            withCredentials:true
        }
     );
     
     if(response.data.status){
        toast.success(response.data.result);
        setloading2(false);
     }
     else{
        toast.error(response.data.result);
        setloading2(false);
     }

            
        } catch (error) {
            toast.error(error.message);
            console.log("upload skill error",error);
            
        }

    }
    const Addheroimage=async(e)=>{
         e.preventDefault();
         if(!img3){
            toast.error("Please Add Image")
            return ;
        }
        if(!backendemail){
            toast.error("Admin Login Required");
            return ;
        }
       
        try {
            setloading3(true);
            const formdata=new FormData();
     formdata.append("image",img3);
     formdata.append("name",herosectiondetails.name);
     formdata.append("mainheading",herosectiondetails.mainheading);
     formdata.append("Bio",herosectiondetails.Bio);
     const response=await axios.post(
        
        url+"/api/admin/heroimage",
        formdata,
        {
            withCredentials:true
        }
     );
     
     if(response.data.status){
        toast.success(response.data.result);
        setloading3(false);
     }
     else{
        toast.error(response.data.result);
        setloading3(false);
     }

            
        } catch (error) {
            toast.error(error.message);
            console.log("upload hero section  error",error);
            
        }

    }
  return (
        
    <div className='flex justify-center gap-30 items-center flex-wrap flex-row'>
    <h1>add resume data in your portfolio</h1>
        <div >
            <form onSubmit={Addproject}>
                <div>
                    <label htmlFor='image'>
                        <img className='w-32 h-32 md:w-32 md:h-32 object-cover rounded-xl border-2 border-dashed border-gray-300 group-hover:border-red-500 transition' alt="upload" src={img1? URL.createObjectURL(img1) : assestsimg.image} />

                    </label>
                    
                </div>
                <div>
            <input
            className="hidden"
              onChange={(e) => setimg1(e.target.files[0])}
              id="image"
              type="file"
              accept="image/*" 
              />
                </div>
                <div>
                <div>
                    <label htmlFor='name'>project name</label>
                </div>
                <div>
                    <input onChange={onchangehandler1} name="name" value={projectdetails.name} type="text" placeholder='Add Project Name' required/>
                </div>
                </div>
                <div>
                <div>
                    <label htmlFor='desc'>Project Description</label>
                </div>
                <div>
                    <textarea onChange={onchangehandler1} name="description" value={projectdetails.description} rows={10} cols={10} required placeholder='Project Description'/>
                </div>
                </div>
                <div>
                <div>
                    <label htmlFor='url'>Project URL (optional)</label>
                </div>
                <div>
                    <input onChange={onchangehandler1} name="url" value={projectdetails.url} type='text' placeholder='Project url'/>
                </div>
                </div>
                <div>
                    <button type="submit">Add Project<span>{loading&&<ClipLoader/>}</span></button>
                </div>
                 


            </form>
        </div>
        <div>
            <form onSubmit={Addskill}>
                <div>
                    <label htmlFor='image2'>
                        <img className='w-32 h-32 md:w-32 md:h-32 object-cover rounded-xl border-2 border-dashed border-gray-300 group-hover:border-red-500 transition' alt="upload" src={img2? URL.createObjectURL(img2) : assestsimg.image} />

                    </label>
                    
                </div>
                <div>
            <input
            className="hidden"
              onChange={(e) => setimg2(e.target.files[0])}
              id="image2"
              type="file"
              accept="image/*" 
              />
                </div>
                <div>
                    <div>
                        <label htmlFor="name">Skill Name</label>
                    </div>
                    <div>
                        <input onChange={onchangehandler2} name="name" value={skilldetails.name} type="text" placeholder='Skill Name'required />
                    </div>
                </div>
                <div>
                    <button type="submit">Add Skill <span>{loading2&&<ClipLoader/>}</span></button>
                </div>

            </form>
        </div>
        <div>
            <form onSubmit={Addheroimage}>
                <div>
                    <label htmlFor='image3'>
                        <img className='w-32 h-32 md:w-32 md:h-32 object-cover rounded-xl border-2 border-dashed border-gray-300 group-hover:border-red-500 transition' alt="upload" src={img3? URL.createObjectURL(img3) : assestsimg.image} />

                    </label>
                    
                </div>
                <div>
            <input
            className="hidden"
              onChange={(e) => setimg3(e.target.files[0])}
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
                        <input onChange={onchangehandler3} name="name" value={herosectiondetails.name} type="text" placeholder='Full Name'required />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="heading">Main Heading </label>
                    </div>
                    <div>
                        <input onChange={onchangehandler3} name="mainheading" value={herosectiondetails.mainheading} type="text" placeholder='Headlines'required />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="name">Add Short Bio</label>
                    </div>
                    <div>
                        <textarea rows={10} cols={10} onChange={onchangehandler3} name="Bio" value={herosectiondetails.Bio} type="text" placeholder='Short Bio'required ></textarea>
                    </div>
                </div>
                <div>
                    <button type="submit">Add Hero Section <span>{loading3&&<ClipLoader/>}</span></button>
                </div>


            </form>
        </div>
      
    </div>
  )
}

export default Uploadcontent

