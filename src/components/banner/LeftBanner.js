import React,{useEffect,useRef} from 'react'
import Typed from 'typed.js';

import { FaGithub, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiHtml5, SiJavascript } from "react-icons/si";

const LeftBanner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full-stack Software Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
    <div className="flex flex-col gap-5">
      <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
      <h1 className="text-6xl font-bold text-white">
        Hi, I'm <span className="text-designColor capitalize">Evans Kirop</span>
      </h1>
      <h2 className="text-4xl font-bold text-white">
        a <span ref={el}></span>
      
      </h2>
      <p className="text-base font-bodyFont leading-6 tracking-wide">
      As a versatile full stack developer, I have a passion for crafting innovative and efficient web applications.
      With expertise in both front-end and back-end technologies, I excel at creating dynamic and intuitive user experiences. 
      Whether it's building responsive and engaging user interfaces or architecting scalable server-side solutions,
      I bring a comprehensive skill set to every project. 
      I thrive in collaborative environments, working closely with cross-functional teams to deliver robust and tailored solutions.
      With a strong foundation in problem-solving and a commitment to continuous learning, 
      I am dedicated to staying at the forefront of the ever-evolving web development landscape. 
      Through my attention to detail and a meticulous approach to coding,
      I strive to deliver high-quality and impactful software solutions that exceed client expectations.
      </p>
    </div>
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
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
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiJavascript  />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiHtml5/>
          </span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LeftBanner;
