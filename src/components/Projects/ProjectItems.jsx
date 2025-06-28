import React, { useState } from "react";
import {
  HiOutlineArrowSmRight,
  HiOutlineCheckCircle,
  HiX,
} from "react-icons/hi";

const ProjectItems = ({ item }) => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="w-80 h-80 bg-gray-50 border border-gray-100 rounded-xl p-5 shadow-md">
      <img
        src={item.image}
        alt={item.title}
        className="object-cover w-[300px] h-[200px] rounded-xl"
      />
      <h3 className="text-lg text-[#333] font-semibold my-2">{item.title}</h3>
      <a
        onClick={() => toggleTab(1)}
        className="text-sm cursor-pointer text-gray-600 flex items-center gap-1 hover:translate-x-1 transition-transform"
      >
        Demo <HiOutlineArrowSmRight className="text-lg" />
      </a>

      <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 transition-all duration-300 ${
        toggleState === 1 ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="w-full max-w-md bg-gray-50 rounded-2xl p-10 relative shadow-lg">
        {/* Close Icon */}
        <HiX
          onClick={() => toggleTab(0)}
          className="absolute top-6 right-6 text-2xl text-gray-900 cursor-pointer"
        />

        {/* Modal Title */}
        <h3 className="text-xl font-semibold text-center text-[#333] mb-3">
          {item.details.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-center mb-6 px-4 text-gray-700">
          Over 3 years of experience in web development providing quality work.
        </p>

        {/* Services List */}
        <ul className="grid gap-3">
          {[
            "Web page and app development",
            "Integrate creative collaboration",
            "Provide product mockups",
          ].map((text, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-gray-500"
            >
              <HiOutlineCheckCircle className="text-gray-500" />
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>


    </div>
  );
};

export default ProjectItems;
