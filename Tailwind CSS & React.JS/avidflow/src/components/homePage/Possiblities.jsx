import React from 'react'

// Images
import automation from "../../assets/imgs/ai_things/automation1.png"
import design from "../../assets/imgs/ai_things/design2.png"
import analyses from "../../assets/imgs/ai_things/analyses3.png"


export default function Possiblities() {
    return (

        <section className="w-full bg-white custom_container lg:pr-[1.5rem] lg:pl-[1.5rem] pt-[6rem] pb-[6rem]  
        flex flex-col lg:flex-row lg:justify-center items-start lg:items-center">

            {/* The images needed here aren't available as actual images, But svgs that I can't download. */}
            <ul className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-4
            lg:w-full">

                <li className="p-4">

                    {/* Img holder */}
                    <div className="w-[80px] lg:w-[96px]"><img src={automation} alt="Automation image" className="w-full" /></div>

                    {/* Texts */}
                    <div className="flex flex-col gap-4 font-light
                    mt-[1rem]">
                    <span className="text-[20px] font-extrabold">اتوماسیون هوشمند</span>
                    <span className="text-[14px] text-grey-500">زمان بیشتری  برای فعالیت‌های خلاقانه آزاد کنید</span>
                    </div>

                </li>

                <li className="p-4">
                    {/* Img holder */}
                    <div className="w-[80px] lg:w-[96px]"><img src={design} alt="Design Assitence Image" className="w-full" /></div>

                    {/* Texts */}
                    <div className="flex flex-col gap-4 font-light
                    mt-[1rem]">
                    <span className="text-[20px] font-extrabold">طراحی  وکمک به بهبود کار</span>
                    <span className="text-[14px] text-grey-500">طراحی پروژه‌ها و بهبود کار با ابزار ها</span>
                    </div>
                </li>

                <li className="p-4">
                    {/* Img holder */}
                    <div className="w-[80px] lg:w-[96px]"><img src={analyses} alt="Data Analyses Image" className="w-full" /></div>

                    {/* Texts */}
                    <div className="flex flex-col gap-4 font-light
                    mt-[1rem]">
                    <span className="text-[20px] font-extrabold">تحلیل داده‌ها و گزارش‌دهی</span>
                    <span className="text-[14px] text-grey-500">داده‌های کسب‌وکار خود را تجزیه و تحلیل کنید</span>
                    </div>
                </li>
            </ul>

        </section>

    )
}
