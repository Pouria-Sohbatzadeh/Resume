import React, { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

// Components
import Headline_SeeMore from "../Headline_SeeMore";
import VabinarBox from "./Newest_VabinarComponents/VabinarBox";

export default function Newest_Vabinar() {
  // Be sure to import the "link"s that you want to open a path to
  const vabinarNewest_data = [
    {
      imgAddress: "/img/programmingIcons/javascript1.png",
      imgAlt: "Photoshop",
      headline: "وبینار جاوا اسکریپت  وکاربرد آن",
      smallText:
        "هدف ایجاد انکیزه و توسعه در حوزه های مختلف برای هنر جویان و رفع دغدغه شغلی",
      signUp_text: "ثبت نام در وبینار",
      //   The link's not provided yet

      link: "/وبینار جاوا اسکریپت  وکاربرد آن",
    },
    {
      imgAddress: "/img/programmingIcons/photoShop2.png",
      imgAlt: "Photoshop",
      headline: "وبینار ورود کار فتوشاپ",
      smallText:
        "هدف ایجاد انکیزه و توسعه در حوزه های مختلف برای هنر جویان و رفع دغدغه شغلی",
      signUp_text: "ثبت نام در وبینار",
      //   The link's not provided yet

      link: "/وبینار ورود کار فتوشاپ",
    },

    {
      imgAddress: "/img/programmingIcons/illustrator3.png",
      imgAlt: "وبینار کسب درامد دلاری از ایلاستریتور",
      headline: "وبینار کسب درامد دلاری از ایلاستریتور",
      smallText:
        "هدف ایجاد انکیزه و توسعه در حوزه های مختلف برای هنر جویان و رفع دغدغه شغلی",
      signUp_text: "ثبت نام در وبینار",
      //   The link's not provided yet

      link: "/وبینار کسب درامد دلاری از ایلاستریتور",
    },
    {
      imgAddress: "/img/programmingIcons/ui8_4.png",
      imgAlt: "وبینار ساخت رزومه ui ux در سایت ها..",
      headline: "وبینار ساخت رزومه ui ux در سایت ها..",
      smallText:
        "هدف ایجاد انکیزه و توسعه در حوزه های مختلف برای هنر جویان و رفع دغدغه شغلی",
      signUp_text: "ثبت نام در وبینار",
      //   The link's not provided yet

      link: "/وبینار ساخت رزومه ui ux در سایت ها..",
    },


    {
      imgAddress: "/img/programmingIcons/javascript1.png",
      imgAlt: "Photoshop",
      headline: "وبینار جاوا اسکریپت  وکاربرد آن",
      smallText:
        "هدف ایجاد انکیزه و توسعه در حوزه های مختلف برای هنر جویان و رفع دغدغه شغلی",
      signUp_text: "ثبت نام در وبینار",
      //   The link's not provided yet

      link: "/وبینار جاوا اسکریپت  وکاربرد آن",
    },
    {
      imgAddress: "/img/programmingIcons/photoShop2.png",
      imgAlt: "Photoshop",
      headline: "وبینار ورود کار فتوشاپ",
      smallText:
        "هدف ایجاد انکیزه و توسعه در حوزه های مختلف برای هنر جویان و رفع دغدغه شغلی",
      signUp_text: "ثبت نام در وبینار",
      //   The link's not provided yet

      link: "/وبینار ورود کار فتوشاپ",
    },

    {
      imgAddress: "/img/programmingIcons/illustrator3.png",
      imgAlt: "وبینار کسب درامد دلاری از ایلاستریتور",
      headline: "وبینار کسب درامد دلاری از ایلاستریتور",
      smallText:
        "هدف ایجاد انکیزه و توسعه در حوزه های مختلف برای هنر جویان و رفع دغدغه شغلی",
      signUp_text: "ثبت نام در وبینار",
      //   The link's not provided yet

      link: "/وبینار کسب درامد دلاری از ایلاستریتور",
    },
    {
      imgAddress: "/img/programmingIcons/ui8_4.png",
      imgAlt: "وبینار ساخت رزومه ui ux در سایت ها..",
      headline: "وبینار ساخت رزومه ui ux در سایت ها..",
      smallText:
        "هدف ایجاد انکیزه و توسعه در حوزه های مختلف برای هنر جویان و رفع دغدغه شغلی",
      signUp_text: "ثبت نام در وبینار",
      //   The link's not provided yet

      link: "/وبینار ساخت رزومه ui ux در سایت ها..",
    },
  ];

  const ref = useRef(null); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  return (
    <>
      <section className="flex flex-col gap-[30px] lg:mt-[90px] ">
        <Headline_SeeMore className="custom_container pr-[60px] pl-[60px]" />

        {/* All the boxes */}
        <div
          className="relative flex flex-row items-center lg:gap-[20px] 
        overflow-auto pr-[60px] pl-[60px] pb-[30px] custom-scrollbar"
          {...events}
          ref={ref} // add reference and events to the wrapping div
        >
          <VabinarBox vabinarBox_data={vabinarNewest_data} />
        </div>
      </section>
    </>
  );
}
