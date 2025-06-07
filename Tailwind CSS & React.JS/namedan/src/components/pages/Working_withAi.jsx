import React from "react";

// Component
import Breadcrumbs from "../Breadcrumbs";
import ExpandedInfo from "../Working_withAi_Components/Right/ExpandedInfo";
import Signup_box from "../Working_withAi_Components/Left/Signup_box";

export default function Working_withAi() {
  return (
    <section className="custom_container lg:pr-[40px] mb-[140px]">
      <Breadcrumbs />

      <div className="lg:mt-[10px] w-full flex justify-between items-start">
        {/* Right */}
        <ExpandedInfo />

        {/* Left (Signup box) */}
        <Signup_box />
      </div>
    </section>
  );
}
