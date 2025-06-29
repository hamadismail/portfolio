import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(projectsData);
    } else {
      const filtered = projectsData.filter(
        (project) => project.category === item.name
      );
      setProjects(filtered);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex justify-center items-center gap-3 mb-10 flex-wrap">
        {projectsNav.map((navItem, index) => (
          <span
            key={index}
            onClick={(e) => handleClick(e, index)}
            className={`capitalize text-sm px-3 py-1.5 rounded-md cursor-pointer transition-all font-medium ${
              active === index
                ? "bg-[#333333] text-white"
                : "text-gray-800 hover:bg-[#333333] hover:text-white"
            }`}
          >
            {navItem.name}
          </span>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="flex flex-wrap justify-center max-w-3xl mx-auto gap-8">
        {projects.map((project) => (
          <ProjectItems key={project.id} item={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
