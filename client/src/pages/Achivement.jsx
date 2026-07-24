import React, { useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { control } from "../store/slice";
import { FaTrophy } from "react-icons/fa6";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Achivement = ({ url }) => {
  const dispatch = useDispatch();
  const achivement = useSelector((state) => state.main.achivement);

  const Fetch = async () => {
    try {
      const res = await axios.get(url + "/api/client/get_achive", {
        withCredentials: true,
      });

      if (res.data.status) {
        dispatch(control.setachivement(res.data.answer));
      } else {
        toast.error("Problem In Server");
      }
    } catch (error) {
      console.log("achievement error", error);
    }
  };

  useEffect(() => {
    Fetch();
  }, []);

  return (
    <div className="font-semibold mt-12 px-4 md:px-8">
      {/* Heading */}
      <h1 className="text-center capitalize text-4xl md:text-5xl lg:text-6xl font-bold text-[#D91656]">
        Achievements
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 mt-12">
        {/* Lottie */}
        <div className="flex justify-center">
          <DotLottieReact
            className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] object-contain"
            src="Coder.lottie"
            loop
            autoplay
          />
        </div>

        {/* Cards */}
        <div className="w-full lg:w-auto">
          {achivement.map((i, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#17153B] to-[#1B3C53]
              border border-[#240750] hover:border-[#5DF8D8]
              rounded-2xl
              p-5 md:p-6
              shadow-lg hover:shadow-cyan-500/20
              transition-all duration-300
              hover:-translate-y-2
              text-center
              flex flex-col items-center gap-5
              w-full max-w-3xl
              mb-5"
            >
              <FaTrophy className="text-5xl md:text-6xl text-amber-400" />

              <h1 className="text-lg md:text-2xl font-semibold text-[#5DF8D8] break-words">
                {i.headline}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#bab9e2] capitalize break-words">
                {i.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achivement;