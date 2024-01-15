import React from "react";
import { MdAddLocation } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa6";

function Contact() {
  return (
    <div id="contact" className="w-full h-full sm:h-screen mt-10">
      <div className="w-screen h-[400px] bg-blue-900 text-white grid justify-center items-center">
        <div className="w-full grid gap-5">
          <p className="text-6xl font-bold">Contact</p>
          <p className="text-3xl">Home / Contact</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-around items-center mt-10">
        <div className="">
          <div className="grid text-2xl py-5 border-b-2">
            <div className="flex gap-2">
              <MdAddLocation size={30} />
              Our Located Place
            </div>
            <span>sun industries buliding,</span>
            <span>shanti nagar, Bangalore-560001</span>
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
                className="border border-[#fa5f0b] sm:p-3"
                placeholder="Name"
                type="text"
              ></input>
              <input
                className="border border-[#fa5f0b] sm:p-3"
                placeholder="Email"
                type="email"
              ></input>
            </div>
            <div className="flex flex-col gap-3 sm:gap-10 sm:flex-row">
              <input
                className="border border-[#fa5f0b] sm:p-3"
                placeholder="Phone"
                type="text"
              ></input>
              <input
                className="border border-[#fa5f0b] sm:p-3"
                placeholder="Subject"
                type="text"
              ></input>
            </div>
            <div className="flex flex-col gap-3 sm:gap-10 sm:flex-row">
              <textarea
                className="border border-[#fa5f0b] sm:p-10"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="bg-[#fa5f0b] p-2 text-white font-bold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
