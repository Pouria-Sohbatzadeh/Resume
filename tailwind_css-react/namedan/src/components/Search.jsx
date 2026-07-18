import React, { useState } from "react";
import { ButtonStyle } from "./styled_component/ButtonStyle";

export default function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (onSearch && typeof onSearch === "function") {
      onSearch(searchTerm);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center lg:w-[561px]">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="کارگاه , متورینگ یا دوره آموزشی مورد نظر خود را جست و جو کنید"
        className="lg:h-[64px] w-full outline-none
        bg-white placeholder-[#888] rounded-tr-[12px] rounded-br-[12px]
        text-[14px] 
        pr-[20px] pl-[20px]"
      />
      <ButtonStyle
        onClick={handleSearch} // ✅ updated this
        className="w-[64px]"
        partlyRound
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-[24px] h-[24px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </ButtonStyle>
    </div>
  );
}
