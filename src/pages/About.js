import React from "react";
import { founderImages } from "../config/constants";

function About() {
  return (
    <div id="about" className="w-full h-full sm:h-screen">
      <div className="w-full h-full sm:h-screen flex flex-col sm:flex-row justify-center items-center sm:gap-10">
        <div className="w-full m-20 grid justify-center gap-10">
          <p className="font-serif font-normal leading-9 text-[#fa5f0b] text-4xl">
            About
          </p>
          <span className="font-serif font-normal leading-9 text-[#4e4e4e] text-2xl">
            Our Sun industries was started by Arumugam G founder of industry in
            the year 1989 located in Bangalore Karnataka with manufacturing of
            home cupboard made up of SS and MS material after 1990s we have
            stepped in to BOSCH LIMITED adugodi Bangalore and supplying
            materials to all bosch group of company in Bangalore and bosch
            company in Coimbatore for more than 30 years where we have good
            business relationship with bosch in all kind of terms and it
            continuous till date .
          </span>
        </div>
        <div className="w-[40%] h-[40%]">
          <img
            src={founderImages[0]}
            alt=""
            className="w-full h-full rounded-full"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default About;
