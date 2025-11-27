import React from "react";

import IntroSection from "@/components/introduction";

import ScrollUpButton from "@/components/scroll-up-button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Introduction() {
  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <IntroSection />

      <div className="fixed right-4 bottom-4 flex flex-col gap-2 z-50">
        <ScrollUpButton />
        <ThemeToggle />
      </div>
    </div>
  );
}
