import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Services" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Front-end Development"
          des="As a front-end web developer, I design and build the user-facing side of websites and web apps using HTML, CSS,JavaScript and React js. My goal is to create a visually appealing and functional user experience."
          icon={<AiFillAppstore />}
        />

        <Card
          title="UX Design"
          des="As a UX designer, I create intuitive and user-friendly digital experiences by conducting research, prototyping, and user testing. My goal is to design seamless and satisfying products that meet both user and business needs."
          icon={<SiAntdesign />}
        />

        <Card
        title="Back-end Development"
        des="As a back-end developer, I specialize in building the server-side logic and infrastructure that powers websites and web applications. Using technologies such as Ruby on Rails, databases like Postgres DB, I ensure smooth data processing, security, and seamless integration with the front-end. My focus is on optimizing performance, handling data storage, and implementing robust APIs to support the overall functionality of the application."
        icon={<AiFillAppstore />}
        />
      </div>
    </section>
  );
};

export default Features;
