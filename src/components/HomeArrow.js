import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Link } from "react-scroll";

function HomeArrow() {
  return (
    <div className="hidden sm:block fixed  bottom-10 right-0 mr-10">
      <Link to="home" spy={true} smooth={true} offset={0} duration={900}>
        <FaArrowAltCircleUp size={50} color="#fa5f0b" />
      </Link>
    </div>
  );
}

export default HomeArrow;
