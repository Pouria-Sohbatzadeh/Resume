import React from "react";

import { ButtonStyle } from "../../styled_component/ButtonStyle";

import Signup_info from "./Signup_info";

import { NavLink } from "react-router-dom";

export default function Signup_box() {
  // Example array, replace or import your actual data
  const infoItems = [
    {
      icon: null, // or: <YourIconComponent />
      infoType: "قیمت دوره",
      price: true,
      infoTxt: "3,000,000",
    },
    {
      icon: null, // example icon
      infoType: "نوع برگزاری دوره ",
      infoTxt: "آنلاین",
    },
  ];

  return (
    <div
      className="max-w-[25%] flex-grow 
    custom_container pt-[20px] pb-[20px]
    bg-white rounded-[12px]"
    >
      {/* Info about signup */}
      <Signup_info
        headImgAddress="img/courses/ai_course1.png"
        courseName="دوره آموزشی کار با هوش مصنوعی"
        Profile="پروفایل مدرس"
        mentorDetailType="نام مدرس"
        mentorDetail="محمدرضا ناصری"
        generalInfo={infoItems}
      />

      <div className="mt-[10px] w-full border-t border-[#F4F5F6] pt-[25px]">
        <NavLink to="/ثبت نام دوره">
          <ButtonStyle className="lg:!h-[48px] w-full">
            ثبت نام دوره
          </ButtonStyle>
        </NavLink>
      </div>
    </div>
  );
}
