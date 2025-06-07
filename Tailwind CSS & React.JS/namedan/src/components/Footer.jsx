import React from "react";

import { NavLink, Route, Routes } from "react-router-dom";

// Component
import SiteName from "./SiteName";
import { SmallTxt_style } from "./styled_component/SmallTxt_style";
import FooterNavList from "./FooterNavList";
import Home from "./pages/Home";

export default function Footer() {
  const NamedanListItems = [
    { label: "درباره ما", to: "/about", element: <Home /> },
    { label: "همکاری با نمکدان", to: "/assistance", element: <Home /> },
    { label: "وبلاگ", to: "/weblog", element: <Home /> },
    { label: "نقشه راه", to: "/roadmap", element: <Home /> },
  ];

  const SupportListItems = [
    { label: "پرسش های متداول", to: "/questions", element: <Home /> },
    { label: "ارتباط با ما", to: "/contact", element: <Home /> },
  ];
  return (
    <>
      <footer className="bg-white custom_container lg:p-[60px] grid grid-cols-[35.45%_auto]  justify-between">
        {/* 1/4 column */}
        <div className="flex flex-col gap-[10px]">
          <NavLink to="/" className="cursor-pointer">
            <div className="flex items-center">
              <div className="lg:w-[48px]">
                <img
                  src="/img/siteIcon.png"
                  alt="Namedan icon"
                  className="w-full"
                />
              </div>
              <SiteName />
            </div>
          </NavLink>

          <SmallTxt_style className="text-[12px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده
          </SmallTxt_style>

          <div className="flex gap-2">
            <a href="#" className="lg:w-[24px] inline-block">
              <img
                src="img/socialMedia/facebook.png"
                alt="Facebook link"
                className="w-full"
              />
            </a>
            <a href="#" className="lg:w-[24px] inline-block">
              <img
                src="img/socialMedia/whatsapp.png"
                alt="Whatsapp link"
                className="w-full"
              />
            </a>
          </div>
        </div>

        {/* Remaining 3/4 columns split evenly */}
        <div className="grid grid-cols-3 gap-[20px]">
          <FooterNavList title={"نمکدان"} links={NamedanListItems} />
          <FooterNavList title={"پشتیبانی"} links={SupportListItems} />

          <div className="flex lg:gap-[30px]">
            <div className="flexCenter lg:w-[96px] lg:h-[128px] rounded-[12px] border border-[#EAEAEA]">
              <img src="img/excelenceMarks/excelenceMarks1.png" alt="" />
            </div>
            <div className="flexCenter lg:w-[96px] lg:h-[128px] rounded-[12px] border border-[#EAEAEA]">
              <img src="img/excelenceMarks/excelenceMarks2.png" alt="" />
            </div>
          </div>
        </div>
      </footer>

      <Routes>
        {/* The routes for the NamedanList */}
        {NamedanListItems.map((item, index) => (
          <Route key={index} path={item.to} element={item.element} />
        ))}

        {/* The routes for the SupportList */}
        {SupportListItems.map((item, index) => (
          <Route key={index} path={item.to} element={item.element} />
        ))}
      </Routes>
    </>
  );
}
