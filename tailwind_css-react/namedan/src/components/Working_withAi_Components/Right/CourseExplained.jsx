import React, { useContext } from "react";

import { SmallTxt_style } from "../../styled_component/SmallTxt_style";

import Headline_withIcon from "../../Headline_withIcon";

// Context
import { HeadlineContext } from "../../../context/Headline_iconContext";

export default function CourseExplained({ textBlocks }) {
  const { headlineTxt, headlineTxt_class } = useContext(HeadlineContext);
  return (
    <div className="custom_container pr-[20px] pl-[10px] lg:mt-[20px] flex flex-col gap-[25px]">
      {/* Headline */}
      <Headline_withIcon
        headlineTxt={headlineTxt}
        headlineTxt_class={headlineTxt_class}
      />

      <div>
        {textBlocks.map((txt, index) => (
          <SmallTxt_style key={index} className="!leading-[28px] text-[14px]">
            {txt}
          </SmallTxt_style>
        ))}
      </div>
    </div>
  );
}
