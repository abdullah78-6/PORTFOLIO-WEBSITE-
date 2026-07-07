import React, { useEffect } from 'react'
import { Navigate, Route,Routes } from 'react-router-dom'
import Login from './components/Login'
import axios from "axios"
import {useDispatch,useSelector} from "react-redux"
import { control } from './store/slice'
import Homepage from './components/Homepage'
const App = () => {
  const backendurl="http://localhost:9000"
  const backendemail=useSelector(state=>state.main.backendemail);
  const dispatch=useDispatch();
  const checklogin=async()=>{
     try {
                const res=await axios.get(backendurl+"/api/auth/pr",{
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
      checklogin();
    },[]);
  
  return (
    <div>
      <Routes>
        <Route path="/" element={backendemail?<Homepage url={backendurl}/>:<Navigate to="/login"/>}></Route>
        <Route path="/login" element={!backendemail?<Login url={backendurl}/>:<Navigate to="/"/>}></Route>
      </Routes>
     </div>
  )
}

export default App

