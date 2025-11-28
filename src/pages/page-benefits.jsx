import React from "react";

import HeroBenefits from "@/components/hero-benefits";
import FeaturesBenefits from "@/components/features-benefits";
import { PhoneSection } from "@/components/phone-mockup-section";

export default function Benefits() {
  return (
    <>
      <HeroBenefits />
      <FeaturesBenefits />
      <PhoneSection />
    </>
  );
}
