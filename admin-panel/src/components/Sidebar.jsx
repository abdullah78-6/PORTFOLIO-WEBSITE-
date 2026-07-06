import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import axios from "axios"
import { control } from '../store/slice'
const Sidebar = ({url}) => {
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
  return (
    <div>
        Sidebar
        <h1 className='text-6xl p-3'>{backendemail.slice(0,1)}</h1>
        <button onClick={Logout} className='bg-red-900'>LOGOUT </button>
      
    </div>
  )
}

export default Sidebar
