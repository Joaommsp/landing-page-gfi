import React from "react";
import { Hero } from "@/components/hero";
import { Benefits } from "@/components/benefits";
import DashBoard from "@/components/dashboard";
import SystemInfos from "@/components/system-infos";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-16 py-32">
      <Hero />
      <Benefits />
      <DashBoard />
      <SystemInfos />
    </div>
  );
}
