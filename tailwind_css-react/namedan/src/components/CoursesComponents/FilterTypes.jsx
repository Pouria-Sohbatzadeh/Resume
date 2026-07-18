import React, { useState } from "react";
import FilterDrop from "./FilterDrop";
import Drop from "../Drop";
import PriceTag from "./PriceTag";
import { SmallTxt_style } from "../styled_component/SmallTxt_style";

export default function FilterTypes() {
  // Sample data: each accordion has a title and an array of items for checkboxes
  const accordionData = [
    {
      id: 1,
      title: "رشته",
      items: ["برق", "مکانیک", "کامپیوتر", "معماری"],
    },
    {
      id: 2,
      title: "نوع برگزاری",
      items: ["انلاین", "افلاین", "حضوری"],
    },
    {
      id: 3,
      title: "میزان ساعت آموزش",
      items: [
        "1 تا 2 ساعت",
        "2 تا 5 ساعت",
        "5ساعت تا 10 ساعت",
        "بیش از ده ساعت",
      ],
    },
    {
      id: 4,
      title: "براساس شهر",
      items: ["تهران", "اصفهان", "مشهد"],
    },
  ];

  const [isFree, setIsFree] = useState(false);
  return (
    <div className="flex-grow lg:min-w-[288px]">
      {/* Headline */}
      <div className="w-full flex flex-col lg:gap-[36px]">
        <div className="flex items-center lg:gap-[10px]">
          <div>
            <img src="/img/filterIcon.png" alt="Filters" />
          </div>
          <span className="lg:text-[19px] font-semibold text-[#222222]">
            فیلتر
          </span>
        </div>

        {/* The filters */}
        <div className="lg:w-full rounded-[12px] bg-white">
          <FilterDrop accordionData={accordionData} seperators={4} />
          <Drop title={"قیمت"} collpaserClass={"!pb-[10px]"} collapseContent_class={"!pr-0 !pb-[0]"}>
            {/* Content */}
            <div className="flex flex-col gap-[10px] lg:mt-[10px]">
              {/* Texts */}
              <div className="flex flex-col gap-[30px] ">
                <PriceTag prefix={"از"} price={10000} />
                <PriceTag prefix={"تا"} price={10000000} />
              </div>

              <div></div>

              <div className="flex justify-between items-center">
                <SmallTxt_style className="text-[14px]">رایگان</SmallTxt_style>
                <input
                  type="checkbox"
                  checked={isFree}
                  onChange={() => setIsFree(!isFree)}
                  className="toggle !border-none !h-[16px] customCheck
                  bg-[#EFEFEF] text-[#DDDDDD]   checked:bg-orange-400 checked:text-orange-800
                  rotate-180"
                />
              </div>
            </div>
          </Drop>
        </div>
      </div>
    </div>
  );
}
