import React, { useState } from "react";
import { FaGithub, FaReact } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import {
  HiOutlineArrowSmRight,
  HiOutlineCheckCircle,
  HiX,
} from "react-icons/hi";
import { IoLogoJavascript } from "react-icons/io";

const ProjectItems = ({ item }) => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="w-80 bg-gray-50 border border-gray-100 rounded-xl p-5 shadow-md">
      <div className="overflow-hidden rounded-xl group h-36">
        <img
          src={item.image}
          alt={item.title}
          className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-150"
        />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-[#333] font-semibold my-2">{item.title}</h3>

        <div className="flex items-center gap-2">
          {item?.tech?.map((t, idx) => (
            <span key={idx}>{t}</span>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <a
          onClick={() => toggleTab(1)}
          className="text-sm cursor-pointer text-gray-600 flex items-center gap-1 hover:translate-x-1 transition-transform"
        >
          Details <HiOutlineArrowSmRight className="text-lg" />
        </a>

        <div className="flex gap-2 text-sm text-[#333] items-center">
          <a
            href={item?.source}
            target="_blank"
            className="cursor-pointer text-[#333] hover:text-[#9fbc49] rounded text-xl"
          >
            <FaGithub />
          </a>
          {item.live && (
            <a
              href={item?.live}
              target="_blank"
              className="cursor-pointer text-[#333] hover:text-[#9fbc49] rounded text-xl"
            >
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>

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
            {item?.details?.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-center mb-6 px-4 text-gray-700">
            {item?.details?.description}
          </p>

          {/* Services List */}
          <ul className="grid gap-3">
            {item?.details?.features?.map((text, i) => (
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
