import React from "react";

import FilterTypes from "./FilterTypes";
import FilteredContent from "./FilteredContent";

export default function Filter() {
  return (
    <section className="custom_container flex items-start justify-between lg:gap-[40px] lg:mb-[40px]">
      {/* Filter Select */}
      <FilterTypes />

      {/* The filtered content (This the is component I'm working on) */}
      <FilteredContent />
    </section>
  );
}
