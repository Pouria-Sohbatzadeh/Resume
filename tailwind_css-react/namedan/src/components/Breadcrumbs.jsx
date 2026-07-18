import React from "react";

import { NavLink } from "react-router-dom";

import { SmallTxt_style } from "./styled_component/SmallTxt_style.jsx";

export default function Breadcrumbs({ chosenCourse = "دوره اموزش کار با هوش مصنوعی" }) {
  return (
    <div className="breadcrumbs flex items-center gap-[10px] lg:mt-[40px]">
      {/* Arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-4 relative"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>

      <ul className="text-[13px]">
        <li className="breadcrumb-separator">
          <NavLink to="/">
            <SmallTxt_style>خانه</SmallTxt_style>
          </NavLink>
        </li>
        <li className="breadcrumb-separator">
          <NavLink to="/Courses">
            <SmallTxt_style>دور های اموزشی</SmallTxt_style>
          </NavLink>
        </li>
        <li>

          <SmallTxt_style>{chosenCourse}</SmallTxt_style>
        </li>
      </ul>
    </div>
  );
}
