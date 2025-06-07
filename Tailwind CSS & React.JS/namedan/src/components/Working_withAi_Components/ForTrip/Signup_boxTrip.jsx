import React from "react";

import { ButtonStyle } from "../../styled_component/ButtonStyle";

import Signup_info from "../Left/Signup_info";

import { NavLink } from "react-router-dom";

export default function Signup_boxJS() {
  // Example array, replace or import your actual data
  const infoItems = [
    {
      infoType: "مکان برگزاری",
      infoTxt: "تهران",
    },
    {
      infoType: "قیمت دوره",
      infoTxt: "3,000,000 تومان",
      price: true
    },
    {
      infoType: "نوع برگزاری دوره ",
      infoTxt: "حضوری",
    },
    {
      infoType: "ظرفیت اردو",
      infoTxt: "30 نفر",
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
        headImgAddress="img/courses/startup_course3.png"
        courseName="اردوی کسب و کار"
        generalInfo={infoItems}
      />

      <div className="mt-[10px] w-full border-t border-[#F4F5F6] pt-[25px]">
        <NavLink to="/ثبت نام اردو">
          <ButtonStyle className="lg:!h-[48px] w-full">
          ثبت نام اردو
          </ButtonStyle>
        </NavLink>
      </div>
    </div>
  );
}
