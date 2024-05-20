import React from "react";
import Carousel from "../components/Carousel";
import { homePageData } from "../config/constants";

function Home() {
  const slides = () => {
    const data = homePageData.map((cardDetails) => {
      return (
        <div className="">
          <div className="rounded-t-xl">
            <img
              className="w-full h-full lg:h-screen rounded-xl mt-10"
              src={cardDetails.imageUrl}
              alt="#"
            ></img>
            <span className="absolute m-1 text-center mt-5 lg:bottom-0 left-[15%] right-[15%]">
              <div className="border-8 p-4">
                <h1 className="text-4xl font-bold lg:text-8xl text-center">
                  {cardDetails.name}
                </h1>
              </div>
            </span>
          </div>
        </div>
      );
    });
    return data;
  };

  return (
    <div id="home" className="w-full h-full lg:h-screen">
      <Carousel slides={slides()} autoSlide={true} homePageSlides={true} />
    </div>
  );
}

export default Home;
