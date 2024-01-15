import React from "react";
import Carousel from "../components/Carousel";
import { slides } from "../config/constants";

function Home() {
  return (
    <div id="home" className="w-full h-full pt-28">
      <Carousel slides={slides} autoSlide={true} />
    </div>
  );
}

export default Home;
