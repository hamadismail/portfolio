import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import SkillItem from "./SkillItem";

const Backend = () => {
  const skills = [
    { name: "Note.js", icon: <FaNodeJs className="text-green-600 text-3xl" /> },
    {
      name: "Express",
      icon: <SiExpress className="text-gray-800 text-3xl" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500 text-3xl" />,
    },
  ];
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-center text-[#333333] mb-6">
        Backend
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <SkillItem key={idx} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </div>
  );
};

export default Backend;
