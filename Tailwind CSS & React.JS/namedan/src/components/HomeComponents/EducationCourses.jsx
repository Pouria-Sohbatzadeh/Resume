import React, { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

import { Route, Routes } from "react-router-dom";

// Components
import VabinarBox from "./Newest_VabinarComponents/VabinarBox";
import Headline_SeeMore from "../Headline_SeeMore";

export default function EducationCourses() {
  const coursesData = [
    {
      imgAddress: "/img/courses/ai_course1.png",
      imgAlt: "دوره آموزشی کار با هوش مصنوعی",
      headline: "دوره آموزشی کار با هوش مصنوعی",

      smallText:
        "هدف ایجاد انکیزه و توسعه در حوزه های مختلف برای هنر جویان و رفع دغدغه شغلی",
      signUp_text: "ثبت نام در دوره",
      //   The link's not provided yet
      link: "/Working_withAi",
    },
    {
      imgAddress: "/img/courses/dollor_course2.png",
      imgAlt: "دوره اموزش درامد دلاری",
      headline: "دوره اموزش درامد دلاری",

      smallText:
        "هدف ایجاد انکیزه و توسعه در حوزه های مختلف برای هنر جویان و رفع دغدغه شغلی",
      signUp_text: "ثبت نام در دوره",
      //   The link's not provided yet
      link: "/",
    },
    {
      imgAddress: "/img/courses/startup_course3.png",
      imgAlt: "دوره اموزش استارتاپ",
      headline: "دوره اموزش استارتاپ",

      smallText:
        "هدف ایجاد انکیزه و توسعه در حوزه های مختلف برای هنر جویان و رفع دغدغه شغلی",
      signUp_text: "ثبت نام در دوره",
      //   The link's not provided yet
      link: "/",
    },
    {
      imgAddress: "/img/courses/freelancer_course4.png",
      imgAlt: "دوره اموزش فریلنسری",
      headline: "دوره اموزش فریلنسری",

      smallText:
        "هدف ایجاد انکیزه و توسعه در حوزه های مختلف برای هنر جویان و رفع دغدغه شغلی",
      signUp_text: "ثبت نام در دوره",
      //   The link's not provided yet
      link: "/",
    },

    {
      imgAddress: "/img/courses/ai_course1.png",
      imgAlt: "دوره آموزشی کار با هوش مصنوعی",
      headline: "دوره آموزشی کار با هوش مصنوعی",

      smallText:
        "هدف ایجاد انکیزه و توسعه در حوزه های مختلف برای هنر جویان و رفع دغدغه شغلی",
      signUp_text: "ثبت نام در دوره",
      //   The link's not provided yet
      link: "/",
    },
    {
      imgAddress: "/img/courses/dollor_course2.png",
      imgAlt: "دوره اموزش درامد دلاری",
      headline: "دوره اموزش درامد دلاری",

      smallText:
        "هدف ایجاد انکیزه و توسعه در حوزه های مختلف برای هنر جویان و رفع دغدغه شغلی",
      signUp_text: "ثبت نام در دوره",
      //   The link's not provided yet
      link: "/",
    },
  ];

  // Scroll
  const ref = useRef(null); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:
  return (
    <>
      <section
        className="custom_container lg:p-[40px] lg:pr-[60px] lg:pl-[60px] mt-[30px]
      flex flex-col gap-[20px]"
      >
        <Headline_SeeMore headlineTxt="دور های آموزشی" />

        {/* The courses */}
        <ul
          className="flex lg:gap-[20px] overflow-auto custom-scrollbar lg:pb-[30px]"
          {...events}
          ref={ref} // add reference and events to the wrapping div
        >
          <VabinarBox vabinarBox_data={coursesData} />
        </ul>
      </section>


    </>
  );
}
