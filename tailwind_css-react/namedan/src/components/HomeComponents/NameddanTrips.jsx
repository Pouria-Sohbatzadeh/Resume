import React from "react";

// Component
import ImgHolder from "../ImgHolder";

import { ButtonStyle } from "../styled_component/ButtonStyle";
import SideTxt from "../SideTxt";

import { NavLink } from "react-router-dom";

// Context
import { SideTxt_HeadlineContext } from "../../context/SideTxt_HeadlineContext";

export default function NameddanTrips() {
  const smallTexts = [
    "برگزاری  گارگاه های دوساعت  , مباحثه تخصصی با پشتیبانان , توضیح درباره نقشه راه برای رسیدن به موفقیت",
    "وبدیو کنفرانس طرح های برگزیده  و صخبت درباره ی انهابرگزاری  گارگاه های دوساعت  , مباحثه تخصصی با پشتیبانان , توضیح درباره نقشه راه برای رسیدن به موفقیت",
    "وبدیو کنفرانس طرح های برگزیده  و صخبت درباره ی انها",
  ];

  return (
    <section
      className="custom_container lg:pr-[60px] lg:pl-[60px] mt-[140px] bg-white
        flex justify-between items-center "
    >
      {/* Right */}
      <SideTxt_HeadlineContext.Provider value="اردوهای نمکدان">
        <SideTxt
          SideTxt_class="lg:gap-[20px]"
          smallTxtHolder_class={"lg:w-[470px]"}
          smallTexts={smallTexts}
        >
          {/* Button */}
          <NavLink to="/Trip">
            <ButtonStyle
              className="w-[240px] !pr-[30px]
    !pl-[30px]"
              many_items
            >
              <span>مشاهده و شرکت در اردو ها</span>
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
          </NavLink>
        </SideTxt>
      </SideTxt_HeadlineContext.Provider>

      {/* Left */}
      <ImgHolder imgSize="lg:w-[580px]" imgAddress="/img/questionImage2.png" />
    </section>
  );
}
