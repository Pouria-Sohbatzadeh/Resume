import React, { useContext } from "react";

import VabinarBox from "../HomeComponents/Newest_VabinarComponents/VabinarBox";
import { SmallTxt_style } from "../styled_component/SmallTxt_style";

import { CourseNavContext } from "../../context/NavContext";

export default function FilteredContent() {
  const courseDataContext = useContext(CourseNavContext);

  return (
    <div className="w-full flex flex-col lg:gap-[15px]">
      {/* Top */}
      <div className="flex justify-between w-full">
        <SmallTxt_style className="lg:text-[16px]">
          140 دوره آموزشی
        </SmallTxt_style>

        <div className="relative lg:w-[175px] lg:h-[48px] rounded-[12px] bg-white">
          <select
            defaultValue=""
            className="appearance-none h-full w-full lg:pr-[40px]
          lg:text-[12px] font-medium"
          >
            <option value="" disabled hidden>
              جدیدترین ها
            </option>
            <option>Inter</option>
            <option>Poppins</option>
            <option>Raleway</option>
          </select>

          {/* Custom icon */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 pointer-events-none absolute lg:left-[20px] top-1/2 -translate-y-1/2 text-[#666666]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="w-full grid grid-cols-3 justify-between gap-[20px]">
        <VabinarBox
          vabinarBox_data={courseDataContext}
          vabinarBox_size={"lg:min-w-[288px]"}
        />
      </div>
    </div>
  );
}
