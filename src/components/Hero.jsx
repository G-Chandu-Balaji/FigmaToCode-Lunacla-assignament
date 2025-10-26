import React from "react";
import Navbar from "./navbar";

function Hero() {
  return (
    <div className="grid grid-cols-14 container py-4 px-1  gap-2">
      <div className="flex flex-col justify-between items-center py-1 col-span-1 h-full ">
        <div>
          <img
            src="./questionmark.png"
            width="24"
            height="24"
            alt=""
            className=""
          />
        </div>
        <div className="justify-self-center">
          <img src="./rectangles.png" width="24" height="30" alt="" />
        </div>
        <div></div>
      </div>
      <div className="flex flex-col gap-5  col-span-12  ">
        <Navbar />
        <div className=" paragraph-contatiner text-left flex flex-col gap-2 text-[#969696] ">
          <p>
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now.
          </p>
          <p>
            I was born and raised in Albany, NY& have been living in Santa Carla
            for the past 10 years my wife Tiffany and my 4 year old twin
            daughters- Emma and Ella. Both of them are just starting school, so
            my calender is usually blocked between 9-10 AM. This is a...
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end p-1 col-span-1 ">
        <img src="./long-rectangle.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
