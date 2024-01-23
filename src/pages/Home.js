import React from "react";
import Carousel from "../components/Carousel";
import { backgroundImage } from "../config/constants";

function Home() {
  return (
    <div
      id="home"
      className="w-full h-full lg:h-screen pt-27 grid justify-end items-center text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage[0]})`,
      }}
    >
      <div className="w-[90%]">
        <p className="m-10 text-textSecondary text-2xl font-extrabold">
          We Build The Best.
        </p>
        <span className="text-6xl font-extrabold text-white m-10">
          We Give Best Quality Welding & Iron Works Services{" "}
        </span>
        <div className="text-3xl text-white text-center mt-20">
          <p>
            Manufacturers & Fabrication in : Machine Components, Steel
            Furniture, Sheet Metal Works and SS and
          </p>
          <p>
            MS products Aluminum products, plastics and wooden products Etc.
          </p>
        </div>
      </div>
      {/* <Carousel slides={slides} autoSlide={true} /> */}
    </div>
  );
}

export default Home;
