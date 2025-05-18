import React from 'react'
import ai_plans from "../../assets/imgs/ai_plans.webp"

export default function Ai_Potential() {
    return (

        <section className="mt-[4rem] mb-[4rem] 
        custom_container lg:pr-[1.5rem] lg:pl-[1.5rem]
        lg:flex lg:flex-row-reverse lg:justify-between">
    
          {/* Ad image */}
          <div className="w-full flex-shrink-0 lg:w-[460px]"><img src={ai_plans} alt="Plans we have for Ai" className="w-full" /></div>
    
          {/* Explaination */}
          <div>
            {/* Text */}
            <div className="mt-[1.5rem] mb-[1.5rem]">
              <h1 className="font-extrabold text-2xl">پتانسیل واقعی هوش مصنوعی را درک کنید</h1>
              <p className="mt-[1.5rem] text-sm lg:text-[14px] text-gray-500 leading-8">هوش مصنوعی روش کار ما را متحول می کند. Make این فرآیند را با بیش از 200 ادغام از پیش ساخته شده با برنامه های هوش مصنوعی تسریع می کند. کشف کنید که چرا استفاده از برنامه‌های هوش مصنوعی در Make 4 برابر در 12 ماه افزایش یافته است.</p>
            </div>
    
            {/* Button */}
            <a href="#" className="w-full">
              <button className="w-full lg:w-[224px] h-[64px] rounded-[0.5rem]
              cursor-pointer flex justify-center items-center gap-4 bg-black text-white">
    
                  <span>دریافت دمو رایگان</span>
    
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                  </svg>
    
              </button>
            </a>
          </div>
    
        </section>
    
      )
}
