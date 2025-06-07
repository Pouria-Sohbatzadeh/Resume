import React from "react";
import ImgHolder from "../../ImgHolder";

export default function Trusting({
  artistImgs,
  bigText = " + 28000 هزار هنرجو",
  // that  either bigText has a space at end, Or smallText has space at start
  smallText = " تا به الان به ما عتماد کردند",
}) {
  return (
    <div className="flex items-center gap-[5px]">
      {/* Imgss */}
      <div className="flex">
        {artistImgs.map((img, index) => (
          <ImgHolder
            key={index}
            imgSize={img.imgSize}
            className={img.className}
            imgAddress={img.address}
            imgAlt={img.alt}
          />
        ))}
      </div>
      <span className="font-black text-[24px] text-[#000000]">
        {bigText}
        <span className="text-[#444444] ">{smallText}</span>
      </span>
    </div>
  );
}
