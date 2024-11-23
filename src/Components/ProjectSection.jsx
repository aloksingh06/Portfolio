
import React, { useState } from "react";
import ProImage1 from "../assets/project/project1.png";
import EpicFrame from "../assets/project/EpicFrame.mp4";

function ProjectSection() {
  const data = [
    { name: "EpicFrame" },
    { name: "Obys Agency" },
    { name: "Refokus" },
    { name: "exoape" },
    { name: "Dribble" },
  ];

  // State to track which div is hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div id="projects" className="w-full  bg-gradient-to-r to-[#001233] via-[#001233] from-[rgba(0,0,0,5)]">
        <h1 className="text-center text-5xl font-semibold py-10">Projects</h1>
      <div className="flex justify-center items-center w-[80%] m-auto  flex-wrap">
        {data.map((val, idx) => (
          <div
            key={idx}
            className={` relative transition-all duration-300 ease-in-out rounded-lg overflow-hidden cursor-pointer border-2 border-gray-300 bg-gradient-to-r to-[#654ea3] from-[#eaafc8] ${
              hoveredIndex === idx ? "w-[24rem] h-[20rem]" : "w-[21rem] h-[14rem] mx-8 my-12 p-5"
            }`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === idx ? (
              <>
                <video
                  src={EpicFrame}
                  autoPlay
                  loop
                  muted
                  className="w-full h-2/3 object-fit"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white">
                  <h2 className="text-center text-lg font-bold">{val.name}</h2>
                  <p className="mt-1 text-sm">
                    This is the description that appears on hover.
                  </p>
                </div>
              </>
            ) : (
              <>
                <img
                  src={ProImage1}
                  alt="Placeholder"
                  className="w-full h-full object-cover"
                />
                <h2 className="absolute bottom-2 left-0 right-0 text-center text-white bg-black bg-opacity-50 py-1">
                  {val.name}
                </h2>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
