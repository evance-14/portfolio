import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";


const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
     
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Evans Kirop</h3>
        <p className="text-lg font-normal text-gray-400">
          Full-stack Software Web Developer
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+254 714288419</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">kiropevans097@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
          <a href="https://github.com/evance-14" target="_blank"><FaGithub /></a>
          </span>
          <span className="bannerIcon">
          <a href="https://twitter.com/14Evance" target="_blank"><FaTwitter /></a>
          </span>
          <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/evans-kirop-1410b1264/" target="_blank"><FaLinkedinIn /></a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;