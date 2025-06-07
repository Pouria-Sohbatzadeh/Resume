import React, { useState, useEffect } from "react";

export default function ListMembers({ navItems, className }) {
  const [activeIndex, setActiveIndex] = useState(0); // Default to the first item

  const handleClick = (index, handler) => {
    setActiveIndex(index);
    if (handler) handler(); // Call the passed handler if it exists
  };

  return (
    <>
      {navItems.map((item, index) => (
        <li key={index} className={`relative text-[14px] font-bold ${className}`}>
          <button
            onClick={() => handleClick(index, item.handler)}
            className={`relative hover:text-[#3532b2] text-[#888888] ${
              activeIndex === index ? "!text-[#3532b2]" : ""
            }`}
          >
            {/* The text/name of the tab */}
            {item.name}

            {/* The ball */}
            {activeIndex === index && (
              <span className="absolute w-[4px] h-[4px] rounded-[16px] left-1/2 top-[130%] transform -translate-x-1/2 bg-[#3532b2] inline-block" />
            )}
          </button>
        </li>
      ))}
    </>
  );
}
