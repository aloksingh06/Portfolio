import React from "react";

import "remixicon/fonts/remixicon.css";
import Home from "./Home";
import ProjectSection from "./ProjectSection";
import { Link } from "react-scroll";

function Footer() {
  const logo = [
    { name: "LinkedIn", url: "ri-linkedin-fill", link:"https://www.linkedin.com/in/alok-singh-741128207?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Github", url: "ri-github-line", link:"https://github.com/aloksingh06"},
    { name: "Instagram", url: "ri-instagram-line", link:"https://www.instagram.com/alok_maravi?igsh=MTV4emlreDh0ZXFxNQ==" },
    { name: "Whatsapp", url: "ri-whatsapp-line", link:"https://wa.me/+918839120205" },
    { name: "Twitter", url: "ri-twitter-fill" },
    { name: "Discord", url: "ri-discord-line" },
  ];

  return (
    <div className="w-full  bg-gradient-to-r to-[#001233] via-[#001233] from-[rgba(0,0,0,5)]">
      <div className="max-w-screen-lg mx-auto pt-10 flex pb-16 border-b-2">
        <div className="w-[60%] p-10 ">
          <h1 className="text-8xl font-semibold">Follow Me</h1>
        </div>
        <div className="w-[40%] flex gap-10 pt-14 pl-20  flex-wrap">
          {logo.map((val, index) => (
            <a
             target="_blank"
              href={val.link}
              className=" w-fit h-fit p-2 flex justify-center items-centere rounded-full bg-blue-300 "
            >
              <i class={`${val.url} text-5xl  text-blue-900`}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="w-full flex max-w-screen-lg justify-between m-auto mt-7 pb-10">
        <h1 className="logo_font text-3xl  w-40">Alok Singh</h1>
        <div className=" flex gap-10">
          <Link to="home" smooth={true} duration={500} className="">
            Home
          </Link>
          <Link to="projects" smooth={true} duration={500} className="">
            Projects
          </Link>
          <Link to="skills" smooth={true} duration={500} className="">
            Skills
          </Link>
          <Link to="about" smooth={true} duration={500} className="">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
