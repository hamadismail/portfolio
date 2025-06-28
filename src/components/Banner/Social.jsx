import React from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const Social = () => {
  const links = [
    { icon: <FiTwitter />, href: "https://twitter.com/hamadismail_" },
    { icon: <FiGithub />, href: "https://www.github.com/hamadismail" },
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/hamadismail/" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 text-xl text-[#333333]">
      {links.map(({ icon, href }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#9fbc49] transition"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
