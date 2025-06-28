import React from "react";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section className="py-16" id="portfolio">
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#333333] mb-2">
          Portfolio
        </h2>
        <span className="block text-center text-sm text-gray-500 mb-10">
          Recent Projects
        </span>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
