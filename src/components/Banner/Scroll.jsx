import React from "react";
import { HiOutlineArrowSmDown } from "react-icons/hi";

const Scroll = () => {
  return (
    <div>
      <a
        href="#about"
        className="flex items-center gap-2 text-sm text-[#333333] hover:text-[#9fbc49] transition group"
      >
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 247 390"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
        >
          <path
            className="animate-bounce"
            d="M123.359,79.775l0,72.843"
            style={{
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "20px",
            }}
          />
          <path
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359
                 c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,
                 62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,
                 -50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "20px",
            }}
          />
        </svg>
        <span className="font-medium">Scroll Down</span>
        <HiOutlineArrowSmDown className="text-lg group-hover:translate-y-1 transition" />
      </a>
    </div>
  );
};

export default Scroll;
