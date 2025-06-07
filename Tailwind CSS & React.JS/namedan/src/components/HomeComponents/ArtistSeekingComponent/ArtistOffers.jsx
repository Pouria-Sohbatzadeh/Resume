import React from "react";

import ImgHolder from "../../ImgHolder";

export default function ArtistOffers({ offersData }) {
  return (
    <div>
      {/* Offers */}
      <div className="flex items-center lg:gap-[130px]">
        {/* Individual boxes */}
        {offersData.map((offer, index) => (
          <div key={index} className="flex flex-col items-center lg:gap-[10px]">
            {/* Img */}
            <ImgHolder
              imgSize={offer.imgSize}
              className={offer.className}
              imgAddress={offer.address}
              imgAlt={offer.alt}
            />
            <span className="font-black text-[24px] leading-[32px] text-[#000]">{offer.Num} +</span>
            <span className="font-medium text-[18px] leading-[32px] text-[#333333]">{offer.Txt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

