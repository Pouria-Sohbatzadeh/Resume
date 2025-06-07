import React, { useState } from "react";

import ListMembers from "../../ListMembers";
import CourseExplained from "./CourseExplained";
import Season_header from "./Season_header";
import User_Comments from "./User_Comments";

// Context
import { HeadlineContext } from "../../../context/Headline_iconContext";

export default function ExpandedInfo() {
  const [isVisible, setIsVisible] = useState({
    courseExplained: true,
    seasonHeader: false,
    comments: false,
  });

  const navData = [
    {
      name: "توضیحات دوره",
      handler: () =>
        setIsVisible({
          courseExplained: true,
          seasonHeader: false,
          comments: false,
        }),
    },
    {
      name: "سرفصل های دوره",
      handler: () =>
        setIsVisible({
          courseExplained: false,
          seasonHeader: true,
          comments: false,
        }),
    },
    {
      name: "نظرات کاربران",
      handler: () =>
        setIsVisible({
          courseExplained: false,
          seasonHeader: false,
          comments: true,
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
      path: "/Intriduction",
      StepName: "معرفی دوره",
      path: "/"
    },
    {
      path: "/Course_Paths",
      StepName: "مسیر دوره",
      path: "/"
    },
    {
      path: "/Work_Structure",
      StepName: "ساختار کار",
      path: "/"
    },

    // 2nd pair
    {
      path: "/Signup_Guide",
      StepName: "نحوه ثبت نام",
      path: "/"
    },
    {
      path: "/ResumeBuilding",
      StepName: "ساخت رزومه",
      path: "/"
    },
    {
      path: "/LoadingResume",
      StepName: "بارگذاری رزومه",
      path: "/"
    },

    {
      path: "/SocialMedia_Activity",
      StepName: "فعالیت در شبکه های اجتماعی",
      path: "/"
    },
    {
      path: "/End",
      StepName: "سخن پایانی",
      path: "/"
    },
  ];

  // Animation

  return (
    <div className="w-[71.6%] flex flex-col gap-[40px]">
      {/* Video */}
      <div className="w-full rounded-[12px] overflow-hidden">
        <video
          src="video/Love is Weakness (Dornian Heresy fan song).mp4"
          typeof="mp4"
          controls
        ></video>
      </div>

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
              headlineTxt: "توضیحات دوره",
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
              headlineTxt: "سرفصل های دوره",
              headlineTxt_class: "!font-bold lg:text-[24px]",
            }}
          >
            <Season_header seasonSteps={seasonSteps} />
          </HeadlineContext.Provider>
        )}

        {/* User Comments */}
        {isVisible.comments && (
          <HeadlineContext.Provider
            value={{
              headlineTxt: "نظرات کاربران",
              headlineTxt_class: "!font-bold lg:text-[24px]",
            }}
          >
            <User_Comments />
          </HeadlineContext.Provider>
        )}
      </div>
    </div>
  );
}
