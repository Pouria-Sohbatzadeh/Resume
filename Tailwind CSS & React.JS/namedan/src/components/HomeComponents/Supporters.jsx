import React, { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { NavLink } from "react-router-dom";


// Components
import ImgHolder from "../ImgHolder";
import { HeadlineStyle } from "../styled_component/HeadlineStyle";
import Headline_withIcon from "../Headline_withIcon";

export default function Supporters() {
  const ref = useRef();
  const { events } = useDraggable(ref);

  const SupportersData = [
    {
      to: "/supporter/1",

      imgSize: "lg:w-[172px]",
      imgAddress: "img/supporters/supporter1.png",
      imgAlt: "",
    },
    {
      to: "/supporter/2",

      imgSize: "lg:w-[172px]",
      imgAddress: "img/supporters/supporter2.png",
      imgAlt: "",
    },
    {
      to: "/supporter/3",

      imgSize: "lg:w-[172px]",
      imgAddress: "img/supporters/supporter3.png",
      imgAlt: "",
    },
    {
      to: "/supporter/4",

      imgSize: "lg:w-[172px]",
      imgAddress: "img/supporters/supporter4.png",
      imgAlt: "",
    },
    {
      to: "/supporter/4",

      imgSize: "lg:w-[172px]",
      imgAddress: "img/supporters/supporter5.png",
      imgAlt: "",
    },

    {
      to: "/supporter/1",

      imgSize: "lg:w-[172px]",
      imgAddress: "img/supporters/supporter1.png",
      imgAlt: "",
    },
    {
      to: "/supporter/2",

      imgSize: "lg:w-[172px]",
      imgAddress: "img/supporters/supporter2.png",
      imgAlt: "",
    },
    {
      to: "/supporter/3",

      imgSize: "lg:w-[172px]",
      imgAddress: "img/supporters/supporter3.png",
      imgAlt: "",
    },
    {
      to: "/supporter/4",

      imgSize: "lg:w-[172px]",
      imgAddress: "img/supporters/supporter4.png",
      imgAlt: "",
    },
    {
      to: "/supporter/4",

      imgSize: "lg:w-[172px]",
      imgAddress: "img/supporters/supporter5.png",
      imgAlt: "",
    },
  ];

  return (
    <>
      <section
        className="custom_container lg:p-[40px] lg:pr-[60px] lg:pl-[60px] mt-[30px]
        flex flex-col gap-[20px]"
      >

        <Headline_withIcon headlineTxt="حامیان ما" headlineTxt_class="text-[28px] " />

        <ul
          className="flex lg:gap-[70px] overflow-auto custom-scrollbar lg:pb-[50px]"
          {...events}
          ref={ref}
        >
          {SupportersData.map((item, index) => (
            <li key={index}>
              <NavLink to={item.to}>
                <ImgHolder
                  imgSize={item.imgSize}
                  imgAddress={item.imgAddress}
                  imgAlt={item.imgAlt}
                />
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
