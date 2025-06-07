import React from "react";

export default function Drop({ title, children, collpaserClass, collapseContent_class }) {
  return (
    <div
      className={`collapse collapse-arrow pr-[20px] pl-[10px] ${collpaserClass}`}
    >
      {/* Changed from radio to checkbox for independent toggle */}
      <input type="checkbox" id="accordion-1" />

      <label
        htmlFor="accordion-1"
        className="collapse-title font-semibold text-[16px] text-[#222222] flex justify-between items-center !pl-0 !pr-0"
      >
        <span>{title}</span>
      </label>

      {/* Children always wrapped in collapse-content */}
      <div className={`collapse-content ${collapseContent_class}`}>
        {children}
      </div>
    </div>
  );
}
