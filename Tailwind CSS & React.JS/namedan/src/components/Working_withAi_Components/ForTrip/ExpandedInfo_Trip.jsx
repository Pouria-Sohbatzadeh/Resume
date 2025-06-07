import React, { useState } from "react";

import ListMembers from "../../ListMembers";
import CourseExplained from "../Right/CourseExplained";
import Season_header from "../Right/Season_header";
import VabinarBox from "../../HomeComponents/Newest_VabinarComponents/VabinarBox";
import Headline_withIcon from "../../Headline_withIcon"

// Context
import { HeadlineContext } from "../../../context/Headline_iconContext";

export default function ExpandedInfo_Trip() {
  const [isVisible, setIsVisible] = useState({
    courseExplained: true,
    seasonHeader: false,
    speechers: false,
  });

  const navData = [
    {
      name: "توضیحات اردو",
      handler: () =>
        setIsVisible({
          courseExplained: true,
          seasonHeader: false,
          speechers: false,
        }),
    },
    {
      name: "سرفصل های اردو",
      handler: () =>
        setIsVisible({
          courseExplained: false,
          seasonHeader: true,
          speechers: false,
        }),
    },
    {
      name: "سخنرانان",
      handler: () =>
        setIsVisible({
          courseExplained: false,
          seasonHeader: false,
          speechers: true,
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
      StepName: "روز اول : ",
      bigStep: "سخنرانی ونحوه ورود به بازار کار",
      path: "/",
    },
    {
      path: "/ArtistRace_TeamGathering",
      StepName: "روز دوم : ",
      bigStep: "مسابقه بین هنرجویان و تشکیل تیم",
      path: "/",
    },
    {
      path: "/Speech2",
      StepName: "روز سوم : ",
      bigStep: "سخنرانی و ادامه روز دوم مسابقه",
      path: "/",
    },
    {
      path: "/Giving Prizes",
      StepName: "روز چهارم: ",
      bigStep: "برگزاری اختتامیه و دادن جوایز به تیم های برتر",
      path: "/",
    },
  ];

  const mentorsData = [
    {
      imgAddress: "/img/mentors/software/software_mentor1.png",
      imgAlt: "Software mentor محمد میرزایی",
      headline: "محمد میرزایی",

      smallText: "کارشناس ارشد ای تی",
      signUp_text: "مشاهده پروفایل",
      //   The link's not provided yet
      link: "/محمد میرزایی",
    },
    {
      imgAddress: "/img/mentors/software/software_mentor2.png",
      imgAlt: "Software mentor سهیل صدرایی",
      headline: "سهیل صدرایی",

      smallText: "دکترا نرم افزار",
      signUp_text: "مشاهده پروفایل",
      //   The link's not provided yet
      link: "/سهیل صدرایی",
    },
    {
      imgAddress: "/img/mentors/software/software_mentor3.png",
      imgAlt: "Software mentor سینا بیگی",
      headline: "سینا بیگی",

      smallText: "کارشناس ارشد ای تی",
      signUp_text: "مشاهده پروفایل",
      //   The link's not provided yet
      link: "/سینا بیگی",
    },
  ];

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
              headlineTxt: "توضیحات اردو",
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

        {isVisible.speechers && (
          <div className="flex flex-col gap-[20px] mt-[20px] pr-[20px]">
            {/* Headline */}
            <Headline_withIcon
              headlineTxt={"سخنرانان"}
              headlineTxt_class="text-[24px] !font-bold"
            />
            <ul className="flex lg:gap-[20px] overflow-auto custom-scrollbar lg:pb-[30px]">
              <VabinarBox vabinarBox_data={mentorsData} />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
