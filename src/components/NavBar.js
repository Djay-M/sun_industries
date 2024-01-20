import { useState } from "react";
import { Link } from "react-scroll";
import { defaultTheme, themesConfig } from "../config/constants";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaLinkedin,
} from "react-icons/fa";
import { CiMail, CiPhone } from "react-icons/ci";
import companyLogo from "../assets/company_logo.jpeg";

function NavBar(props) {
  let theme = defaultTheme;
  const [state, setState] = useState({
    navbarOpen: false,
  });
  const textColor = themesConfig[theme].textColor;

  const fetchLinkButton = (LinkName, linkTo, ismobileView) => {
    return (
      <Link
        className="text-3xl hover:scale-125 duration-300 ml-5 hover:cursor-pointer font-roboto"
        id="homeButton"
        value="home"
        to={linkTo}
        spy={true}
        smooth={true}
        offset={ismobileView ? -30 : 0}
        duration={900}
        onClick={ismobileView ? handleNavbarClick : ""}
      >
        {LinkName}
      </Link>
    );
  };

  const handleNavbarClick = () =>
    setState({ ...state, navbarOpen: !state.navbarOpen });

  return (
    <div className="w-full fixed z-10">
      {/* TOP INFO BAR */}
      <div className="hidden md:flex w-full h-[40px] bg-black justify-between text-white items-center">
        <div className="ml-10 flex flex-row justify-center gap-5">
          <p>Welcom to Sun Industries</p>
          <div className="flex flex-row">
            <CiMail size={25} />
            <p className="ml-1">sunindustries.ga@gmail.com</p>
          </div>
          <div className="flex flex-row">
            <CiPhone size={25} />
            <p className="ml-1">+91 9845817634</p>
          </div>
        </div>
        <div className="ml-10 flex flex-row justify-center gap-5">
          <div className="mr-20 flex flex-row gap-10">
            <FaFacebook />
            <FaTwitter />
            <FaPinterest />
            <FaLinkedin />
          </div>
        </div>
      </div>
      {/* NAV BAR */}
      <div className="w-full h-[100px] flex justify-between items-center bg-blue-900 px-4">
        <div className="">
          <img
            className="h-[50px] mr-6 md:h-[90px] md:ml-30 rounded-lg"
            src={companyLogo}
            alt="Sun Industries"
          ></img>
        </div>
        <div className="hidden w-[70%] rounded-md p-1 md:p-3 md:flex justify-center items-center md:mr-3">
          <div className="md:flex justify-between items-center gap-10">
            {fetchLinkButton("Home", "home")}
            {fetchLinkButton("About", "about")}
            {fetchLinkButton("Products", "products")}
            {fetchLinkButton("Our Projects", "products")}
            {fetchLinkButton("Contact", "contact")}
          </div>
          <div className="flex items-center">
            {/* <button
              className="mr-10 p-3 bg-white rounded-md hover:bg-black hover:text-white"
            >
              <Link
                id="homeButton"
                value="quote"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={900}
              >
                Get A Quote
              </Link>
            </button> */}
          </div>
        </div>
        <div className="md:hidden m-10" onClick={handleNavbarClick}>
          {!state.navbarOpen ? (
            <FaBars color={`${textColor}`} />
          ) : (
            <FaTimes color={`${textColor}`} />
          )}
        </div>
        {/* Mobile View */}
        <div
          className={
            !state.navbarOpen
              ? "hidden"
              : "bg-[#063970] absolute top-20 left-0 w-full h-[500px] flex flex-col justify-center items-center gap-5"
          }
        >
          {fetchLinkButton("Home", "home", true)}
          {fetchLinkButton("About", "about", true)}
          {fetchLinkButton("Products", "products", true)}
          {fetchLinkButton("Our Projects", "products", true)}
          {fetchLinkButton("Contact", "contact", true)}
          {/* <button className="ml-5 p-3 bg-white rounded-md hover:bg-black hover:text-white">
            <Link
              id="homeButton"
              value="quote"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={900}
              onClick={handleNavbarClick}
            >
              Get A Quote
            </Link>
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
