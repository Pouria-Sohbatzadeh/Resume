import React, { useState } from "react";
import Search from "../Search";
import { HeadlineStyle } from "../styled_component/HeadlineStyle";
import { SmallTxt_style } from "../styled_component/SmallTxt_style";

export default function SearchResult() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <section className="flex lg:mt-[40px] flex-col items-center lg:gap-[30px] lg:pb-[40px]">
      <Search onSearch={handleSearch} />
      {searchTerm && (
        <div className="flex items-center lg:gap-[5px]">
          <p className="text-[19px] font-medium text-[#444444]">
            نتایج جست وجو برای
          </p>
          <h2 className="font-bold text-[24px] text-[#222222]">{searchTerm}</h2>

        </div>
      )}
    </section>
  );
}
