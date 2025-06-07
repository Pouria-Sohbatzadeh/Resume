import React from "react";

import { NavLink } from "react-router-dom";

import SiteName from "./SiteName";
import FormModal from "./Modal/FormModal";

export default function Header({
  iconSize = "lg:w-[40px]",
  webIcon,
  navItems,
}) {
  return (
    <>
      <header className="custom_container w-full">
        <div className="custom_container flex items-center justify-between bg-white rounded-[12px] w-full lg:h-[96px]">
          {/* Website Icon */}
          <NavLink to="/" className="cursor-pointer">
            <div className="flex items-center lg:gap-[10px]">
              <div className={iconSize}>
                <img src={webIcon} alt="Namedan icon" className="w-full" />
              </div>
              <SiteName />
            </div>
          </NavLink>

          {/* Links */}
          <ul className="flex text-[14px] lg:gap-[22px] items-center text-[#666666] font-semibold">
            {/* The main */}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "headerList_members headerList_membersActive"
                    : "headerList_members"
                }
              >
                <span>خانه</span>
              </NavLink>
            </li>

            {/* Mapped items */}
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-1 headerList_members headerList_membersActive"
                      : "flex items-center gap-1 headerList_members"
                  }
                >
                  <span>{item.name}</span>
                  {item.hasIcon && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="w-5 h-5 relative top-[2px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <FormModal />
        </div>
      </header>
    </>
  );
}
