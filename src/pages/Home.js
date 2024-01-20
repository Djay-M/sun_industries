import React from "react";
import Carousel from "../components/Carousel";
import { slides } from "../config/constants";

function Home() {
  return (
    <div id="home" className="w-full h-full pt-27">
      <Carousel slides={slides} autoSlide={true} />
    </div>
  );
}

export default Home;
