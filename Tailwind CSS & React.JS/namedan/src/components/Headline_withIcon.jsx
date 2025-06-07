import React from "react";

import ImgHolder from "./ImgHolder";
import { HeadlineStyle } from "./styled_component/HeadlineStyle";

export default function Headline_withIcon({headlineTxt, headlineTxt_class, holderClass}) {
  return (
    <>
      {/* Headline */}
      <div className={`flex items-end ${holderClass}`}>
        {/* Icon */}
        <ImgHolder
          imgAddress="/img/headlineIcon.png"
          imgSize=""
          imgAlt="Headline Icon"
        />

        <HeadlineStyle className={`relative left-[15px] top-[5px] ${headlineTxt_class}`}>
          {headlineTxt}
        </HeadlineStyle>
      </div>
    </>
  );
}
