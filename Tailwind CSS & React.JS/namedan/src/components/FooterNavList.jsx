import React from "react";
import { NavLink } from "react-router-dom";

export default function FooterNavList({ title, links }) {
  return (
    <ul className="text-[14px] text-[#444444] font-medium flex flex-col lg:gap-[25px]">
      <li className="font-semibold text-[16px] text-[#000] mb-[6px]">{title}</li>
      {links.map((item, index) => (
        <NavLink key={index} to={item.to}>
          <span>{item.label}</span>
        </NavLink>
      ))}
    </ul>
  );
}
