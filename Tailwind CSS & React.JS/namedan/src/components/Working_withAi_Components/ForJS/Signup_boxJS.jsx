import React from "react";

import { ButtonStyle } from "../../styled_component/ButtonStyle";

import Signup_info from "../Left/Signup_info";

import { NavLink } from "react-router-dom";

export default function Signup_boxJS() {
  // Example array, replace or import your actual data
  const infoItems = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_78_1494)">
            <path
              d="M4 7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7Z"
              stroke="#666666"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 3V7"
              stroke="#666666"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 3V7"
              stroke="#666666"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 11H20"
              stroke="#666666"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11 16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1054 12.2652 15 12 15C11.7348 15 11.4804 15.1054 11.2929 15.2929C11.1054 15.4804 11 15.7348 11 16Z"
              stroke="#666666"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_78_1494">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ), // or: <YourIconComponent />
      infoType: "تاریخ برگزاری ",
      infoTxt: "1403/04/10",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_78_1501)">
            <path
              d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z"
              stroke="#666666"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 7V12"
              stroke="#666666"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 12L14 9"
              stroke="#666666"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_78_1501">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      infoType: "ساعت برگزاری ",
      infoTxt: "14:00",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_78_1506)">
            <path
              d="M9 14L15 8"
              stroke="#666666"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.5 9C9.77614 9 10 8.77614 10 8.5C10 8.22386 9.77614 8 9.5 8C9.22386 8 9 8.22386 9 8.5C9 8.77614 9.22386 9 9.5 9Z"
              fill="#666666"
              stroke="#666666"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.5 14C14.7761 14 15 13.7761 15 13.5C15 13.2239 14.7761 13 14.5 13C14.2239 13 14 13.2239 14 13.5C14 13.7761 14.2239 14 14.5 14Z"
              fill="#666666"
              stroke="#666666"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21L16 19L14 21L12 19L10 21L8 19L5 21Z"
              stroke="#666666"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_78_1506">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ), // or: <YourIconComponent />
      infoType: "هزینه وبینار ",
      infoTxt: "رایگان",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_78_1512)">
            <path
              d="M5 7C5 8.06087 5.42143 9.07828 6.17157 9.82843C6.92172 10.5786 7.93913 11 9 11C10.0609 11 11.0783 10.5786 11.8284 9.82843C12.5786 9.07828 13 8.06087 13 7C13 5.93913 12.5786 4.92172 11.8284 4.17157C11.0783 3.42143 10.0609 3 9 3C7.93913 3 6.92172 3.42143 6.17157 4.17157C5.42143 4.92172 5 5.93913 5 7Z"
              stroke="#666666"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 21V19C3 17.9391 3.42143 16.9217 4.17157 16.1716C4.92172 15.4214 5.93913 15 7 15H11C12.0609 15 13.0783 15.4214 13.8284 16.1716C14.5786 16.9217 15 17.9391 15 19V21"
              stroke="#666666"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
              stroke="#666666"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 21V19C20.9949 18.1172 20.6979 17.2608 20.1553 16.5644C19.6126 15.868 18.8548 15.3707 18 15.15"
              stroke="#666666"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_78_1512">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ), // example icon
      infoType: "ظرفیت",
      infoTxt: "50 نفر",
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
        courseName="وبینار معرفی جاواسکریپت  و نحوه ورود بازار کار آن"
        mentor_img="img/mentors/software/software_mentor2small.jpg"
        mentorName="مهیار میرزایی"
        mentorDetailType="متخصص"
        mentorDetail="حوزه برنامه نویسی"
        Profile="پروفایل منتور"
        generalInfo={infoItems}
      />

      <div className="mt-[10px] w-full border-t border-[#F4F5F6] pt-[25px]">
        <NavLink to="/ثبت نام وبینار">
          <ButtonStyle className="lg:!h-[48px] w-full">
            ثبت نام وبینار
          </ButtonStyle>
        </NavLink>
      </div>
    </div>
  );
}
