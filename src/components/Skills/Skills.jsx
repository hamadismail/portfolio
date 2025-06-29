// Skills.jsx
import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <section className="py-16" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-3">
            Skills
          </h2>
          <div className="w-20 h-1 bg-[#9fbc49] mx-auto mb-4"></div>
          <p className="text-sm uppercase tracking-wider text-gray-500">
            Technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Frontend />
          <Backend />
        </div>
      </div>
    </section>
  );
};

export default Skills;
