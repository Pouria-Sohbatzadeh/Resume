import React, { useContext } from "react";

import Headline_withIcon from "./Headline_withIcon";
import { SmallTxt_style } from "./styled_component/SmallTxt_style";

// Context
import { SideTxt_HeadlineContext } from "../context/SideTxt_HeadlineContext";

export default function SideTxt({
  smallTexts = [],
  children,
  smallTxtHolder_class,
  SideTxt_class = "",
}) {
  const headlineContext = useContext(SideTxt_HeadlineContext);

  return (
    <div className={`flex flex-col ${SideTxt_class}`}>
      {/* Texts */}
      <div className="flex flex-col gap-[20px]">
        {/* Big Headline */}
        <Headline_withIcon
          headlineTxt={headlineContext}
          holderClass="text-[32px]"
        />

        {/* Small Texts */}
        <div className={`text-[14px] flex flex-col ${smallTxtHolder_class}`}>
          {smallTexts.map((text, index) => (
            <SmallTxt_style key={index}>{text}</SmallTxt_style>
          ))}
        </div>
      </div>

      {/* Slot for Button or other JSX */}
      {children}
    </div>
  );
}
