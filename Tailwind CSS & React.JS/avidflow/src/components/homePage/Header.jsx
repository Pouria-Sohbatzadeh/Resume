import React from "react";

import webLogo from "../../assets/imgs/webLogo.webp";

function Header() {
  return (
    <header className="mt-[0.5rem] flex justify-between items-center w-full p-[1rem] bg-[white]">
      {/* Web logo */}
      <a href="../index.html" className="w-[192px]">
        <img src={webLogo} alt="Main page" className="w-full" />
      </a>

      {/* Link */}
      <ul className="hidden lg:flex gap-[2rem]">
        <li>
          <a href="../index.html">خانه</a>
        </li>
        <li>
          <a href="#">درباره ما</a>
        </li>
        <li>
          <a href="#">ارتباط با ما</a>
        </li>
      </ul>

      {/* Sign in */}
      <div className="w-[73.34px] h-[40px] bg-[black] rounded-[0.375rem]">
        <a href="" className="w-full h-full flex justify-center items-center ">
          <span className="text-[white]">ورود</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
