import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import Headline_withIcon from "../../Headline_withIcon";
import { SmallTxt_style } from "../../styled_component/SmallTxt_style";

// Context
import { HeadlineContext } from "../../../context/Headline_iconContext";

export default function Season_header({ seasonSteps }) {
  const { headlineTxt, headlineTxt_class } = useContext(HeadlineContext);

  return (
    <div className="custom_container pt-[20px] pb-[20px] pr-[20px] pl-[20px]
     lg:mt-[20px] 
     flex flex-col gap-[25px] 
     bg-white rounded-[12px]">
      {/* Headline */}
      <Headline_withIcon
        headlineTxt={headlineTxt}
        headlineTxt_class={headlineTxt_class}
      />

      {/* Season steps */}
      <div>
        {seasonSteps.map((step, index) => {
          const isLast = index === seasonSteps.length - 1;

          // Destructure with defaults
          const { path, StepName, bigStep = null, icon = true } = step;

          return (
            <NavLink
              key={index}
              to={path}
              className={`flex justify-between pt-[10px] ${
                !isLast ? "border-b border-[#F8F9FA] pb-[10px]" : ""
              }`}
            >
              {/* Right */}
              <div className="flex items-center">
                {/* Icon dot */}
                <div
                  className="size-[8px] rounded-[2px]"
                  style={{
                    background:
                      "linear-gradient(180deg, #444444 0%, rgba(68, 68, 68, 0.64) 100%)",
                  }}
                ></div>

                {/* Small step name */}
                <SmallTxt_style className="lg:text-[16px] mr-[10px]">
                  {StepName}
                </SmallTxt_style>

                {/* Big step headline (if present) */}
                {bigStep && (
                  <span className="!font-bold lg:text-[16px] mr-[15px]">
                    {bigStep}
                  </span>
                )}
              </div>

              {/* Arrow icon (defaults to true) */}
              {icon && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
