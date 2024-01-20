import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import Carousel from "../components/Carousel";
import { clientLogo, clientReviews } from "../config/constants";

function Testimonial() {
  const reviewCards = () =>
    clientReviews.map((reviewObject) => {
      return (
        <div className="border-dotted border-2 border-sky-500 p-5">
          <span className="font-serif font-normal leading-9 text-white text-2xl flex">
            <RiDoubleQuotesL size={20} color="#fa5f0b" />
            {reviewObject.review}
          </span>
          <RiDoubleQuotesR size={20} color="#fa5f0b" />
          <p className="font-serif font-normal leading-9 text-white text-1xl">
            {" "}
            --- {reviewObject.clientName}
          </p>
        </div>
      );
    });

  const clientLogos = () =>
    clientLogo.map((logo) => (
      <img
        className="w-[250px] h-[200px] bg-transparent rounded-lg"
        src={logo}
        alt=""
      ></img>
    ));

  return (
    <div>
      <div className="w-full h-full grid grid-rows-1 sm:grid-rows-2 justify-center">
        <div className="w-full bg-black">
          <div className="font-serif font-normal leading-9 text-[#fa5f0b] text-4xl flex justify-center mt-16">
            Testimonial
          </div>
          <div className="font-serif font-normal leading-9 text-white text-4xl flex justify-center ml-5 mt-5">
            What Our Clients Say ABout Us
          </div>
          <div className="mt-20">
            <Carousel cards={reviewCards()} autoSlide={true} />
          </div>
        </div>
        <div className="bg-[#f6f6f6] sm:px-20">
          <div className="flex justify-center items-center">
            <span className="text-4xl text-[#fa5f0b] font-bold m-5">
              OUR CLIENTS
            </span>
          </div>
          <div className="sm:h-[250px] bg-white grid grid-flow-col-1 sm:grid-flow-col justify-center items-center gap-20">
            {clientLogos()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
