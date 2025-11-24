import React from "react";
import { Hero } from "@/components/hero";
import { Benefits } from "@/components/benefits";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-32 py-32">
      <Hero />
      <Benefits />
    </div>
  );
}
