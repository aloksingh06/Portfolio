import React from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

function Footer() {
  const logo = [
    { name: "LinkedIn", url: "ri-linkedin-fill" },
    { name: "Github", url: "ri-github-line" },
    { name: "Instagram", url: "ri-instagram-line" },
    { name: "Whatsapp", url: "ri-whatsapp-line" },
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
              href=""
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
          <Link className="">Home</Link>
          <Link className="">Projects</Link>
          <Link className="">Skills</Link>
          <Link className="">About</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
