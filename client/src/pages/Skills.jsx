import React, { useEffect, useRef, useState } from "react";
import { control } from "../store/slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { motion } from "motion/react";

const Skills = ({ url }) => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.main.skills);

  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);

  const FetchSkills = async () => {
    try {
      const res = await axios.get(url + "/api/admin/getskill", {
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

  useEffect(() => {
    FetchSkills();
  }, []);

  useEffect(() => {
    if (trackRef.current) {
      setDistance(trackRef.current.scrollWidth / 2);
    }
  }, [skills]);

  if (!skills.length) {
    return (
      <div className="mt-10 text-center text-[#5DF8D8] text-xl">
        Loading Skills...
      </div>
    );
  }

  const allSkills = [...skills, ...skills];

  return (
    <div className="font-semibold mt-10">
      <h1 className="text-3xl capitalize text-center text-[#D91656] mb-8">
        Skills
      </h1>

      <div className="overflow-hidden relative">
        <motion.div
          ref={trackRef}
          className="flex gap-8 md:gap-12 w-max transform-gpu will-change-transform"
          animate={{
            x: [0, -distance],
          }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {allSkills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0
              w-[150px]
              sm:w-[170px]
              md:w-[190px]
              rounded-2xl
              border border-[#5DF8D8]/30
              bg-white/5
              backdrop-blur-md
              shadow-lg
              p-5
              mt-3
              flex
              flex-col
              items-center
              justify-center"
            >
              <h1 className="text-[#5DF8D8] text-xl text-center">
                {skill.name}
              </h1>

              <img
                src={skill.image}
                alt={skill.name}
                loading="lazy"
                className="w-20 h-20 md:w-24 md:h-24 object-contain mt-4"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;