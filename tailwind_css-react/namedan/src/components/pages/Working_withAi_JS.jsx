import React from "react";

// Component
import Breadcrumbs from "../Breadcrumbs";
import ExpandedInfo_JS from "../Working_withAi_Components/ForJS/ExpandedInfo_JS";
import Signup_boxJS from "../Working_withAi_Components/ForJS/Signup_boxJS";

export default function Working_withAi() {
  return (
    <section className="custom_container lg:pr-[40px] mb-[140px]">
      <Breadcrumbs />

      <div className="lg:mt-[10px] w-full flex justify-between items-start">
        {/* Right */}
        <ExpandedInfo_JS />

        {/* Left (Signup box) */}
        <Signup_boxJS />
      </div>
    </section>
  );
}
