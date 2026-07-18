import React, { useState, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

import { SectionStyled } from "../styled_component/SectionStyled";
import { HeadlineStyle } from "../styled_component/HeadlineStyle";

// Components
import ListMembers from "../ListMembers";
import VabinarBox from "./Newest_VabinarComponents/VabinarBox";
import Headline_withIcon from "../Headline_withIcon";

export default function Mentors() {
  const [isVisible, setIsVisible] = useState({
    software: true,
    calculous: false,
    animation: false,
    architect: false,
    electricity: false,
    industry: false,
    art: false,
  });

  const navData = [
    {
      name: "شبکه و نرم افزار",
      handler: () =>
        setIsVisible({
          software: true,
          calculous: false,
          animation: false,
          architect: false,
          electricity: false,
          industry: false,
          art: false,
        }),
    },
    {
      name: "حسابداری",
      handler: () =>
        setIsVisible({
          software: false,
          calculous: true,
          animation: false,
          architect: false,
          electricity: false,
          industry: false,
          art: false,
        }),
    },
    {
      name: "پویانمایی",
      handler: () =>
        setIsVisible({
          software: false,
          calculous: false,
          animation: true,
          architect: false,
          electricity: false,
          industry: false,
          art: false,
        }),
    },
    {
      name: "معماری",
      handler: () =>
        setIsVisible({
          software: false,
          calculous: false,
          animation: false,
          architect: true,
          electricity: false,
          industry: false,
          art: false,
        }),
    },
    {
      name: "برق و الکترونیک",
      handler: () =>
        setIsVisible({
          software: false,
          calculous: false,
          animation: false,
          architect: false,
          electricity: true,
          industry: false,
          art: false,
        }),
    },
    {
      name: "صنعت",
      handler: () =>
        setIsVisible({
          software: false,
          calculous: false,
          animation: false,
          architect: false,
          electricity: false,
          industry: true,
          art: false,
        }),
    },
    {
      name: "هنر",
      handler: () =>
        setIsVisible({
          software: false,
          calculous: false,
          animation: false,
          architect: false,
          electricity: false,
          industry: false,
          art: true,
        }),
    },
  ];

  // The Mentors Data
  // Software
  const softWare_mentorsData = [
    {
      imgAddress: "/img/mentors/software/software_mentor1.png",
      imgAlt: "Software mentor محمد میرزایی",
      headline: "محمد میرزایی",

      smallText: "کارشناس ارشد ای تی",
      signUp_text: "درخواست مشاوره",
      //   The link's not provided yet
      link: "/محمد میرزایی",
    },
    {
      imgAddress: "/img/mentors/software/software_mentor2.png",
      imgAlt: "Software mentor سهیل صدرایی",
      headline: "سهیل صدرایی",

      smallText: "دکترا نرم افزار",
      signUp_text: "درخواست مشاوره",
      //   The link's not provided yet
      link: "/سهیل صدرایی",
    },
    {
      imgAddress: "/img/mentors/software/software_mentor3.png",
      imgAlt: "Software mentor سینا بیگی",
      headline: "سینا بیگی",

      smallText: "کارشناس ارشد ای تی",
      signUp_text: "درخواست مشاوره",
      //   The link's not provided yet
      link: "/سینا بیگی",
    },
    {
      imgAddress: "/img/mentors/software/software_mentor4.png",
      imgAlt: "Software mentor محمدرضا محمدنژاد",
      headline: "محمدرضا محمدنژاد",

      smallText: "کارشناس ارشدشبکه های کامپیوتری",
      signUp_text: "درخواست مشاوره",
      //   The link's not provided yet
      link: "/محمدرضا محمدنژاد",
    },

    // To show the scroll
    {
      imgAddress: "/img/mentors/software/software_mentor1.png",
      imgAlt: "Software mentor محمد میرزایی",
      headline: "محمد میرزایی",

      smallText: "کارشناس ارشد ای تی",
      signUp_text: "درخواست مشاوره",
      //   The link's not provided yet
      link: "/محمد میرزایی",
    },
    {
      imgAddress: "/img/mentors/software/software_mentor2.png",
      imgAlt: "Software mentor سهیل صدرایی",
      headline: "سهیل صدرایی",

      smallText: "دکترا نرم افزار",
      signUp_text: "درخواست مشاوره",
      //   The link's not provided yet
      link: "/سهیل صدرایی",
    },
    {
      imgAddress: "/img/mentors/software/software_mentor3.png",
      imgAlt: "Software mentor سینا بیگی",
      headline: "سینا بیگی",

      smallText: "کارشناس ارشد ای تی",
      signUp_text: "درخواست مشاوره",
      //   The link's not provided yet
      link: "/سینا بیگی",
    },
    {
      imgAddress: "/img/mentors/software/software_mentor4.png",
      imgAlt: "Software mentor محمدرضا محمدنژاد",
      headline: "محمدرضا محمدنژاد",

      smallText: "کارشناس ارشدشبکه های کامپیوتری",
      signUp_text: "درخواست مشاوره",
      //   The link's not provided yet
      link: "/محمدرضا محمدنژاد",
    },
  ];
  // Calculous

  // Animation

  // Architecture

  // Electricity

  // Industry

  // Art

  // Scroll
  const ref = useRef(null); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:
  return (
    <>
      <SectionStyled
        className="custom_container lg:p-[70px] lg:pr-[60px] lg:pl-[60px] mt-[60px]
      flex flex-col gap-[20px]"
      >
        <div className="mb-[20px]">
          <Headline_withIcon
            headlineTxt="شبکه بزرگ منتور های ما"
            headlineTxt_class=" text-[32px] "
          />
        </div>

        <div className="flex flex-col lg:gap-[20px]">
          {/* Categories */}
          <ul className="flex gap-[20px] border-b border-[#D9D9D9] pb-[8px] ">
            <ListMembers navItems={navData} />
          </ul>

          {/* The courses */}
          <ul
            className="flex lg:gap-[20px] overflow-auto custom-scrollbar lg:pb-[30px]"
            {...events}
            ref={ref} // add reference and events to the wrapping div
          >
            {/* Software Mentors (Copy this, Just change the condition and the data you provide to VabinarBox.) */}
            {isVisible.software && (
              <VabinarBox vabinarBox_data={softWare_mentorsData} />
            )}
          </ul>
        </div>
      </SectionStyled>
    </>
  );
}
