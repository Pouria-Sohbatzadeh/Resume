import React from "react";
import ImgHolder from "../../ImgHolder";
import { HeadlineStyle } from "../../styled_component/HeadlineStyle";
import { SmallTxt_style } from "../../styled_component/SmallTxt_style";
import { NavLink } from "react-router-dom";

export default function VabinarBox({ vabinarBox_data, vabinarBox_size = "lg:w-[288px]" }) {
  return (
    <>
      {vabinarBox_data.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center lg:gap-[10px] pt-[10px] pb-[18px] flex-shrink-0
          bg-white ${vabinarBox_size} lg:pr-[16px] lg:pl-[16px] rounded-[12px] `}
        >
          <ImgHolder
            imgSize="w-full"
            imgAddress={item.imgAddress}
            imgAlt={item.imgAlt}
          />

          {/* Texts */}
          <div className="flex flex-col w-full">
            <div className="border-b border-[#D9D9D9] w-full pb-[10px] flex flex-col gap-[10px]">
              <HeadlineStyle className="text-[14px] !font-bold">
                {item.headline}
              </HeadlineStyle>

              <SmallTxt_style className="text-[14px] lg:!leading-[28px]">
                {item.smallText}
              </SmallTxt_style>
            </div>

            <NavLink
              to={item.link}
              className="text-[14px] pt-[10px] font-black text-[#3532B2] flex justify-center"
            >
              {item.signUp_text}
            </NavLink>
          </div>
        </div>
      ))}
    </>
  );
}
