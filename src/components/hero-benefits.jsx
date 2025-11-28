import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUpRight, CirclePlay } from "lucide-react";

export default function HeroBenefits() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />
      <div className="relative z-10 text-center max-w-3xl">
        <div className="rounded-lg mx-auto flex w-fit items-center gap-2 border p-1 pr-3">
          <span className="bg-muted rounded-md px-2 py-1 text-xs">
            Consultoria
          </span>
          <span className="text-sm">gfi.consultoria.com</span>
          <span className="bg-border block h-4 w-px"></span>
          <ArrowDown className="size-4" />
        </div>
        <h1 className="mt-6 text-4xl font-semibold lg:text-5xl tracking-tighter">
          Sistema de Gestão Financeira
        </h1>
        <p className="mt-6 md:text-lg text-foreground/80">
          A implementação de um sistema integrado de gestão financeira oferece
          benefícios concretos para a administração municipal, desde a redução
          de custos operacionais até o aprimoramento dos controles internos.
        </p>
      </div>
    </div>
  );
}
