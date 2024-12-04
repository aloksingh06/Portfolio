import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import background from "../assets/project/detail-background.png";
import { h1, object } from "framer-motion/client";

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const location = useLocation();
const  navigate = useNavigate()

  const data = location.state;
  console.log(data);

  const [hoverVideo, sethoverVideo] = useState(0)

  const Goback = ()=>{
    navigate(-1)
  }
  return (
    <div className="bg-gray-900 min-h-screen w-full text-white p-5">
      <div className="flex w-full ">
        <h1 className="text-5xl w-[95%] font-bold ml-[41%]">My Projects</h1>
        <div
          onClick={Goback}
          className="w-fit ml-64 cursor-pointer text-3xl hover:text-red-400 "
        >
          <i className="ri-close-line"></i>
        </div>
      </div>
      <h1 className="w-[70%] m-auto text-center text-sm font-semibold pt-10 pb-16 text-blue-200">
        Here are some of the exciting projects I've worked on, showcasing my
        skills in frontend development and web technologies. From crafting
        visually appealing user interfaces to implementing dynamic
        functionality.
      </h1>

      {/* Project Cards */}
      <div className="w-full gap-6">
        {data &&
          data.map((project, index) => (
            <motion.div
              key={index}
              className="w-[90%]  h-[50vh] m-auto rounded-lg overflow-hidden shadow-lg cursor-pointer m-5 flex mb-10 hover:bg-[#0c0c35]"
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}

              onMouseEnter={() => sethoverVideo(index)}
            onMouseLeave={() => sethoverVideo(null)}
            >
              <motion.div
              initial={{scale:0.6, opacity:0}}
              animate={{scale:1, opacity:1}}
              transition={{duration:0.5}}
              className="w-[50%] ">
             {hoverVideo === index ? (
              <video
                src={project.video}
                autoPlay
                muted
                loop
                className="rounded-lg"
              />
             ):( <img
              src={project.image}
              alt={project.name}
              className="w-full object-cover"
            />)}
              </motion.div>
              <div className="px-10 py-5 w-[50%]">
                <h2 className="text-5xl font-semibold">{project.name}</h2>
                <p className="text-gray-400 mt-2 line-clamp-3 mb-5">
                  {project.details}
                </p>
                {Object.values(project.languages).map((val, idx) => (
                  <h1 className="px-3 py-1 bg-[#9c61ff] rounded-lg inline-block m-3">
                    {val}
                  </h1>
                ))}
                <div>
                  <h1 className="w-full border-2 py-2 text-center rounded-lg mt-7 mb-3 hover:bg-[#1a177b]">
                    View Details
                  </h1>
                </div>
              </div>
            </motion.div>
          ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5, ease: [0.6, 0.0, 0.2, 1] }}
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "20px",
          }}
          className="fixed inset-0 flex flex-col items-center p-7 z-50 bg-opacity-90 w-[100%] m-auto"
        >
          <div className="flex w-full pb-10">
            <div className="w-[90%] ">
              <a
                target="_blank"
                href={selectedProject.web}
                className="text-5xl ml-[50%] border-b-2 pb-2 mb-3 text-center font-semibold hover:text-blue-200"
              >
                {selectedProject.name}
              </a>
            </div>
            <div
              onClick={() => setSelectedProject(null)}
              className="w-fit ml-64 cursor-pointer text-3xl hover:text-red-400 "
            >
              <i className="ri-close-line"></i>
            </div>
          </div>
          <div className="flex gap-5 mt-5">
            {/* Right data */}
            <div className="w-[50%]">
              <video
                src={selectedProject.video}
                autoPlay
                loop
                muted
                className="rounded-lg"
              />
            </div>
            {/* Left data */}
            <div className="w-[50%] pl-5">
              <h1 className="border-l-2 border-blue-400 px-3">
                {selectedProject.details}
              </h1>
              {selectedProject.keyPoint && (
                <div className="mt-4">
                  <h1 className="text-2xl font-semibold text-blue-300 mb-2">
                    Key Features of Website
                  </h1>
                  {Object.values(selectedProject.keyPoint).map((v, i) => (
                    <li key={i} className="text-lg">
                      {v}
                    </li>
                  ))}
                </div>
              )}
              <h1 className="text-2xl font-semibold text-blue-300 mt-4 border-t-2 p-2">
                Technologies Used
              </h1>
              {Object.values(selectedProject.languages).map((v, i) => (
                <li key={i}>{v}</li>
              ))}
              <div className="flex gap-4 mt-6">
                <a
                  target="_blank"
                  className="bg-blue-400 px-4 py-2 text-lg font-semibold rounded-lg hover:bg-blue-600"
                  href={selectedProject.web}
                  rel="noreferrer"
                >
                  <i className="ri-external-link-fill"></i> Website Link
                </a>
                <a
                  target="_blank"
                  className="bg-blue-400 px-4 py-2 text-lg font-semibold rounded-lg hover:bg-blue-600"
                  href={selectedProject.github}
                  rel="noreferrer"
                >
                  <i className="ri-github-fill mr-2"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AllProjects;
