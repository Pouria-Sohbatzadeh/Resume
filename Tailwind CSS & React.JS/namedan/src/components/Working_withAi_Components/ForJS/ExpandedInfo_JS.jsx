import React, { useState } from "react";

import ListMembers from "../../ListMembers";
import CourseExplained from "../Right/CourseExplained";
import Season_header from "../Right/Season_header";
import Recommended_Vabinar from "./Recommended_Vabinar";

// Context
import { HeadlineContext } from "../../../context/Headline_iconContext";
import ImgHolder from "../../ImgHolder";

export default function ExpandedInfo_JS() {
  const [isVisible, setIsVisible] = useState({
    courseExplained: true,
    seasonHeader: false,
  });

  const navData = [
    {
      name: "توضیحات وبینار",
      handler: () =>
        setIsVisible({
          courseExplained: true,
          seasonHeader: false,
        }),
    },
    {
      name: "سرفصل های وبینار",
      handler: () =>
        setIsVisible({
          courseExplained: false,
          seasonHeader: true,
        }),
    },
  ];

  // The Data
  // Description
  const descriptionData = [
    `React یکی از کتابخانه‌های متن باز و رایگان جاوا اسکریپت است که توسط
          فیسبوک و برای بهبود طراحی رابط کاربری در وب عرضه شده است. هدف React
          این است که روند توسعه ساده و سریع شود و یادگیری آن فرصت‌های شغلی جدیدی
          را برای شما به ارمغان می‌آورد. ویژگی‌های کاربردی این کتابخانه باعث شده
          که اغلب برنامه‌نویسان جاوا اسکریپت برای یادگیری آن اقدام کنند. در نگاه
          اول شاید برخی تصور کنند که React Native بسیار شبیه به React یا همان
          ReactJs است اما تفاوت‌های زیادی بین این دو وجود دارد و یکی نیستند.
          React Native یک فریم‌ورک کراس پلتفرم زبان جاوا اسکریپت است درحالی‌که
          React یکی از کتابخانه‌های این زبان محسوب می‌شود.`,
    `این دوره شما را به خوبی با کتابخانه React آشنا می‌کند و اگر به فکر
          افزایش سطح مهارت خود هستید، می‌توانید روی این دوره حساب کنید.`,
  ];

  // Season Header
  const seasonSteps = [
    {
      path: "/Speech",
      StepName: "اشنایی با جاوا اسکریپت",
      path: "/",
      icon: false,
    },
    {
      path: "/ArtistRace_TeamGathering",
      StepName: "تاریخچه جاوااسکریپت",
      path: "/",
      icon: false,
    },
    {
      path: "/Speech2",
      StepName: "معرفی کتابخانه های من",
      path: "/",
      icon: false,
    },
    {
      path: "/Giving Prizes",
      StepName: "نحوه ورود به بازار کار",
      path: "/",
      icon: false,
    },
  ];

  return (
    <div className="w-[71.6%] flex flex-col gap-[40px]">
      {/* Img */}
      <ImgHolder
        imgSize="w-full"
        imgAddress="img/programmingIcons/javascript1--big.png"
        imgAlt="JS course"
        className="rounded-[12px] overflow-hidden"
      />

      {/* Tabs */}
      <div className="flex flex-col lg:gap-[20px]">
        {/* Categories */}
        <ul className="flex gap-[20px] border-b border-[#CCCCCC] pb-[8px] ">
          <ListMembers navItems={navData} />
        </ul>

        {/* Course Explaination */}
        {isVisible.courseExplained && (
          <HeadlineContext.Provider
            value={{
              headlineTxt: "توضیحات وبینار",
              headlineTxt_class: "!font-bold lg:text-[24px]",
            }}
          >
            <CourseExplained textBlocks={descriptionData} />
          </HeadlineContext.Provider>
        )}

        {/* Headers for the Seasons */}
        {isVisible.seasonHeader && (
          <HeadlineContext.Provider
            value={{
              headlineTxt: "سرفصل های وبینار",
              headlineTxt_class: "!font-bold lg:text-[24px]",
            }}
          >
            <Season_header seasonSteps={seasonSteps} />
          </HeadlineContext.Provider>
        )}
      </div>

      <Recommended_Vabinar />
    </div>
  );
}
