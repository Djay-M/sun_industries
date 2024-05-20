import React from "react";
import Carousel from "../components/Carousel";
import { serviceCardsData } from "../config/constants";

import Cards from "../components/Cards";

function Services() {
  const serviceCards = () => {
    const data = serviceCardsData.map((cardDetails) => {
      return <Cards name={cardDetails.name} imageUrl={cardDetails.imageUrl} />;
    });
    return data;
  };
  return (
    <div className="w-full h-screen sm:h-full mt-20">
      <div className="w-full flex flex-col justify-center items-center">
        <span className="text-5xl font-bold text-textPrimary">Services</span>
        <div className="p-5 sm:w-[90%] h-[600px] m-5 bg-[#f6f6f6] rounded-3xl">
          <Carousel cards={serviceCards()} autoSlide={true} />
        </div>
      </div>
    </div>
  );
}

export default Services;
