import { useEffect, useRef, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { toast} from "react-hot-toast";
import axios from "axios"
import { control } from "../store/slice";
const  Sidebar=({url})=>{
    
    const dispatch=useDispatch();
    const navbarclass=useSelector(state=>state.main.navbarclass);
    const Logout=async(e)=>{
        e.preventDefault();
          const response=await axios.post(url+"/api/auth/out",{},{
            withCredentials:true
        });
        if(response.data.status){
            dispatch(control.setbackendemail(""));
            
        toast.success(response.data.message);

        }
        else{
            toast.error(response.data.message);
        }
    }
    const backendemail=useSelector(state=>state.main.backendemail);
    return (
        <div>
            <div className=" hidden xl:block lg:block md:block xl:bg-purple-950 xl:w-64 xl:min-h-screen xl:text-[#273338] xl:font-semibold xl:overflow-y-auto xl:p-4             lg:bg-purple-950 lg:w-64 lg:min-h-screen lg:text-[#273338] lg:font-semibold lg:overflow-y-auto lg:p-4         md:bg-purple-950 md:w-64 md:min-h-screen md:text-[#273338] md:font-semibold md:overflow-y-auto md:p-4">
        <div className="mt-4 bg-white/20 rounded-xl p-4">
  {backendemail && (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-white/80">Welcome</p>
        <h2 className="text-lg font-bold text-white">
          Abdullah 
        </h2>
      </div>

      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-purple-950 font-bold text-lg shadow-md cursor-pointer">
        {backendemail.slice(0, 1).toUpperCase()}
      </div>
    </div>
  )}
</div>
        <ul className="flex justify-between items-center flex-col gap-20 text-sm capitalize mt-12 text-center">
            <Link to="/" onClick={()=>dispatch(control.setnavbarclass("one"))}   className={` ${navbarclass=="one"?"bg-amber-500 hover:bg-cyan-700 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-gray-800":"bg-purple-600 hover:bg-purple-700 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-purple-600"}`}>dashboard</Link>
            <Link to="/upload" onClick={()=>dispatch(control.setnavbarclass("two"))}  className={` ${navbarclass=="two"?"bg-amber-500 hover:bg-cyan-700 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-gray-800":"bg-purple-600 hover:bg-purple-700 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-purple-600 w-35"}`}   >Upload-Section</Link>
            <Link to="/skills" onClick={()=>dispatch(control.setnavbarclass("dlist"))}  className={` ${navbarclass=="dlist"?"bg-amber-500 hover:bg-cyan-700 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-gray-800":"bg-purple-600 hover:bg-purple-700 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-purple-600"}`}  >Skills</Link>
            <Link to="/resume" onClick={()=>dispatch(control.setnavbarclass("resume"))}  className={` ${navbarclass=="resume"?"bg-amber-500 hover:bg-cyan-700 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-gray-800":"bg-purple-600 hover:bg-purple-700 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-purple-600"}`}  >Resume</Link>
            <Link to="/contacts" onClick={()=>dispatch(control.setnavbarclass("c"))}  className={` ${navbarclass=="c"?"bg-amber-500 hover:bg-cyan-700 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-gray-800":"bg-purple-600 hover:bg-purple-700 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-purple-600"}`}  >Contacts</Link>
            <Link to="/projects" onClick={()=>dispatch(control.setnavbarclass("dlist2"))}  className={` ${navbarclass=="dlist2"?"bg-amber-500 hover:bg-cyan-700 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-gray-800":"bg-purple-600 hover:bg-purple-700 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-purple-600"}`}  >Projects</Link>
            <Link to="/herosection" onClick={()=>dispatch(control.setnavbarclass("dlist3"))}  className={` ${navbarclass=="dlist3"?"bg-amber-500 hover:bg-cyan-700 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-gray-800":"bg-purple-600 hover:bg-purple-700 cursor-pointer p-2 rounded-2xl transition ease-in-out duration-200 text-white border-3 border-purple-600"}`}  >Hero Section Content</Link>
           {!backendemail? <Link to="/login" className="bg-blue-700 text-white p-3 rounded-3xl hover:bg-blue-900 transition ease-in-out duration-200" >LOGIN</Link>:<button className="bg-red-700 text-white p-3 rounded-3xl hover:bg-red-900 transition ease-in-out duration-200" onClick={Logout}>LOGOUT</button>}
        </ul>

    </div>

             
        </div>
    )
    
    
}
export default Sidebar;