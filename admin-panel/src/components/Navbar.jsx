import {Link} from "react-router-dom"
import { control } from "../store/slice";
import {useDispatch,useSelector} from "react-redux"
import axios from "axios"
import toast from "react-hot-toast"
const Navbar=({url})=>{
    const dispatch=useDispatch();
    const backendemail=useSelector(state=>state.main.backendemail);
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
    return <div className="capitalize bg-purple-950 p-4 flex justify-between items-center font-semibold">
        <div className="flex justify-items-start items-center flex-wrap ">
        <Link onClick={()=>dispatch(control.setnavbarclass(""))} to="/" className="text-2xl capitalize text-white" >Personal-<span className="text-2xl capitalize text-purple-400">Portfolio</span></Link>
       
        
        </div>
         <ul className="flex justify-end items-center gap-9 capitalize font-semibold md:hidden xl:hidden lg:hidden flex-wrap ">
            <Link to="/" className="text-pink-100 bg-purple-600 p-2 rounded-3xl hover:scale-110 hover:underline transition ease-in-out duration-200 text-sm cursor-pointer ">Dashboard</Link>
            <Link className="text-pink-100 bg-purple-600 p-2 rounded-3xl hover:scale-110 hover:underline transition ease-in-out duration-200 text-sm cursor-pointer " to="/upload">Upload Section</Link>
            <Link className="text-pink-100 bg-purple-600 p-2 rounded-3xl hover:scale-110 hover:underline transition ease-in-out duration-200 text-sm cursor-pointer " to="/skills">Skills</Link>
            <Link className="text-pink-100 bg-purple-600 p-2 rounded-3xl hover:scale-110 hover:underline transition ease-in-out duration-200 text-sm cursor-pointer " to="/resume">Resume</Link>
            <Link className="text-pink-100 bg-purple-600 p-2 rounded-3xl hover:scale-110 hover:underline transition ease-in-out duration-200 text-sm cursor-pointer " to="/achivements">Achievements</Link>
            <Link className="text-pink-100 bg-purple-600 p-2 rounded-3xl hover:scale-110 hover:underline transition ease-in-out duration-200 text-sm cursor-pointer " to="/education">Education</Link>
            <Link className="text-pink-100 bg-purple-600 p-2 rounded-3xl hover:scale-110 hover:underline transition ease-in-out duration-200 text-sm cursor-pointer " to="/contacts">Contacts</Link>
            <Link className="text-pink-100 bg-purple-600 p-2 rounded-3xl hover:scale-110 hover:underline transition ease-in-out duration-200 text-sm cursor-pointer " to="/projects">Projects</Link>
            <Link className="text-pink-100 bg-purple-600 p-2 rounded-3xl hover:scale-110 hover:underline transition ease-in-out duration-200 text-sm cursor-pointer " to="/herosection">Hero Section Content</Link>
            {!backendemail? <Link to="/login" className="bg-blue-700 text-white p-2 rounded-3xl hover:bg-blue-900 transition ease-in-out duration-200" >LOGIN</Link>:<button className="bg-red-700 text-white p-2 rounded-3xl hover:bg-red-900 transition ease-in-out duration-200" onClick={Logout}>LOGOUT</button>} 
             {backendemail && (
    <div className="flex items-center justify-between gap-3 cursor-poiter flex-wrap">
      <div>
        <p className="text-sm text-white/80">Welcome</p>
        <h2 className="text-lg font-bold text-white">
          Abdullah
        </h2>
      </div>

      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-purple-950 font-bold text-lg shadow-md cursor-pointer">
        {backendemail.slice(0, 1).toUpperCase()}
      </div>
    </div>
  )}
       </ul>
      {backendemail && (
    <div className="lg:flex lg:items-center lg:justify-between lg:gap-3 lg:cursor-poiter lg:flex-wrap hidden   xl:flex xl:items-center xl:justify-between xl:gap-3 xl:cursor-poiter xl:flex-wrap        md:flex md:items-center md:justify-between md:gap-3 md:cursor-poiter md:flex-wrap">
      <div>
        <p className="text-sm text-white/80">Welcome</p>
        <h2 className="text-lg font-bold text-white">
          Abdullah
        </h2>
      </div>

      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-purple-950 font-bold text-lg shadow-md cursor-pointer ">
        {backendemail.slice(0, 1).toUpperCase()}
      </div>
    </div>
  )}
        
    </div>

}
export default Navbar;