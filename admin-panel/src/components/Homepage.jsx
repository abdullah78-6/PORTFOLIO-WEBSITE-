import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import axios from "axios"
import { control } from '../store/slice'
import {toast} from "react-hot-toast"
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Uploadcontent from '../pages/Uploadcontent'
import { Navigate, Outlet, Route,Routes } from 'react-router-dom'
const Homepage = ({url}) => {
    const dispatch=useDispatch();
    const backendemail=useSelector(state=>state.main.backendemail);
    const fetchdata=async()=>{
     try {
                const res=await axios.get(url+"/api/auth/pr",{
                    withCredentials:true
                })
                if(res.data.status){
                    dispatch(control.setbackendemail(res.data.email));
                    
                }
                else{
                    dispatch(control.setbackendemail(""));
                    
                }
            } catch (error) {
                dispatch(control.setbackendemail(""));
                
                
            }

    }
    useEffect(()=>{
      fetchdata();
    },[]);
    
  return (
    <div>
        <Navbar url={url}/>
        <hr/>
        <Outlet/>
    <Sidebar url={url}/>
   
   
   
    </div>
  )
}

export default Homepage;
