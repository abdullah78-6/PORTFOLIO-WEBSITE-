import axios from "axios"
import { useEffect, useRef, useState } from "react";
import {useDispatch,useSelector} from "react-redux"
import { control } from "../store/slice";
import toast from "react-hot-toast"
import { FaTrash } from "react-icons/fa";
const Contact=({url})=>{
const dispatch=useDispatch();
const backendemail=useSelector(state=>state.main.backendemail);
const contactdetails=useSelector(state=>state.main.contactdetails);
const Fetch=async()=>{
        try {
            const res=await axios.get(url+"/api/client/get_contact",{
                withCredentials:true
            })
            if(res.data.status){
             
                
                dispatch(control.setcontactdetails(res.data.contactlist))
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
      const response=await axios.delete(url+"/api/client/delete_contact",{
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
},[contactdetails]);

const exprtcsv=()=>{
  if(!backendemail){
    toast.error("Admin Login Required");
    return ;
  }
  if(contactdetails.length===0){
    toast.error("No Contact Found");
    return ;
  }
  // csv content self
  const headers=["Name","Email","Message"];
  const csvrows=contactdetails.map((item)=>[
    item.name||"",
    item.email||"",
    item.message||""

  ])
  const csvcontent=[
    headers.join(","),
    ...csvrows.map((row)=>
      row
      .map((field)=>`"${String(field).replace(/"/g,'""')}"`)
      .join(",")
    )
  ].join("\n");
  // csv text self
  const blob=new Blob([csvcontent],{type:"text/csv;charset=utf-8;"});
  const url=URL.createObjectURL(blob);
  // DOWNLOAD LINK SELF
  const link=document.createElement("a");
  link.setAttribute("href",url);
  link.setAttribute("download","CONTACT_DETAILS_PORTFOLIO.csv");
  link.style.visibility="hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

    

}
   return (
  <div className="w-full  font-semibold ">
    <div className="mb-4 flex justify-center items-center gap-8 mt-5">
      <h1 className="text-2xl sm:text-3xl font-bold text-center capitalize text-cyan-800">
      Portfolio-
        <span className="text-purple-800">Contact's</span>
      </h1>
      <button onClick={exprtcsv} className="bg-yellow-600 mr-9 text-purple-900 p-1 xl:p-2 lg:p-2 md:p-2 rounded-xl uppercase text-sm lg:text-xl md:text-xl xl:text-xl  hover:bg-yellow-700 transition ease-in-out duration-200">export csv</button>
    </div>
   {!backendemail?(
      <h1 className="text-center text-2xl font-semibold text-red-700 mt-10">
            ADMIN LOGIN REQUIRED
          </h1>

    ):contactdetails.length===0?(
      <h1 className="text-center  capitalize font-semibold text-red-800 text-2xl">list is empty</h1>

    ):(
      <div className="h-[75vh] overflow-y-auto pr-2  ">
      {contactdetails.map((item, i) => (
        <div
          key={item._id}
          className="bg-[#273338] border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 mb-4 text-center capitalize ml-3 mr-3"
        >
          <div className="flex flex-row lg:flex-row lg:items-center lg:justify-center gap-4 flex-wrap">
            
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-300 text-purple-800 font-bold flex-wrap">
              {i + 1}
            </div>

            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 flex-1">
              <h1 className="text-purple-400">{item.name}</h1>
            
              </div>
              <p className="text-cyan-300 lowercase">{item.email}</p>
              <div className="flex justify-center items-center gap-9 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5  flex-1">
                
              <p className="text-purple-400 w-47 ">{item.message}</p>
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
export default Contact;