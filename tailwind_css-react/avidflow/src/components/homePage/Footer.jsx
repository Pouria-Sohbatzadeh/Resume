import React from 'react'

// WebLogo
import webLogo from "../../assets/imgs/webLogo.webp"

// Social Media Images
import Instagram from "../../assets/imgs/social_media/Instagram.webp"
import Aparat from "../../assets/imgs/social_media/aparat.webp"
import Youtube from "../../assets/imgs/social_media/linkdin.webp"

export default function Footer() {
    return (
        <footer className="mt-[4rem] mb-[8rem] lg:mb-4
        grid grid-cols-1 lg:grid-cols-3 lg:gap-[7.5rem] lg:justify-between
        bg-white  rounded-[0.75rem] custom_container p-8">
    
          {/* Top/Right */}
          <div>
            <a href="#" className="w-[192px] block">
              <img src={webLogo} alt="Website Logo" className="w-full"/>
            </a>
            <p className="text-sm">ما با هدف ساده‌سازی فرآیندهای کسب‌وکار و اتوماسیون به شما کمک می‌کنیم تا زمان و منابع بیشتری صرفه‌جویی کنید.ما با هدف ساده‌سازی</p>
          </div>
    
          {/* Links */}
          <ul className="text-[12px] font-semibold flex flex-col
          mt-4 mb-4">
            {/* Headline */}
            <h2 className="font-bold text-[16px]">دسترسی های سریع</h2>
    
            <div className="flex flex-col gap-4">
              {/* Links */}
              <li className="cursor-pointer"><a href="../index.html">خانه</a></li>
              <li className="cursor-pointer"><a href="#">ارتباط با ما</a></li>
              <li className="cursor-pointer"><a href="#">درباره ما</a></li>
              <li className="cursor-pointer"><a href="#">مقالات</a></li>
            </div>
            
          </ul>
    
          {/* Social Media Links */}
          <ul className="flex flex-col">
            {/* Headline */}
            <h2 className="font-bold text-[16px] mb-[0.5rem]">راه های ارتباطی</h2>
    
            <div className="flex gap-4">
    
              <li>
                <a href="#" className="w-[24px] block">
                  <img src={Instagram} alt="Instagram" className="w-full" />
                </a>
              </li>
    
              <li>
                <a href="#" className="w-[24px] block">
                  <img src={Aparat} alt="Aparat" className="w-full" />
                </a>
              </li>
    
              <li>
                <a href="#" className="w-[24px] block">
                  <img src={Youtube} alt="Linkdin" className="w-full" />
                </a>
              </li>
    
            </div>
            
          </ul>
        </footer>
      )
}
