import axios from "axios"
import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import { control } from "../store/slice";
import toast from "react-hot-toast"
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Herosection=({url})=>{
    const dispatch=useDispatch();
    const backendemail=useSelector(state=>state.main.backendemail);
    const Herolist=useSelector(state=>state.main.Herolist);
    const navigate=useNavigate();    
    const Fetch=async()=>{
        try {
            const res=await axios.get(url+"/api/admin/gethero",{
                withCredentials:true
            })
            if(res.data.status){
                
                dispatch(control.setHerolist(res.data.herolist))
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
      const response=await axios.delete(url+"/api/admin/deletehero",{
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
    const Sendtoupdate=(id)=>{
     dispatch(control.setherosectionid(id));
     navigate("/hero_section_update")
    }
useEffect(()=>{
    Fetch();
},[Herolist]);
   return (
  <div className="w-full  p-2 sm:p-2 font-semibold">
    <div className="mb-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-center capitalize text-cyan-800">
      Portfolio-
        <span className="text-purple-800">Hero Section Details</span>
      </h1>
    </div>
   {!backendemail?(
      <h1 className="text-center text-2xl font-semibold text-red-700 mt-10">
            ADMIN LOGIN REQUIRED
          </h1>

    ):Herolist.length===0?(
      <h1 className="text-center  capitalize font-semibold text-red-800 text-2xl">list is empty</h1>

    ):(
      <div className="h-[75vh] overflow-y-auto pr-2    text-center">
      {Herolist.map((item, i) => (
        <div
          key={item._id}
          className="bg-[#273338] border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 mb-4 text-center capitalize"
        >
          <div className="flex justify-between items-center gap-9 flex-wrap">
            
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-300 text-purple-800 font-bold">
              {i + 1}
            </div>

            <div className="flex justify-between items-center gap-30 flex-wrap">
              
              <div className="flex flex-col justify-center items-center gap-0 flex-wrap">
                <p className="text-xs text-gray-300 uppercase">
                  Hero Name
                </p>
                <h1 className="text-purple-600 font-semibold break-words">
                  {item.name}
                </h1>
              </div>
                  <div>
                <p className="text-xs text-gray-300 uppercase mb-2">
                  Hero Image
                </p>
                
                <img  className="w-44 h-24 rounded-lg hover:scale-125 transition ease-in-out duration-200" src={item.image}/>
              </div>
              <div>
                <p className="text-xs text-gray-300 uppercase">
                  Hero Intro
                </p>
                
               <h1 className="text-purple-600 font-semibold break-words">{item.mainheading}</h1>
              </div>
              <div className="w-64">
                <p className="text-xs text-gray-300 uppercase">
                  Hero Bio
                </p>
                <h1 className="text-purple-600 font-semibold break-words">{item.Bio}</h1>
               
              </div>
              <div>
                <button onClick={()=>Sendtoupdate(item._id)} className="p-2 bg-purple-900 text-lg font-semibold text-cyan-300 rounded-lg hover:bg-purple-950 hover:scale-110 transition ease-in-out duration-200">Update</button>
              </div>
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
export default Herosection;