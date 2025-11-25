import React from "react";
import { Hero } from "@/components/hero";
import { Benefits } from "@/components/benefits";
import DashBoard from "@/components/dashboard";
import SystemInfos from "@/components/system-infos";
import FeaturesSection02 from "@/components/features-section-02";
import FeaturesSection01 from "@/components/features-section-01";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-16 py-32">
      <Hero />
      <Benefits />
      <DashBoard />
      <SystemInfos />
      <FeaturesSection01 />
      <FeaturesSection02 />
    </div>
  );
}
