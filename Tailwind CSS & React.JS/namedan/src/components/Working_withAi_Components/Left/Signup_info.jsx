import React from "react";

import { HeadlineStyle } from "../../styled_component/HeadlineStyle";
import { SmallTxt_style } from "../../styled_component/SmallTxt_style";
import { NavLink } from "react-router-dom";

import ImgHolder from "../../ImgHolder";

export default function Signup_info({
  headImgAddress,
  courseName,

  // The 2 below are needed for each other
  mentor_img,
  mentorName,

  // ////////////////////////////

  Profile,
  mentorDetailType,
  mentorDetailType_class = "text-[16px] font-bold",
  mentorDetail,
  mentorDetail_class = "text-[14px] font-bold",
  generalInfo = [],
}) {
  return (
    <div className="flex flex-col w-full ">
      {headImgAddress && (
        <ImgHolder
          imgAddress={headImgAddress}
          imgSize="w-full"
          className="rounded-[12px] mb-[15px]"
        />
      )}

      <HeadlineStyle>{courseName}</HeadlineStyle>

      {((mentor_img && mentorName) || Profile) && (
        <div
          className=" mt-[15px] flex flex-col gap-[15px]
       border-t border-[#F4F5F6] pt-[15px] pb-[15px]"
        >
          {/* Mentor img and name */}
          {mentor_img && mentorName && (
            <div className="flex items-center gap-[10px]">
              <ImgHolder
                imgAddress={mentor_img}
                imgSize="w-[47px]"
                className="rounded-[124px]"
              />
              <HeadlineStyle className="text-[14px]">
                {mentorName}
              </HeadlineStyle>
            </div>
          )}

          {/* Mentor Details (Name (If there isn't an image), Profession (If the image's there), etc...) */}
          {mentorDetailType && mentorDetail && (
            <div className="flex justify-between">
              {/* Right */}
              <div className="flex items-center gap-2">
                <SmallTxt_style
                  className={`!text-[14px] ${mentorDetailType_class}`}
                >
                  {mentorDetailType}:
                </SmallTxt_style>
              </div>

              {/* Left */}
              <HeadlineStyle className={`lg:text-[16px] ${mentorDetail_class}`}>
                {mentorDetail}
              </HeadlineStyle>
            </div>
          )}

          {/* Profile */}
          {Profile && (
            <NavLink
              to="/MentorLocation"
              className="flex justify-between items-center"
            >
              <HeadlineStyle className="text-[14px] !font-bold">
                {Profile}
              </HeadlineStyle>
              {/* Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </NavLink>
          )}
        </div>
      )}

      {generalInfo.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-t border-[#F4F5F6] pt-[15px] pb-[15px]"
        >
          {/* Right */}
          <div className="flex items-center gap-2">
            {item.icon && <div className="text-[#444444]">{item.icon}</div>}
            <SmallTxt_style>{item.infoType}:</SmallTxt_style>
          </div>

          {/* Left */}
          <HeadlineStyle className="text-[16px] flex gap-[3px] items-center">
            {item.infoTxt}
            {item.price === true && (
              <SmallTxt_style className="text-[14px]">تومان</SmallTxt_style>
            )}
          </HeadlineStyle>
        </div>
      ))}
    </div>
  );
}
