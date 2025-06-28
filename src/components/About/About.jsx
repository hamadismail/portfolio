import React from "react";
import AboutImg from "../../assets/banner.jpeg";
import Info from "./Info";

const About = () => {
  return (
    <section id="about">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-1 text-[#333333]">
          About Me
        </h2>
        <span className="block text-sm text-gray-500 text-center mb-12">
          MERN Stack Developer
        </span>

        <div className="flex max-md:flex-col gap-8 justify-between items-center">
          <div className='w-full md:w-1/3 max-md:flex max-md:justify-center'>
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
