import React, { useState, useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY >= 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "portfolio", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`w-full fixed top-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-md" : ""
      } md:bottom-auto md:top-0`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 h-16">
        <a href="/" className="text-xl font-bold text-[#333333]">
          Portfolio
        </a>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden z-10 text-2xl cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <HiOutlineMenu />
        </div>

        {/* Nav Menu */}
        <ul
          className={`${
            toggle ? "top-0" : "-top-96"
          } md:static absolute left-0 w-full bg-white px-6 py-8 md:p-0 md:w-auto md:flex md:items-center grid grid-cols-1 gap-6 md:gap-8 transition-all duration-300 rounded-t-2xl shadow-md md:shadow-none`}
        >
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => {
                  setToggle(false);
                  setActiveNav(id);
                }}
                className={`flex flex-col items-center text-sm font-medium hover:text-[#9fbc49] transition ${
                  activeNav === id ? "text-[#9fbc49]" : "text-gray-700"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
