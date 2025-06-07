import React from "react";

import ImgHolder from "../../ImgHolder";
import { HeadlineStyle } from "../../styled_component/HeadlineStyle";
import { SmallTxt_style } from "../../styled_component/SmallTxt_style";

// Context
import { CommentContext } from "../../../context/CommentContext";
import { useContext } from "react";

export default function Comment_Box() {
  // Context
  const { imgAddress, name, date, comment } = useContext(CommentContext);
  const rating = Math.max(
    0,
    Math.min(5, Number(useContext(CommentContext).rating))
  );

  // Icon
  const StarIcon = ({ className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`size-4 ${className}`}
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
    </svg>
  );

  // Profile Background
  const bgColors = ["#FF4A4F", "#FF9928", "#FFD700", "#28A745"]; // Red, Orange, Yellow, Green
  const randomBg = bgColors[Math.floor(Math.random() * bgColors.length)];

  return (
    <div
      className="custom_container w-[50%] p-[20px] pb-[38px]
    rounded-[12px] bg-[#F8F9FA]
    flex flex-col gap-[10px]"
    >
      {/* Img, Name, Date, Rating */}
      <div className="flex justify-between items-center">
        {/* Right */}
        <div className="flex items-center gap-[10px]">
          {/* Img */}
          <div
            className="lg:w-[45px] lg:h-[45px] flexCenter 
    outline-[3px] outline-[#FFFFFF] rounded-full overflow-hidden"
            style={{ backgroundColor: randomBg }}
          >
            <ImgHolder
              imgAddress={imgAddress}
              imgSize="lg:w-[26.05px]"
              imgAlt="Commentor"
            />
          </div>

          {/* Name/Data */}
          <div className="flex flex-col">
            <HeadlineStyle
              className="text-[16px] !font-semibold text-[#000] 
            relative top-[1px]"
            >
              {name}
            </HeadlineStyle>
            <SmallTxt_style
              className="!font-normal text-[14px] 
            relative bottom-[3px]"
            >
              {date}
            </SmallTxt_style>
          </div>
        </div>

        {/* Left (Star rating) */}
        <div className="flex gap-[10px]">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={i < rating ? "text-[gold]" : "text-[#ccc]"}
            />
          ))}
        </div>
      </div>

      {/* Actual Comment */}
      <SmallTxt_style className="text-[14px]">{comment}</SmallTxt_style>
    </div>
  );
}
