import React from "react";

// Component
import Breadcrumbs from "../Breadcrumbs";
import ExpandedInfo_Trip from "../Working_withAi_Components/ForTrip/ExpandedInfo_Trip";
import Signup_boxTrip from "../Working_withAi_Components/ForTrip/Signup_boxTrip";

export default function Working_withAi() {
  return (
    <section className="custom_container lg:pr-[40px] mb-[140px]">
      <Breadcrumbs />

      <div className="lg:mt-[10px] w-full flex justify-between items-start">
        {/* Right */}
        <ExpandedInfo_Trip />

        {/* Left (Signup box) */}
        <Signup_boxTrip />
      </div>
    </section>
  );
}
