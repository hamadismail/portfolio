import React from 'react';
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/10">
      <div className="max-w-6xl mx-auto py-8 px-4">
        <h1 className="text-center text-xl font-semibold text-[#333] mb-6">Hamad</h1>

        <ul className="flex justify-center gap-6 mb-6 text-[#333] text-sm">
          <li>
            <a href="#about" className="hover:text-[#111] transition">About</a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-[#111] transition">Projects</a>
          </li>
          <li>
            <a href="#publications" className="hover:text-[#111] transition">Publications</a>
          </li>
        </ul>

        <div className="flex justify-center gap-5">
          <a
            href="https://twitter.com/hamadismail_"
            className="text-white bg-[#333] p-2 rounded-md text-lg hover:bg-[#9fbc49] transition"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter />
          </a>
          <a
            href="https://www.github.com/hamadismail"
            className="text-white bg-[#333] p-2 rounded-md text-lg hover:bg-[#9fbc49] transition"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hamadismail/"
            className="text-white bg-[#333] p-2 rounded-md text-lg hover:bg-[#9fbc49] transition"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
        </div>

        <span className="block mt-16 text-center text-xs text-[#333]">
          &copy; {new Date().getFullYear()} Hamad. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
