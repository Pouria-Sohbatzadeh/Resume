import React from "react";
// Components
import SiteName from "../SiteName";
import ImgHolder from "../ImgHolder";
import Search from "../Search";

export default function OurHelp() {
  return (
    <section className="custom_container lg:pr-[60px] lg:pl-[60px]  mt-[80px] flex justify-between">
      {/* Texts */}
      <div className="lg:pr-[20px] flex flex-col justify-center gap-[20px]">
        {/* Big */}
        <div className="text-[32px] text-[#000] font-black flex flex-col ">
          <h2 className="flex lg:gap-[10px] items-end">
            <SiteName siteNameSize={"lg:w-[99px]"} />
            مسیری برای رسیدن به{" "}
          </h2>
          <h2>موفقیت شغلی و مهارت در کسب وکار</h2>
        </div>
        <span className="text-[24px] font-bold text-[#333333]">
          از صفر تا صد مسیر همراه شما عزیزان هستیم
        </span>

        <p className="text-[16px] text-[#444444] font-medium leading-[30px]">
          برگزاری دوره های آموزشی و منتورینگ شامل کارگاه های2 ساعته , مباحث
          تخصصی , دیدار با کارآفرینان, بازدید ازپارک علم فناوری ها
        </p>

        <Search />
      </div>

      {/* Marketing img */}
      <div className="lg:pl-[20px]">
        <ImgHolder
          imgSize={"lg:w-[560px]"}
          imgAddress={"/img/coding_image.png"}
          imgAlt={"Image of Coding"}
        ></ImgHolder>
      </div>
    </section>
  );
}
