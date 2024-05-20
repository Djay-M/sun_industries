import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { slides } from "../config/constants";

function Carousel(props) {
  const slideImages = props.slides || slides;
  const { autoSlide, autoSlideDuration, cards } = props;
  const isCardView = cards || false;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentCardIndexes, setCurrentCardIndexes] = useState([0, 1, 2]);

  const handlePrevSlide = () => {
    if (isCardView) {
      if (currentCardIndexes[0] === 0) {
        setCurrentCardIndexes([cards.length - 1, 0, 1]);
      } else {
        setCurrentCardIndexes([
          currentCardIndexes[0] - 1,
          currentCardIndexes[0],
          currentCardIndexes[1],
        ]);
      }
    } else {
      if (currentSlideIndex === 0) {
        setCurrentSlideIndex(slideImages.length - 1);
      } else {
        setCurrentSlideIndex(currentSlideIndex - 1);
      }
    }
  };
  const handleNextSlide = () => {
    if (isCardView) {
      if (currentCardIndexes[2] === cards.length - 1) {
        setCurrentCardIndexes([0, 1, 2]);
      } else {
        setCurrentCardIndexes([
          currentCardIndexes[0] + 1,
          currentCardIndexes[1] + 1,
          currentCardIndexes[2] + 1,
        ]);
      }
    } else {
      if (currentSlideIndex === slideImages.length - 1) {
        setCurrentSlideIndex(0);
      } else {
        setCurrentSlideIndex(currentSlideIndex + 1);
      }
    }
  };
  useEffect(() => {
    if (!autoSlide) return;
    const autoSlideInterval = setInterval(
      handleNextSlide,
      autoSlideDuration || 3000
    );
    return () => clearInterval(autoSlideInterval);
  });
  return (
    <div
      className="w-full ml-1 mr-1 relative group"
      style={{
        ...(!isCardView && {
          height: "500px",
        }),
      }}
    >
      {isCardView ? (
        <div>
          <div className="hidden m-10 sm:grid grid-flow-col sm:grid-cols-3 sm:gap-10">
            {cards[currentCardIndexes[0]]}
            {cards[currentCardIndexes[1]]}
            {cards[currentCardIndexes[2]]}
          </div>
          <div className="sm:hidden">{cards[currentCardIndexes[0]]}</div>
        </div>
      ) : (
        <div className="w-full h-full lg:h-screen sm:mt-8 rounded-2xl transition-shadow  duration-300 ease-in-out">
          {slideImages[currentSlideIndex]}
        </div>
      )}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-textPrimary cursor-pointer">
        <BsChevronCompactLeft size={30} onClick={handlePrevSlide} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-textPrimary cursor-pointer">
        <BsChevronCompactRight size={30} onClick={handleNextSlide} />
      </div>
    </div>
  );
}

export default Carousel;
