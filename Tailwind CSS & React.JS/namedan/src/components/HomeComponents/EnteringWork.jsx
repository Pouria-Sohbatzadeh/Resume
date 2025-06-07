import React from "react";

// Component
import ImgHolder from "../ImgHolder";

import { ButtonStyle } from "../styled_component/ButtonStyle";
import SideTxt from "../SideTxt";

// Context
import { SideTxt_HeadlineContext } from "../../context/SideTxt_HeadlineContext";

export default function EnteringWork({}) {
  const smallTexts = [
    "برگزاری گارگاه های دوساعت , مباحثه تخصصی با پشتیبانان , توضیح درباره نقشه راه برای رسیدن به موفقیت",
    "وبدیو کنفرانس طرح های برگزیده و صخبت درباره ی آنهابرگزاری گارگاه های دوساعت , مباحثه تخصصی با پشتیبانان , توضیح درباره نقشه راه برای رسیدن به موفقیت",
    "وبدیو کنفرانس طرح های برگزیده و صخبت درباره ی آنها",
  ];
  return (
    <section
      className="custom_container lg:pr-[60px] lg:pl-[60px] mt-[140px]
    flex justify-between items-center "
    >
      {/* Right */}
      <ImgHolder imgSize="lg:w-[580px]" imgAddress="/img/questionImage.png" />

      {/* Left */}
      <SideTxt_HeadlineContext.Provider value="وبینار ورود به کسب وکار">
        <SideTxt
          SideTxt_class="lg:gap-[20px]"
          smallTxtHolder_class={"lg:w-[470px]"}
          smallTexts={smallTexts}
        >
          {/* Button */}
          <ButtonStyle
            className="w-[240px] !pr-[30px]
!pl-[30px]"
            many_items
          >
            <span>مشاهده و شرکت در وبینارها</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </ButtonStyle>
        </SideTxt>
      </SideTxt_HeadlineContext.Provider>
    </section>
  );
}
