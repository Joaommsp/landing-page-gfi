import { User, TriangleAlert } from "lucide-react";
import chartDark from "@/assets/img/section-dashboard/chart-dark.png";
import chartLight from "@/assets/img/section-dashboard/chart-light.png";

import { useTheme } from "@/hooks/useTheme";

import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export default function DashBoard() {
  const { theme } = useTheme();

  return (
    <section className="container">
      <div className="mx-auto relative space-y-8 px-16 md:space-y-16 bg-white dark:bg-[#0F0E0E] rounded-lg py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <BackgroundBeamsWithCollision />
        </div>
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          Visualização de Dados: Dashboard Inteligente
        </h2>
        <div className="relative">
          <div className="relative z-10 space-y-4 md:w-1/2">
            <p>
              Transforme Dados em{" "}
              <span className="font-medium">Decisões Estratégicas</span> — com{" "}
              <span className="font-medium">Dashboards Intuitivos</span>{" "}
            </p>
            <p>
              Monitore a saúde financeira do município através de gráficos
              dinâmicos, indicadores e análises comparativas que simplificam a
              gestão orçamentária
            </p>

            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <User className="size-4" />
                  <h3 className="text-sm font-medium">Recursos Humanos</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Analise o crescimento da folha através de gráficos
                  comparativos.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <TriangleAlert className="size-4" />
                  <h3 className="text-sm font-medium">Impacto no Orçamento</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Monitore o percentual da receita comprometido com pessoal.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0 md:[mask-image:linear-gradient(90deg,transparent_50%,black_80%)] md:[-webkit-mask-image:linear-gradient(90deg,transparent_20%,black_40%)]">
            <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
              <img
                src={theme === "dark" ? chartDark : chartLight}
                className="rounded-[12px] w-full h-auto mt-6"
                alt="payments illustration"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
