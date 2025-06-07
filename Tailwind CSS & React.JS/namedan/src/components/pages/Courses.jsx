import React from "react";

import SearchResult from "../CoursesComponents/SearchResult";
import Filter from "../CoursesComponents/Filter";

import { CourseNavContext } from "../../context/NavContext";


export default function Courses() {
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
      link: "/دوره اموزش درامد دلاری",
    },
    {
      imgAddress: "/img/courses/startup_course3.png",
      imgAlt: "دوره اموزش استارتاپ",
      headline: "دوره اموزش استارتاپ",

      smallText:
        "هدف ایجاد انکیزه و توسعه در حوزه های مختلف برای هنر جویان و رفع دغدغه شغلی",
      signUp_text: "ثبت نام در دوره",
      //   The link's not provided yet
      link: "/دوره اموزش استارتاپ",
    },
    {
      imgAddress: "/img/courses/freelancer_course4.png",
      imgAlt: "دوره اموزش فریلنسری",
      headline: "دوره اموزش فریلنسری",

      smallText:
        "هدف ایجاد انکیزه و توسعه در حوزه های مختلف برای هنر جویان و رفع دغدغه شغلی",
      signUp_text: "ثبت نام در دوره",
      //   The link's not provided yet
      link: "/دوره اموزش فریلنسری",
    },

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
      link: "/دوره اموزش درامد دلاری",
    },
  ];
  return (
    <section>
      <SearchResult />
      <CourseNavContext.Provider value={coursesData}>
        <Filter />
      </CourseNavContext.Provider>
    </section>
  );
}
