import React, { useEffect, useState } from "react";
import { HiOutlineArrowSmUp } from "react-icons/hi";

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY >= 560);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed z-50 transition-all duration-500 rounded-md cursor-pointer p-2 bg-[#333333] opacity-80 hover:bg-[#111111]
        right-6 -bottom-full ${showScroll ? "bottom-4" : ""}`}
    >
      <HiOutlineArrowSmUp className="text-white text-xl" />
    </a>
  );
};

export default ScrollUp;
