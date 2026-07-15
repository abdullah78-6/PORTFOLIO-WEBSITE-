import React from 'react'
import { control } from '../store/slice'
import {useDispatch,useSelector} from "react-redux"
import {toast} from "react-hot-toast"
import axios from "axios"
import { MdOutlineMessage } from "react-icons/md";
const Contact = ({url}) => {
    const dispatch=useDispatch();
    const Contactdetails=useSelector(state=>state.main.Contactdetails);
    const onchangehandler=(e)=>{

        dispatch(control.setContactdetails({
            name:e.target.name,
            value:e.target.value
        }))

    }
    const Submitform=async(e)=>{
        e.preventDefault();
        try {
            const res=await axios.post(url+"/api/client/add_contact",Contactdetails,{
                                withCredentials:true
                
                
            })
            if(res.data.status){
                toast.success(res.data.message);
            }
            else{
                toast.error(res.data.message);
            }
            
        } catch (error) {
            console.log(error.message);
            
        }

    }
  return (
    <div className='text-white'>
        <h1>If you have any questions or would like to discuss a potential opportunity, please don't hesitate to contact me. I am always open to work opportunities that align with my skills, experience, and interests.</h1>
        <form onSubmit={Submitform}>
            <div>
                <div>
                    <label htmlFor='name'>your name</label>
                </div>
                <div>
                    <input onChange={onchangehandler} name="name" value={Contactdetails.name} type="text" placeholder='Full Name'required/>
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor='name'>Your Email</label>
                </div>
                <div>
                    <input onChange={onchangehandler} name="email" value={Contactdetails.email} type="email" placeholder='Email Id'required/>
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor='name'>your message</label>
                </div>
                <div>
                    <input onChange={onchangehandler} name="message" value={Contactdetails.message} type="message" placeholder=' Message 'required/>
                    
                </div>
            </div>
            <button className='bg-red-700 p-4 flex justify-center items-center gap-5' type="submit">send message<span ><MdOutlineMessage className='text-2xl' /></span></button>
        </form>
      
    </div>
  )
}

export default Contact
