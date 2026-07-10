import React, { useEffect } from 'react'
import axios from "axios"
import {toast} from "react-hot-toast"
import {useDispatch,useSelector} from "react-redux"
import { control } from '../store/slice'
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {useNavigate} from "react-router-dom"
import { GoogleAuthProvider , signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase'
import { FcGoogle } from "react-icons/fc";
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
    
    
    const Googlelogin=async()=>{
        const provider= new GoogleAuthProvider();
        const result=await signInWithPopup(auth,provider);
        
        try {
            const res=await axios.post(url+"/api/auth/google_signin",{
               
                email:result.user.email
            },
            {
                withCredentials:true
            }
        );
            if(res.data.status){
                
                dispatch(control.setbackendemail(res.data.email));
                toast.success("Google Login Successful");
            }
            else{
                toast.error(res.data.message);
            }
            
        } catch (error) {
            console.log("google login server error",error);
            toast.error(error.message);
            
        }
        

    }
  return (
   
    <div className='font-semibold text-2xl capitalize  text-purple-950 min-h-screen  flex justify-center items-center    px-4 flex-col gap-6'>
        <div className='bg-white px-3 py-1 rounded-4xl'>
    <h1 className='text-xl uppercase text-purple-950'>portfolio admin panel </h1>    
    </div>
    
            
    
        <div className='flex justify-center items-center'>
            <form onSubmit={Onsubmit2} className='flex  justify-center items-center flex-col gap-5 w-full max-w-md bg-[#916BBF] shadow-2xl rounded-lg p-8 border border-gray-200 '>
                <div className='flex justify-center items-center gap-3 flex-col'>
                <div >
                        <label className='block text-xl' htmlFor="email">email</label>
                    </div>
                    <div>
                        <input className='border-2 w-full px-4 py-1 border-black rounded-4xl  focus:ring-2  focus:ring-purple-950 outline-none cursor-pointer' onChange={onchangehandler} name="email" value={logininfo2.email} type="email" placeholder='enter-email' required />
                    </div>
                    </div>
                    <div className='flex justify-center items-center gap-3  flex-col'>
                    <div>
                        <label className='block text-xl' htmlFor="password">password</label>
                    </div>
                    
                    

                    
                    
                    
                    <div className=' relative flex justify-center items-center gap-2 '>
                        <input className='border-2 w-full px-4 py-1 border-black rounded-4xl p-2 focus:ring-2  focus:ring-purple-950 outline-none cursor-pointer' onChange={onchangehandler} name="password" value={logininfo2.password} type={`${paswordhide?"password":"text"}`} placeholder='enter-password' required />
                        <div className='absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-xl'>
                            {paswordhide?
                        <div >
                        <FaRegEye onClick={()=>dispatch(control.setpasswordhide(false))}/>
                            </div>:
                            <div>
                        <FaEyeSlash onClick={()=>dispatch(control.setpasswordhide(true))}/>    
                            </div>}
                            </div>
                    
                    </div>
                    </div>
                    <div className='flex justify-center items-center gap-3 flex-col '>
                    <div>
                        <button className='bg-gray-900 text-white px-12 py-2 rounded-2xl capitalize text-xl hover:scale-110 transition ease-in-out duration-200 ' type="submit">login</button>
                    </div>
                    <div>
                        <button type="button" onClick={Googlelogin} className=' bg-purple-950 text-white px-13 py-3 rounded-2xl  capitalize hover:scale-110 transition ease-in-out duration-200 flex justify-center items-center gap-4 text-sm '>
                            <span>
                             < FcGoogle className='text-xl'/> 
                             </span>
                             signin with google</button>
                    </div>
                    </div>
                    
                
            </form>
        </div>
      
    </div>
  )
}

export default Login
