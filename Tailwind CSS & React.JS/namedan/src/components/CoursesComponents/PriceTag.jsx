import React from "react";

export default function PriceTag({ prefix = "از", price }) {
  return (
    <div className="flex justify-between">
      <span className="text-[12px] text-[#000]">{prefix}</span>
      <div className="flex gap-[10px] items-end">
        <span className="text-[#2E2F2A] text-[14px] font-semibold">{price}</span>
        <span className="text-[7px] text-[#444444] relative bottom-[3px]">تومان</span>
      </div>
    </div>
  );
}
