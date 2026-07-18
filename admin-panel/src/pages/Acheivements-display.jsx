import axios from "axios"
import { useEffect, useRef, useState } from "react";
import {useDispatch,useSelector} from "react-redux"
import { control } from "../store/slice";
import toast from "react-hot-toast"
import { FaTrash } from "react-icons/fa";
const Acheivements=({url})=>{
const dispatch=useDispatch();
const backendemail=useSelector(state=>state.main.backendemail);
const achievementetails=useSelector(state=>state.main.achievementetails);
const Fetch=async()=>{
        try {
            const res=await axios.get(url+"/api/client/get_achive",{
                withCredentials:true
            })
            if(res.data.status){
             
                
                dispatch(control.setachievementetails(res.data.answer))
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
      const response=await axios.delete(url+"/api/client/del_achive",{
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
},[achievementetails]);

   return (
  <div className="w-full  font-semibold ">
    <div className="mb-4 flex justify-center items-center gap-14 mt-5">
      <h1 className="text-2xl sm:text-3xl font-bold text-center capitalize text-cyan-800">
      Portfolio-
        <span className="text-purple-800">Acheivement's</span>
      </h1>
 </div>
   {!backendemail?(
      <h1 className="text-center text-2xl font-semibold text-red-700 mt-10">
            ADMIN LOGIN REQUIRED
          </h1>

    ):achievementetails.length===0?(
      <h1 className="text-center  capitalize font-semibold text-red-800 text-2xl">list is empty</h1>

    ):(
      <div className="h-[75vh] overflow-y-auto pr-2  ">
      {achievementetails.map((item, i) => (
        <div
          key={item._id}
          className="bg-[#273338] border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 mb-4 text-center capitalize ml-3 mr-3"
        >
          <div className="flex flex-row lg:flex-row lg:items-center lg:justify-center gap-4">
            
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-300 text-purple-800 font-bold">
              {i + 1}
            </div>

            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 flex-1">
              <h1 className="text-purple-400">{item.headline}</h1>
            
              </div>
              <p className="text-cyan-300">{item.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 flex-1">
                
              
    </div>

            
              <h1 className="font-bold text-lg text-red-800" onClick={()=>Delete(item._id)}>
               <FaTrash className="text-3xl hover:scale-150 transition ease-in-out duration-200"/>
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
export default Acheivements;