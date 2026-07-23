import React, { useEffect } from 'react'
import axios from "axios"
import toast from "react-hot-toast"
import { control } from '../store/slice'
import {useDispatch,useSelector} from "react-redux"
import SlotCounter from 'react-slot-counter';
const Dashboard = ({url}) => {
  const Totalviews=useSelector(state=>state.main.Websiteviews)
  const achivements=useSelector(state=>state.main.totalachievements);
  const education=useSelector(state=>state.main.totaleducation);
  const totalskills=useSelector(state=>state.main.totalskills);
  const totalprojects=useSelector(state=>state.main.totalprojects);
  const totalcontacts=useSelector(state=>state.main.totalcontacts);
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
const Fecthdata=async()=>{
  try {
    const res=await axios.get(url+"/api/chk/getdash",{
      withCredentials:true,
    })
    if(res.data.status){
      dispatch(control.settotalachievements(res.data.tachive));
      dispatch(control.settotaleducation(res.data.tedu));
      dispatch(control.settotalskills(res.data.tskill));
      dispatch(control.settotalprojects(res.data.tpro));
      dispatch(control.settotalcontacts(res.data.tcontact));

    }
    else{
      console.log("Someting wrong on a server");

    }
  } catch (error) {
    console.log("internal server error ");
    
  }
}
useEffect(()=>{
  Fecthdata();
},[]);
  return (
  <div className="min-h-screen     text-white">

    

    <div className=" p-9">
      <h1 className="text-4xl font-bold">
        Dashboard <span className="text-violet-500">Overview</span>
      </h1>

      <p className="text-slate-400 mt-2 text-lg">
        Monitor your portfolio statistics and analytics.
      </p>
    </div>

    

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 p-5 ">

    

      <div className="rounded-3xl border border-slate-700 bg-[#1e293b]/70 backdrop-blur-md p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]">

        <h3 className="text-slate-400 uppercase tracking-widest text-sm">
          Total Visitors
        </h3>

        <div className="mt-6 text-center">

          <div className="text-6xl font-black text-violet-400">
            <SlotCounter value={Totalviews ?? 0} />
          </div>

          <button
            onClick={Resetviews}
            className="mt-8 rounded-xl bg-violet-600 px-6 py-3 font-semibold transition hover:bg-violet-500 hover:scale-105 active:scale-95"
          >
            Reset Views
          </button>

        </div>

      </div>

    

      <div className="rounded-3xl border border-slate-700 bg-[#1e293b]/70 backdrop-blur-md p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]">

        <h3 className="text-slate-400 uppercase tracking-widest text-sm">
          Achievements
        </h3>

        <div className="text-center mt-8">

          <div className="text-6xl font-black text-purple-400">
            <SlotCounter value={achivements ?? 0} />
          </div>

        </div>

      </div>



      <div className="rounded-3xl border border-slate-700 bg-[#1e293b]/70 backdrop-blur-md p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]">

        <h3 className="text-slate-400 uppercase tracking-widest text-sm">
          Projects
        </h3>

        <div className="text-center mt-8">

          <div className="text-6xl font-black text-cyan-400">
            <SlotCounter value={totalprojects ?? 0} />
          </div>

        </div>

      </div>

    

      <div className="rounded-3xl border border-slate-700 bg-[#1e293b]/70 backdrop-blur-md p-7 transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.35)]">

        <h3 className="text-slate-400 uppercase tracking-widest text-sm">
          Education
        </h3>

        <div className="text-center mt-8">

          <div className="text-6xl font-black text-green-400">
            <SlotCounter value={education ?? 0} />
          </div>

        </div>

      </div>

    

      <div className="rounded-3xl border border-slate-700 bg-[#1e293b]/70 backdrop-blur-md p-7 transition duration-300 hover:-translate-y-2 hover:border-pink-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]">

        <h3 className="text-slate-400 uppercase tracking-widest text-sm">
          Contacts
        </h3>

        <div className="text-center mt-8">

          <div className="text-6xl font-black text-pink-400">
            <SlotCounter value={totalcontacts ?? 0} />
          </div>

        </div>

      </div>

    

      <div className="rounded-3xl border border-slate-700 bg-[#1e293b]/70 backdrop-blur-md p-7 transition duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-[0_0_30px_rgba(250,204,21,0.35)]">

        <h3 className="text-slate-400 uppercase tracking-widest text-sm">
          Skills
        </h3>

        <div className="text-center mt-8">

          <div className="text-6xl font-black text-yellow-400">
            <SlotCounter value={totalskills ?? 0} />
          </div>

        </div>

      </div>

    </div>

  </div>
);
}

export default Dashboard
