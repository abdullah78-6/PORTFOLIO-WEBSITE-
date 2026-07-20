import React from 'react'
import { control } from '../store/slice'
import { useSelector } from "react-redux"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const About = () => {
  const herosection = useSelector(state => state.main.Herosection);

  return (
    <div className="flex flex-col justify-between items-center font-semibold capitalize px-6 lg:px-20 py-16">
        
    <div className="flex  lg:flex-row items-center justify-between gap-12 ">
        

        {/* Text */}
        <div className=" flex justify-center flex-col">
            <h1 className=" text-start text-4xl md:text-5xl text-[#D91656] mb-6">
        About Me
      </h1>
          {herosection.map((i, index) => (
            <p
              key={index}
              className="text-[#5DF8D8] text-center lg:text-left text-lg leading-9 max-w-3xl"
            >
              {i.Bio}
            </p>
          ))}
        </div>

        {/* Animation */}
        <div className=" flex justify-between items-center">
          <DotLottieReact
            className='text-9xl w-[450px]'
            src="Coder.lottie"
            //   src="https://lottie.host/6bc9dbd0-69a8-4a58-a9db-766d5cc6d780/GQLE6unrmB.lottie"
            loop
            autoplay
        />
        </div>

      </div>
    </div>
  );
};

export default About;