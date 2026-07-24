import React, { useEffect } from "react";
import { control } from "../store/slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-hot-toast";
import { SiLeetcode } from "react-icons/si";
import { IoLogoGithub, IoMdDownload } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";

const Hero = ({ url }) => {
  const dispatch = useDispatch();
  const Herosection = useSelector((state) => state.main.Herosection);
  const mobilemenu=useSelector(state=>state.main.mobilemenu);

  const Fetch = async () => {
    try {
      const res = await axios.get(url + "/api/admin/gethero", {
        withCredentials: true,
      });

      if (res.data.status) {
        dispatch(control.setHerosection(res.data.herolist));
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log("fetching hero section error ", error);
    }
  };

  useEffect(() => {
    Fetch();
  }, []);

  const Downloadresume = async () => {
    try {
      const res = await axios.get(url + "/api/admin/get_resume", {
        withCredentials: true,
      });

      if (res.data.status) {
        const pdfurl = res.data.resumelist[0].image;
        window.open(pdfurl, "_blank");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log("download resume error", error);
    }
  };

  return (
    <div className="relative font-semibold mt-8 px-4 sm:px-6 lg:px-20 min-h-screen lg:min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className={` ${!mobilemenu?"mt-70":"mt-0"} relative flex flex-col-reverse lg:flex-row justify-center items-center w-full max-w-6xl gap-10 lg:gap-16  lg:mt-0 xl:mt-0`}>
        {/* Text Section */}
        <div className="flex-1 flex flex-col items-center text-center space-y-6 lg:space-y-8">
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
              <div key={i._id} className="font-semibold max-w-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl leading-tight tracking-tight break-words text-white font-bold">
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
          <div className="flex items-center justify-center gap-5 sm:gap-7 text-2xl sm:text-3xl text-cyan-500 flex-wrap">
            <a
              href="#"
              className="hover:text-[#5DF8D8] duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <IoLogoGithub />
            </a>

            <a
              href="#"
              className="hover:text-[#5DF8D8] duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <SiLeetcode />
            </a>

            <a
              href="#"
              className="hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <i className="devicon-linkedin-plain hover:text-[#5DF8D8]"></i>
            </a>

            <a
              href="#"
              className="hover:text-[#5DF8D8] duration-300 hover:-translate-y-1 hover:scale-110"
            >
              <GrInstagram />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#5DF8D8] text-black px-8 py-3 rounded-full font-semibold tracking-wide hover:scale-105 hover:shadow-lg hover:shadow-[#5DF8D8]/40 duration-300">
              CONTACT ME
              <RiContactsFill />
            </button>

            <button
              onClick={Downloadresume}
              className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-[#D91656] text-[#D91656] px-8 py-3 rounded-full font-semibold tracking-wide hover:bg-[#D91656] hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-[#D91656]/40 duration-300"
            >
              GET RESUME
              <IoMdDownload />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center flex-1">
          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-[22rem] lg:h-[22rem] rounded-full bg-gradient-to-br from-[#D91656]/30 to-[#5DF8D8]/30 blur-3xl"></div>

          {Herosection.map((i) => (
            <img
              key={i._id}
              src={i.image}
              alt="Hero"
              className="relative grayscale hover:grayscale-0 h-56 w-56 sm:h-72 sm:w-72 lg:h-[22rem] lg:w-[22rem] border-4 sm:border-8 border-[#5DF8D8] rounded-full object-cover shadow-2xl shadow-[#5DF8D8]/20 hover:scale-105 duration-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;