import React, { useEffect } from 'react'
import axiso from "axios"
import toast from "react-hot-toast"
import axios from 'axios'
import { control } from '../store/slice'
import {useDispatch,useSelector} from "react-redux"
const Dashboard = ({url}) => {
  const Totalviews=useSelector(state=>state.main.Websiteviews)
  const dispatch=useDispatch();
  const Fetchtotalview=async()=>{
    try {
      const res=await axios.get(url+"/api/monitor/getv",{
        withCredentials:true
      })
      if(res.data.status){
        dispatch(control.setWebsiteviews(res.data.answer));


      }
      else{
        console.log("Problem in a server backend get views");

      }
    } catch (error) {
      console.log("fetch total views error",error.message);
      
    }
  }
  useEffect(()=>{
    Fetchtotalview();
},[Totalviews]);
const Resetviews=async()=>{
  try {
    const res=await axios.post(url+"/api/monitor/setv",
      {},
      {
      withCredentials:true,
      }

  )
    if(res.data.status){
      toast.success(res.data.message);

      dispatch(control.setWebsiteviews(res.data.answer));
    }
  } catch (error) {
    console.log("there is a reset view error",error);
    
  }
}
  return (
    <div className='font-semibold'>
       portfolio Dashboard 
       <div>
        <h1>NO OF PEOPLE VISITED MY WEBSITE</h1>
        {/* {Totalviews?<h1>{Totalviews-1}</h1>:<h1>{0}</h1>} */}
        {Totalviews??0}
       </div>
       <div>
        <button onClick={Resetviews} className='p-4 rounded-xl bg-amber-600 text-xl text-white'>RESET WEBSITE VIEWS</button>
       </div>
    </div>
  )
}

export default Dashboard
