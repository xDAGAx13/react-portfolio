"use client";
import { PROJECTS } from "@/constants";
import React from "react";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ y: -70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.img
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={project.image}
                width={150}
                className="mb-6 rounded"
                height={150}
              ></motion.img>
            </div>
            <motion.div 
            initial={{x:100, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:0.5}}
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-semibold text-purple-600"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
