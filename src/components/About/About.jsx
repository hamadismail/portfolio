import React from "react";
import AboutImg from "../../assets/banner.jpeg";
import Info from "./Info";

const About = () => {
  return (
    <section id="about">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-3">
            About Me
          </h2>
          <div className="w-20 h-1 bg-[#9fbc49] mx-auto mb-4"></div>
          <p className="text-sm uppercase tracking-wider text-gray-500">
            MERN Stack Developer
          </p>
        </div>

        <div className="flex max-md:flex-col gap-8 justify-between items-center">
          <div className="w-full md:w-1/3 max-md:flex max-md:justify-center">
            <img
              src={AboutImg}
              alt="about"
              className="w-[300px] rounded-2xl grayscale object-cover"
            />
          </div>

          <div className="w-full md:w-2/3">
            <Info />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
