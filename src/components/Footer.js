import React from "react";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full flex justify-center gap-2 bg-slate-300 text-center text-[#063970]">
      <span>Copyright ©2024. Designed By Dhananjaya </span>
      <a
        href="https://www.linkedin.com/in/dhananjaya-mulukaledu/"
        target="blank"
      >
        <FaLinkedin size={25} color="black" />
      </a>
    </div>
  );
}

export default Footer;
