import React from "react";

const Info = () => {
  return (
    <div className="text-left md:text-start">
      {/* Personal Intro */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md leading-relaxed text-[#333333]">
        <p className="mb-4">
          <span className="text-lg font-semibold text-[#9fbc49]">
            Hey, I’m Hamad Ismail!
          </span>
          <br />
          My journey into programming started with curiosity and grew into a
          deep love for crafting beautiful, functional web experiences.
        </p>

        <p className="mb-4">
          I specialize in{" "}
          <span className="font-bold text-[#333333]">
            front-end development
          </span>{" "}
          — bringing UI/UX ideas to life with clean code and aesthetic design.
          Whether I'm working on dynamic React apps or interactive UI
          components, I enjoy turning concepts into reality.
        </p>

        <p className="mb-4">
          Outside of coding, I enjoy{" "}
          sketching UI ideas,
          exploring new tech tools, and occasionally diving into strategy games.
          I'm a calm, introverted thinker who values simplicity, creativity, and
          constant growth.
        </p>

        <p>
          I aim to build thoughtful digital experiences that are not just
          functional — but meaningful.
        </p>
      </div>

      {/* Info Cards */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="bg-indigo-100 w-12 h-12 mx-auto flex items-center justify-center rounded-full mb-4 group-hover:scale-105 transition-transform">
            <HiOutlineDesktopComputer className="text-xl text-indigo-600" />
          </div>
          <h3 className="text-base font-semibold text-gray-800">Experience</h3>
          <p className="text-sm text-gray-500">3 Years</p>
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="bg-green-100 w-12 h-12 mx-auto flex items-center justify-center rounded-full mb-4 group-hover:scale-105 transition-transform">
            <HiOutlineTerminal className="text-xl text-green-600" />
          </div>
          <h3 className="text-base font-semibold text-gray-800">Completed</h3>
          <p className="text-sm text-gray-500">35+ Projects</p>
        </div>

        <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="bg-yellow-100 w-12 h-12 mx-auto flex items-center justify-center rounded-full mb-4 group-hover:scale-105 transition-transform">
            <HiOutlineSparkles className="text-xl text-yellow-600" />
          </div>
          <h3 className="text-base font-semibold text-gray-800">Support</h3>
          <p className="text-sm text-gray-500">Online 24/7</p>
        </div>
      </div> */}
    </div>
  );
};

export default Info;
