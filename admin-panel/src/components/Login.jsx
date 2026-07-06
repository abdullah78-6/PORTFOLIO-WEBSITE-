import React from 'react'
import axios from "axios"
import {toast} from "react-hot-toast"
import {useDispatch,useSelector} from "react-redux"
import { control } from '../store/slice'
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {useNavigate} from "react-router-dom"
const Login=({url}) => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const logininfo2=useSelector(state=>state.main.logininfo2);
    const paswordhide=useSelector(state=>state.main.passwordhide);
    const backendemail=useSelector(state=>state.main.backendemail);
    const onchangehandler=(event)=>{
        dispatch(control.setlogininfo2({
            name:event.target.name,
            value:event.target.value
        }))
        

        

    }
    const Onsubmit2=async(e)=>{
        e.preventDefault();
         try {
            const response=await axios.post(url+"/api/auth/log",logininfo2,{
            withCredentials:true    
            });
                
            if(!response.data.status){
          toast.error(response.data.result);
            dispatch(control.setbackendemail(response.data.email));
            return ;
            }
            toast.success(response.data.result);
            // navigate("/");
          
            const res=await axios.get(
                url+"/api/auth/pr",
                {withCredentials:true}
            );
            if(res.data.status){
                dispatch(control.setbackendemail(res.data.email));
            }
            else{
                dispatch(control.setbackendemail(""));
                toast.error("AUTHENTICATION FAILED AFTER LOGIN");

            }
         
        } catch (error) {
            console.log(error);
        toast.error("SERVER ERROR");
            dispatch(control.setbackendemail(""));
            
        }
       
      

    }
  return (
    <div>
        <div>
            <form onSubmit={Onsubmit2}>
                
                <div>
                        <label htmlFor="email">email</label>
                    </div>
                    <div>
                        <input onChange={onchangehandler} name="email" value={logininfo2.email} type="text" placeholder='enter-email' required />
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                    </div>
                    <div>
                        {paswordhide?
                        <div>
                        <FaRegEye onClick={()=>dispatch(control.setpasswordhide(false))}/>
                            </div>:
                            <div>
                        <FaEyeSlash onClick={()=>dispatch(control.setpasswordhide(true))}/>    
                            </div>}
                    </div>
                    <div>
                        <input onChange={onchangehandler} name="password" value={logininfo2.password} type={`${paswordhide?"password":"text"}`} placeholder='enter-password' required />
                    </div>
                    <div>
                        <button type="submit">login</button>
                    </div>
                    <h1>{backendemail}</h1>
                
            </form>
        </div>
      
    </div>
  )
}

export default Login
