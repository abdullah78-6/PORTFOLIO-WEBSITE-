import React from 'react'
import { control } from '../store/slice'
import { useSelector } from "react-redux"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const About = () => {
  const herosection = useSelector(state => state.main.Herosection);

  return (
    <div className="relative flex flex-col items-center justify-center px-6 py-20 md:py-28 max-w-6xl mx-auto overflow-hidden">
      <span className="relative text-xs md:text-sm font-semibold tracking-[0.3em] text-[#5DF8D8] uppercase">
        Who we are
      </span>

      <h1 className="relative m-0 mb-20  text-4xl md:text-6xl font-extrabold text-center text-[#D91656]">
        About Us
      </h1>

      

      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12 shadow-[0_0_40px_-10px_rgba(217,22,86,0.25)]">

        <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left max-w-2xl">
          {herosection.map((i, index) => (
            <p
              key={index}
              className="text-[#5DF8D8] text-4xl md:text-xl leading-relaxed"
            >
              {i.Bio}
            </p>
          ))}
        </div>

        <div className="relative flex items-center justify-center shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D91656]/40 to-[#5DF8D8]/40 "></div>
          <div className="relative rounded-full border border-white/10 bg-white/5 p-4">
            <DotLottieReact
              className="w-[240px] h-[240px] md:w-[320px] md:h-[320px] object-contain"
              src="Coder.lottie"
              //   src="https://lottie.host/6bc9dbd0-69a8-4a58-a9db-766d5cc6d780/GQLE6unrmB.lottie"
              loop
              autoplay
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;