import React from 'react'

import plan from "../../assets/imgs/plan.webp"

export default function SmartDesign() {

    return (

        <section className="flex flex-col items-center mt-[3rem] mb-[3rem]">

            {/* texts */}
            <div className="flex flex-col items-center text-center ">

            <h2 className="text-[36px] font-black">طراحی <span className="bg-[rgb(254,202,202)]">هوشمند</span> جریان کاری</h2>

            <p className="text-[18px]
                mt-[1.5rem] mb-[1.5rem]
                text-gray-500">به کمک هوش مصنوعی، جریان‌های کاری خود را طراحی کنید و بهره‌وری کسب‌وکار خود را افزایش دهید. بهره‌وری کسب‌وکار خود را افزایش دهید.</p>

            </div>

            {/* btn */}
            <a href="#">
            <button className="bg-[black] checked:bg-[#374151] cursor-pointer
            w-[208.59px] h-[60px] text-[1rem] text-white  
            mt-[1.5rem] mb-[1.5rem]
            flex justify-center items-center gap-4  font-light">

                <span>دریافت دمو رایگان</span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>

                </button>
            </a>

            <div className="w-[343px]">
                <img src={plan} alt="Smart Plan" className="w-full" />
            </div>

        </section>

        );
}
