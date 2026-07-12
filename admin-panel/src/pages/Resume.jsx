import axios from "axios"
import { useEffect, useRef, useState } from "react";
import {useDispatch,useSelector} from "react-redux"
import { control } from "../store/slice";
import toast from "react-hot-toast"
import { FaTrash } from "react-icons/fa";
import {Document,Page,pdfjs} from "react-pdf";
import workerSrc from "pdfjs-dist/build/pdf.worker?url";
const Resume=({url})=>{
const dispatch=useDispatch();
const backendemail=useSelector(state=>state.main.backendemail);
const resumelist=useSelector(state=>state.main.resumelist);
const Fetch=async()=>{
        try {
            const res=await axios.get(url+"/api/admin/get_resume",{
                withCredentials:true
            })
            if(res.data.status){
             
                
                dispatch(control.setresumelist(res.data.resumelist))
            }
            else{
                toast.error(res.data.message);
                
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
            
        }

    }
    const Delete=async(id)=>{
      const response=await axios.delete(url+"/api/admin/delete_resume",{
        data:{id:id},
      withCredentials:true
      })
      if(response.data.status){
        toast.success(response.data.message);
        Fetch();
      }
      else{
        toast.error(response.data.message);
      }

    }
useEffect(()=>{
    Fetch();
},[resumelist]);
   return (
  <div className="w-full  p-2 sm:p-2">
    <div className="mb-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-center capitalize text-cyan-800">
      Portfolio-
        <span className="text-purple-800">Resume's</span>
      </h1>
    </div>
   {!backendemail?(
      <h1 className="text-center text-2xl font-semibold text-red-700 mt-10">
            ADMIN LOGIN REQUIRED
          </h1>

    ):resumelist.length===0?(
      <h1 className="text-center  capitalize font-semibold text-red-800 text-2xl">list is empty</h1>

    ):(
      <div className="h-[75vh] overflow-y-auto pr-2  ">
      {resumelist.map((item, i) => (
        <div
          key={item._id}
          className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 mb-4"
        >
          <div className="flex flex-row lg:flex-row lg:items-center lg:justify-center gap-4">
            
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-800 font-bold">
              {i + 1}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 flex-1">
              <a  className="text-cyan-800  hover:underline " href={item.image} target="_blank">Check Resume</a>
              </div>
              <h1>abdullah resume {i+1}</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 flex-1">
                
              <img src="\public\icons8-resume-64.png" alt="resume icon "/>
    </div>

            
              <h1 className="font-bold text-lg text-red-800" onClick={()=>Delete(item._id)}>
               <FaTrash/>
              </h1>
          </div>
        </div>
      ))}
    </div>
    )
  }

    
  </div>
);

}
export default Resume;