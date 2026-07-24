import React, { useEffect } from "react";
import { control } from "../store/slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "motion/react";

const Projects = ({ url }) => {
  const dispatch = useDispatch();
  const projectlist = useSelector((state) => state.main.projectlist);

  const Fetch = async () => {
    try {
      const res = await axios.get(url + "/api/admin/getproject", {
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

  useEffect(() => {
    Fetch();
  }, []);

  return (
    <section className="py-16 px-5 capitalize py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
    

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold mb-14"
        >
          <span className="text-[#D91656]">My </span>
          <span className="text-[#5DF8D8]">Projects</span>
        </motion.h1>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {projectlist.map((i, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-[#0f172a]/70 backdrop-blur-lg p-7 transition-all duration-500 hover:-translate-y-3 hover:border-[#D91656] hover:shadow-[0_0_35px_rgba(217,22,86,0.35)]"
            >
    
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#D91656]/20 blur-3xl group-hover:bg-[#5DF8D8]/20 transition-all duration-700"></div>

    

              <h2 className="relative text-2xl font-bold text-[#5DF8D8] mb-5">
                {i.name}
              </h2>

    

              <p className="relative text-slate-300 leading-7 text-[15px] mb-8">
                {i.description}
              </p>

    

              <a
                href={i.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#D91656] to-[#5DF8D8] px-6 py-3 font-semibold text-black transition duration-300 hover:scale-105"
              >
                View Project
                <FaExternalLinkAlt size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;