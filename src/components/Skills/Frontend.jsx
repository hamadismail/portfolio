// Frontend.jsx
import React from "react";
import { FaReact } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss } from "react-icons/si";
import SkillItem from "./SkillItem";

const Frontend = () => {
  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-3xl" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500 text-3xl" /> },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-cyan-500 text-3xl" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-500 text-3xl" />,
    },
    { name: "React", icon: <FaReact className="text-blue-500 text-3xl" /> },
  ];

  return (
    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-center text-[#333333] mb-6">
        Frontend
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => <SkillItem key={idx} icon={skill.icon} name={skill.name}/>)}
      </div>
    </div>
  );
};

export default Frontend;
