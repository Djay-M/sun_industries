import { useState } from "react";
import { Link } from "react-scroll";
import { defaultTheme, themesConfig } from "../config/constants";
import { FaBars, FaTimes, FaFacebook, FaTwitter } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function NavBar(props) {
  let theme = defaultTheme;
  const [state, setState] = useState({
    navbarOpen: false,
  });
  const textColor = themesConfig[theme].textColor;

  const fetchLinkButton = (LinkName, linkTo, ismobileView) => {
    return (
      <Link
        className="text-3xl hover:scale-125 duration-300 ml-5 hover:cursor-pointer hover:text-textSecondary font-roboto"
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
      {/* NAV BAR */}
      <div className="w-full h-[100px] flex justify-between items-center bg-backgroundNavbar text-textNavbar px-4 bg-transparent">
        <div className="">
          {/* <img
            className="h-[50px] mr-6 md:h-[90px] md:ml-30 rounded-lg"
            src={companyLogo}
            alt="Sun Industries"
          ></img> */}
        </div>
        <div className="hidden w-[70%] rounded-md p-1 md:p-3 lg:flex justify-center items-center md:mr-3">
          <div className="md:flex justify-between items-center gap-10 mr-20">
            {fetchLinkButton("Home", "home")}
            {fetchLinkButton("About", "about")}
            {fetchLinkButton("Products", "products")}
            {fetchLinkButton("Our Projects", "products")}
            {fetchLinkButton("Contact", "contact")}
          </div>
          <div className="flex items-center">
            <button className="hidden mr-10 p-3 bg-white rounded-md hover:bg-black hover:text-textPrimary">
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
            </button>
          </div>
          <div className="hidden lg:flex justify-end gap-10 ml-10">
            <FaFacebook
              size={30}
              className="hover:scale-150 duration-300 hover:cursor-pointer hover:text-textSecondary"
            />
            <FaTwitter
              size={30}
              className="hover:scale-150 duration-300 hover:cursor-pointer hover:text-textSecondary"
            />
            <CgMail
              size={30}
              className="hover:scale-150 duration-300 hover:cursor-pointer hover:text-textSecondary"
            />
          </div>
        </div>
        <div className="lg:hidden m-10" onClick={handleNavbarClick}>
          {!state.navbarOpen ? (
            <FaBars color={`${textColor}`} size={27} />
          ) : (
            <FaTimes color={`${textColor}`} size={27} />
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
          <button className="hidden ml-5 p-3 bg-white rounded-md hover:bg-black hover:text-textPrimary">
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
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
