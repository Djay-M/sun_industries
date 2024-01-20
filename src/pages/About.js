import React from "react";
import { founderImages } from "../config/constants";

function About() {
  return (
    <div id="about" className="w-full h-full sm:h-screen">
      <div className="w-full h-full sm:h-screen flex flex-col sm:flex-row justify-center items-center sm:gap-10">
        <div className="w-full m-20 grid justify-center gap-10">
          <p className="font-roboto font-bold leading-9 text-white text-4xl">
            About
          </p>
          <span className="font-roboto font-normal leading-9 text-white text-3xl">
            Our Sun industries was started by{" "}
            <b className="text-4xl">Arumugam G</b> founder of industry in the
            year 1989 located in Bangalore Karnataka with manufacturing of home
            cupboard made up of SS and MS material after 1990s we have stepped
            in to <b className="text-4xl">BOSCH LIMITED</b> Adugodi Bangalore
            and supplying materials to all bosch group of company in Bangalore
            and bosch company in Coimbatore for more than 30 years where we have
            good business relationship with bosch in all kind of terms and it
            continuous till date .
          </span>
        </div>
        <div className="w-[40%] h-[40%] m-3">
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
