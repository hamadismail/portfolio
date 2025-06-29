import React from "react";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section className="py-16" id="portfolio">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-3">
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-[#9fbc49] mx-auto mb-4"></div>
          <p className="text-sm uppercase tracking-wider text-gray-500">
            Recent Projects
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
