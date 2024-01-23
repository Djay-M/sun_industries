import React from "react";
import { MdAddLocation } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa6";

function Contact() {
  return (
    <div id="contact" className="w-full h-screen mt-5">
      <div className="w-screen h-[150px] bg-backgroundSecondaryNavbar text-textPrimary grid justify-center items-center">
        <div className="w-full grid">
          <p className="text-6xl font-bold">Contact</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-around items-center mt-10">
        <div className="">
          <div className="grid text-2xl py-5 border-b-2">
            <div className="flex gap-2">
              <MdAddLocation size={30} />
              Our Located Place
            </div>
            <span>No 23, 1st Main 'C' Cross</span>
            <span>Vinayaka Nagar, Adugodi Post</span>
            <span>Bengaluru-560030, Karnataka, India</span>
          </div>
          <div className="text-2xl py-5 border-b-2">
            <div className="flex gap-2">
              <RiMailSendLine size={30} />
              <p>sunindustries.ga@gmail.com</p>
            </div>
          </div>
          <div className="text-2xl py-5 border-b-2">
            <div className="flex gap-2">
              <FaPhoneVolume size={30} />
              <p>+91 9845817634</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="text-2xl font-bold">Let's Get In Connect</div>
          <form className="mt-5 flex flex-col gap-3 sm:gap-10">
            <div className="flex flex-col gap-3 sm:gap-10 sm:flex-row">
              <input
                className="border border-[#ff0000] sm:p-3"
                placeholder="Name"
                type="text"
              ></input>
              <input
                className="border border-[#ff0000] sm:p-3"
                placeholder="Email"
                type="email"
              ></input>
            </div>
            <div className="flex flex-col gap-3 sm:gap-10 sm:flex-row">
              <input
                className="border border-[#ff0000] sm:p-3"
                placeholder="Phone"
                type="text"
              ></input>
              <input
                className="border border-[#ff0000] sm:p-3"
                placeholder="Subject"
                type="text"
              ></input>
            </div>
            <div className="flex flex-col gap-3 sm:gap-10 sm:flex-row">
              <textarea
                className="border border-[#ff0000] sm:p-10"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="bg-[#ff0000] p-2 text-textPrimary font-bold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
