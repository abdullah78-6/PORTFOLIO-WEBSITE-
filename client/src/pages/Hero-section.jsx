import React, { useEffect } from 'react'
import { control } from '../store/slice';
import {useDispatch,useSelector} from "react-redux"
import axios from "axios"
import {toast} from "react-hot-toast"
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoLogoGithub, IoMdDownload } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
const Hero = ({url})=> {
    const dispatch=useDispatch();
    const Herosection=useSelector(state=>state.main.Herosection);
    const Fetch=async()=>{
        try {
            const res=await axios.get(url+"/api/admin/gethero",{
                withCredentials:true
            })
            if(res.data.status){
                dispatch(control.setHerosection(res.data.herolist));
                 console.log(res.data.herolist);

            }
            else{
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log("fetching hero section error ",error);
            
        }


    }
    useEffect(()=>{
        Fetch();
       
    },[]);
    const Downloadresume=async()=>{
      try {
        const res=await axios.get(url+"/api/admin/get_resume",{
          withCredentials:true
        })
        if(res.data.status){
          const pdfurl=res.data.resumelist[0].image;
          window.open(pdfurl,"_blank");
      }
        else{
          toast.error(res.data.message);
        }
        
      } catch (error) {
        console.log("download resume error",error);
        
      }


    }
  
    return (
  <div className="font-semibold mt-10 px-6 lg:px-20 min-h-[85vh] flex items-center">
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full gap-16">

      {/* Left Content */}
      <div className="flex-1 space-y-8">

        {Herosection.map((i) => {
          const name = "ABDULLAH QIDWAI";
          const role = "Software Developer";
          const nameparts = i.mainheading.split(name);

          let beforerole = "";
          let afterrole = "";

          if (nameparts.length > 1) {
            const roleparts = nameparts[1].split(role);
            beforerole = roleparts[0];
            afterrole = roleparts[1] || "";
          }

          return (
            <div key={i._id} className='font-semibold'>
              <h1 className="text-4xl sm:text-5xl lg:text-4xl leading-relaxed break-word  text-white font-semibold">
                {nameparts[0]}
                <span className="text-[#D91656]">{name}</span>
                {beforerole}
                <span className="text-[#5DF8D8]">{role}</span>
                {afterrole}
              </h1>
            </div>
          );
        })}

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-3xl  text-cyan-500">

          <a
            href="#"
            className="hover:text-[#5DF8D8] duration-300 hover:scale-110"
          >
            <IoLogoGithub />
          </a>

          <a
            href="#"
            className="hover:text-[#5DF8D8] duration-300 hover:scale-110"
          >
            <SiLeetcode />
          </a>

          <a
            href="#"
            className="hover:scale-110 duration-300"
          >
          <i className="devicon-linkedin-plain hover:text-[#5DF8D8]"></i>
          </a>

          <a
            href="#"
            className="hover:text-[#5DF8D8] duration-300 hover:scale-110"
          >
            <GrInstagram />
          </a>
          
        
          

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-5">

          <button className="flex items-center gap-2 bg-[#5DF8D8] text-black px-7 py-3 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-[#5DF8D8]/40 duration-300">
            CONTACT ME
            <RiContactsFill />
          </button>

          <button onClick={Downloadresume} className="flex items-center gap-2 border-2 border-[#D91656] text-[#D91656] px-7 py-3 rounded-full hover:bg-[#D91656] hover:text-white hover:scale-105 duration-300">
            GET RESUME
            <IoMdDownload />
          </button>

        </div>

      </div>

      {/* Hero Image */}
      <div className="  bg-transparent flex justify-center flex-1">

        {Herosection.map((i) => (
          <img
            key={i._id}
            className="  grayscale hover:grayscale-0 h-90 w-90  border-8 border-[#5DF8D8]   rounded-full object-cover shadow-2xl shadow-[#5DF8D8]/20 hover:scale-105 duration-500"
            src={i.image}
            alt="Hero"
          />
        ))}

      </div>

    </div>
  </div>
);
    
  
}

export default Hero;

