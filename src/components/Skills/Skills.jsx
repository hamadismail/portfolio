// Skills.jsx
import React from 'react';
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
    <section className="py-16" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#333333] mb-2">Skills</h2>
        <p className="text-center text-gray-500 mb-12">Technologies I work with</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Frontend />
          <Backend />
        </div>
      </div>
    </section>
  );
}

export default Skills;
