import React, { useContext, useRef } from "react";

// Context
import { HeadlineContext } from "../../../context/Headline_iconContext";

// Components
import Headline_withIcon from "../../Headline_withIcon";
import { ButtonStyle } from "../../styled_component/ButtonStyle";
import Comment_BoxPair from "./Comment_BoxPair";
import Previous_NextButtons from "./Previous_NextButtons";

export default function User_Comments({ confirmComment_handler = () => {} }) {
  const { headlineTxt, headlineTxt_class } = useContext(HeadlineContext);

  const comments = [
    {
      imgAddress: "img/commentors/commentors1.png",
      name: "محمدرضا سهرابی",
      date: "1402/10/02",
      comment:
        "آشنایی با تست نویسی در React آشنایی با تست نویسی در React آشنایی با تست نویسی در React آشنایی با تست نویسی در Reactآشنایی با تست نویسی در React آشنایی با تست نویسی در React",
      rating: 5,
    },
    {
      imgAddress: "img/commentors/commentors2.png",
      name: "نگار احمدی",
      date: "1402/10/04",
      comment:
        "این دوره خیلی خوب بود. مدرس مفاهیم تست نویسی رو به شکل ساده توضیح داد.",
      rating: 4,
    },
    {
      imgAddress: "img/commentors/commentors3.png",
      name: "سینا موسوی",
      date: "1402/11/15",
      comment:
        "از مثال‌های عملی زیاد استفاده شده بود که فهم مطالب رو راحت‌تر کرد.",
      rating: 5,
    },
    {
      imgAddress: "img/commentors/commentors4.png",
      name: "الهه رضایی",
      date: "1402/12/01",
      comment:
        "من قبل از این هیچی از تست نمی‌دونستم ولی الان اعتماد به نفس خوبی دارم.",
      rating: 4,
    },
    {
      imgAddress: "img/commentors/commentors5.png",
      name: "کامران نیک‌فر",
      date: "1403/01/10",
      comment:
        "دوره برای من مفید بود، فقط کاش کمی بیشتر روی ابزارهای تست تمرکز می‌کرد.",
      rating: 3,
    },
  ];

  // Helper to chunk into pairs
  function chunkIntoPairs(array) {
    const result = [];
    for (let i = 0; i < array.length; i += 2) {
      result.push(array.slice(i, i + 2));
    }
    return result;
  }

  // Ref for scroll container
  const scrollRef = useRef(null);

  // Scroll left by container width
  const previousHandler = () => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: width, behavior: "smooth" }); // scrollLeft increases -> move content right = previous
    }
  };
  
   // Scroll right by container width
  const nextHandler = () => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: -width, behavior: "smooth" }); // scrollLeft decreases -> move content left = next
    }
  };

  return (
    <div
      className="custom_container pt-[20px] pb-[20px] pr-[10px] pl-[20px]
     lg:mt-[20px] 
     flex flex-col gap-[25px] 
     bg-white rounded-[12px]"
    >
      <div className="flex justify-between items-center">
        {/* Headline */}
        <Headline_withIcon
          headlineTxt={headlineTxt}
          headlineTxt_class={headlineTxt_class}
        />

        <ButtonStyle
          onClick={confirmComment_handler}
          className="!text-[#3532B2] 
        border border-[#3532B2] !bg-[#cfceed] rounded-[12px] !h-[48px] !w-[96px]"
        >
          ثبت نظر
        </ButtonStyle>
      </div>

      {/* Comments scroll container with ref */}
      <div
        ref={scrollRef}
        className="w-full flex overflow-x-hidden scroll-smooth"
      >
        {chunkIntoPairs(comments).map((pair, index) => (
          <Comment_BoxPair key={index} commentBox_data={pair} />
        ))}
      </div>

      {/* Previous / Next Buttons */}
      <Previous_NextButtons
        previousHandler={previousHandler}
        nextHandler={nextHandler}
        scrollContainerRef={scrollRef}
      />
    </div>
  );
}
