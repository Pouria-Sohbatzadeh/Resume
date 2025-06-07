import React from "react";
import { SmallTxt_style } from "../styled_component/SmallTxt_style";

export default function FilterDrop({ accordionData, seperators = 0 }) {
  return (
    <>
      {accordionData.map(({ id, title, items }, index) => (
        <div
          key={id}
          className="collapse collapse-arrow bg-white pb-[10px] pr-[20px] pl-[10px]"
          style={index < seperators ? { borderBottom: "1px solid #EEEEEE" } : {}}
        >
          {/* Using checkbox for independent toggling */}
          <input type="checkbox" id={`accordion-${id}`} />

          <label
            htmlFor={`accordion-${id}`}
            className="collapse-title font-semibold text-[16px] text-[#222222]
              flex justify-between items-center !pl-0 !pr-0"
          >
            {title}
          </label>

          <div className="collapse-content flex flex-col gap-[10px] !p-0 text-sm">
            {items.map((item, idx) => {
              const inputId = `accordion-${id}-input-${idx}`;
              return (
                <div className="flex items-center gap-[10px]" key={inputId}>
                  <input
                    id={inputId}
                    type="checkbox"
                    className="checkbox checkbox-warning"
                  />
                  <label htmlFor={inputId}>
                    <SmallTxt_style className="font-medium lg:text-[14px]">
                      {item}
                    </SmallTxt_style>
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}
