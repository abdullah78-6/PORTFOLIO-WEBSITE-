import React, { useEffect } from 'react'
import { control } from './store/slice'
import {useDispatch} from "react-redux"
import { useSelector } from 'react-redux'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './pages/Hero-section'
import OurWork from './pages/Ourwork'
import About from './pages/About'
import Education from './pages/Education'
import Achivement from './pages/Achivement'
import axios from "axios"
import { useRef } from 'react'
import { FaArrowCircleUp } from "react-icons/fa";
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Loader from './pages/Loader'
const App = () => {
  const dispatch=useDispatch();
  const serverurl="http://localhost:9000"
  const scroll=useSelector(state=>state.main.scroll);
  const skills=useSelector(state=>state.main.skills);
  const projectlist=useSelector(state=>state.main.projectlist);
  const achivement=useSelector(state=>state.main.achivement);
  const education=useSelector(state=>state.main.education);
  const Herosection=useSelector(state=>state.main.Herosection);
  const sent=useRef(false);
  const Fetch4=async()=>{
        try {
            const res=await axios.get(serverurl+"/api/admin/gethero",{
                withCredentials:true
            })
            if(res.data.status){
                dispatch(control.setHerosection(res.data.herolist));
                

            }
            else{
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log("fetching hero section error ",error);
            
        }


    }
  const Fetchviews=async()=>{
  try {
    const res=await axios.post(serverurl+"/api/monitor/addv",
      {},
    {
      withCredentials:true,
    }
    );
  } catch (error) {
    console.error('Error WEBSITE VIEW:', error.message);
  }

 }
 const FetchSkills = async () => {
    try {
      const res = await axios.get(serverurl + "/api/admin/getskill", {
        withCredentials: true,
      });

      if (res.data.status) {
        dispatch(control.setskills(res.data.skilllist));
      } else {
        console.log("Skill fetching error");
      }
    } catch (error) {
      console.log("Fetching skills error", error);
    }
  };
  const Fetch = async () => {
    try {
      const res = await axios.get(serverurl + "/api/admin/getproject", {
        withCredentials: true,
      });

      if (res.data.status) {
        dispatch(control.setprojectlist(res.data.projectlist));
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const Fetch2=async()=>{
   try {
            const res=await axios.get(serverurl+"/api/client/get_achive",{
                withCredentials:true
            })
            if(res.data.status){
                dispatch(control.setachivement(res.data.answer));
            }
            else{
                toast.error("Problem In Server");
            }
        } catch (error) {
            console.log("achivement error",error);
            
        }

    }
    const Fetch3=async()=>{
        try {
            const res=await axios.get(serverurl+"/api/client/get_education",{
                withCredentials:true
            })
            if(res.data.status){
                dispatch(control.seteducation(res.data.answer));
            }
            else{
                toast.error("Problem In Server");
            }
        } catch (error) {
            console.log("education error",error);
            
        }

    }

  useEffect(() => {
    Fetch();
    FetchSkills();
    Fetch2();
    Fetch3();
    Fetch4();
  }, []);

 useEffect(()=>{
  if(sent.current) {
    return ;
  }
  sent.current=true;
  Fetchviews();
 },[]);
 useEffect(()=>{
  const handlescroll=()=>{
    dispatch(control.setscroll(window.scrollY));

  };
  window.addEventListener("scroll",handlescroll);
  return ()=>{
    window.removeEventListener("scroll",handlescroll);
  }
 },[dispatch]);
const loading=skills.length===0||projectlist.length===0||education.length===0||achivement.length===0||Herosection.length===0;
return (
    <div>
     
    {loading?(<Loader/>):
    <div >
      <Navbar/>
      
     <div className=' fixed bottom-8 right-8 z-50 bg-[#aa93d4] rounded-4xl hover:scale-125 transition-all '>
     
      {scroll>=1504?<h1 className='text-4xl p-1 font-semibold    text-[#0a5388] cursor-pointer '>{<FaArrowCircleUp />}</h1>:<></>}
      </div>
    
      <Hero url={serverurl}/>
       <About/>
      <OurWork/>
      <Education url={serverurl}/>
      <Skills url={serverurl}/>
      <Projects url={serverurl}/>
      <Achivement url={serverurl}/>
      <Contact url={serverurl}/>
      <Footer />
    
     </div>} 
    </div>
    
  )
}

export default App

