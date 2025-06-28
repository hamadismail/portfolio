// import React from "react";
import Social from "./Social";
import Data from "./Data";
import Scroll from "./Scroll";
import bannerImg from "../../assets/banner.jpeg";
import "./banner.css";

const Banner = () => {
  return (
    <section id="home" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl relative mx-auto px-4 max-md:flex-col-reverse max-md:gap-8 flex justify-around items-center">
        {/* Social links */}
        <div className="absolute left-4 max-md:left-4 max-md:top-4 flex md:flex-col gap-4 justify-center">
          <Social />
        </div>

        {/* Intro Text */}
        <Data />

        {/* Profile Image */}
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={bannerImg}
            alt="Profile"
            className="w-[300px] h-[300px] object-cover border-6 border-gray-400 rounded-full shadow-inner animate-blob grayscale-img"
            style={{
              boxShadow: "inset 0 0 0 9px rgba(225, 225, 225, 0.3)",
            }}
          />
        </div>
      </div>

      {/* Scroll Down */}
      <div className="max-w-6xl mx-auto mt-20 hidden md:block">
        <Scroll />
      </div>
    </section>
  );
};

export default Banner;
