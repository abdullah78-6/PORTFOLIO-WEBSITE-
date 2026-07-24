import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaReact,
} from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";

const workData = [
  {
    icon: <FaReact />,
    title: "Frontend Development",
    description:
      "Building modern, responsive, and interactive user interfaces using React, Tailwind CSS, and JavaScript.",
  },
  {
    icon: <FaDatabase />,
    title: "Backend Development",
    description:
      "Creating secure REST APIs with Node.js, Express.js, MongoDB, JWT Authentication, and Cloudinary.",
  },
  {
    icon: <TbBrandJavascript />,
    title: "JavaScript & DSA",
    description:
      "Strong understanding of JavaScript fundamentals, Data Structures, Algorithms, and problem solving.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Projects",
    description:
      "Developing complete MERN applications with authentication, dashboards, file uploads, and deployment.",
  },
  {
    icon: <MdOutlineDesignServices />,
    title: "UI/UX Design",
    description:
      "Designing beautiful, responsive, and user-friendly interfaces focused on performance and accessibility.",
  },
  {
    icon: <FaCode />,
    title: "Clean Code",
    description:
      "Writing scalable, maintainable, and reusable code following best development practices.",
  },
];

const OurWork = () => {
  return (
    <section className="w-full py-24 px-6 lg:px-20 bg-transparent font-semibold mt-0">
      {/* Heading */}

      <div className="text-center mb-16">
        <p className="uppercase tracking-[8px] text-[#5DF8D8] text-sm">
          What I Do
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
          My <span className="text-[#D91656]">Expertise</span>
        </h2>

        <div className="w-28 h-1 bg-gradient-to-r from-[#D91656] to-[#5DF8D8] mx-auto rounded-full mt-6"></div>

        <p className="text-gray-400 max-w-2xl mx-auto mt-6">
          I build fast, scalable, and visually appealing web applications using
          modern technologies while keeping user experience at the center.
        </p>
      </div>

      {/* Cards */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {workData.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#5DF8D8] hover:shadow-[0_0_35px_rgba(93,248,216,0.25)]"
          >
            {/* Icon */}

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#D91656] to-[#5DF8D8] flex justify-center items-center text-3xl text-white mb-6 group-hover:rotate-12 transition-all duration-500">
              {item.icon}
            </div>

            {/* Title */}

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#5DF8D8] transition">
              {item.title}
            </h3>

            {/* Description */}

            <p className="text-gray-400 leading-7">
              {item.description}
            </p>

            {/* Glow */}

            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#D91656]/10 to-[#5DF8D8]/10 transition duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWork;