import React from 'react'
import corpAutomation from "../../assets/imgs/CorporateAutomation_imgExample.webp"


export default function CorporateAutomation() {
    return (
    
        <section className="w-full custom_container p-[1.5rem] lg:pl-4 mt-[1.5rem] mb-[1.5rem] 
        flex flex-col lg:flex-row lg:justify-between lg:items-center gap-[3.5rem]
        bg-[rgb(52,52,54)]">
    
          {/* Img Example */}
          <div className="w-full lg:w-[413px] lg:flex-grow lg:max-w-[520px] flex-shrink-0"><img src={corpAutomation} alt="Corporate Automation Image" className="w-full"/></div>
    
          {/* Texts */}
          <div className="flex flex-col text-white">
            {/* Headline */}
            <h1 className="text-[24px] font-extrabold">اتوماسیون برای شرکت ها</h1>
            
            {/* Small Texts */}
            <div className="flex flex-col text-xs lg:text-[16px] leading-8 mt-[1.5rem] mb-[1.5rem]">
              
              <span>با بیش از ۳۰۰ برنامه از پیش ساخته، نیازهای بازار را سریع‌تر و هوشمندانه‌تر برآورده کنید.</span>
            
              <span>از انعطاف‌پذیری بالای API برای ادغام یکپارچه و سفارشی‌سازی نامحدود بهره ببرید.</span>
              
              <span>تجربه‌ای روان، کارآمد و مقیاس‌پذیر را در کسب‌وکار خود ایجاد کنید.</span>
            
            </div>
          </div>
        </section>
    
      )
}
