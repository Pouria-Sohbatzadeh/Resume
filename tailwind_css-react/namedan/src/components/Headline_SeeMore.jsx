import React from "react";

import { HeadlineStyle } from "./styled_component/HeadlineStyle";
import { NavLink } from "react-router-dom";
import Headline_withIcon from "./Headline_withIcon";

export default function Headline_SeeMore({
  className = ``,
  headlineSize = `lg:text-[28px]`,
  headlineTxt = "جدیدترین وبینارها",
  seeMoreTxt = "مشاهده همه",
  to = "/",
}) {
  return (
    <>
      <div className={`flex justify-between items-center ${className}`}>
        <Headline_withIcon
          headlineTxt_class={headlineSize}
          className={headlineSize}
          headlineTxt={headlineTxt}
        />

        {/* More */}
        {seeMoreTxt && (
          <NavLink
            to={to}
            className="lg:h-[56px] lg:w-[125px] 
        rounded-[12px] bg-[#3532B229] 
        lg:text-[14px] text-[#3532B2] font-extrabold
        flexCenter"
          >
            {seeMoreTxt}
          </NavLink>
        )}
      </div>
    </>
  );
}
