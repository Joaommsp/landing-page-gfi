import React from "react";
import { ArrowDown, ArrowRight, Menu, Rocket, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import bannerDark from "@/assets/img/page-solutions/solutions-banner.png";
import bannerLight from "@/assets/img/page-solutions/solutions-banner-light.png";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function HeroSolutions() {
  const [menuState, setMenuState] = React.useState(false);

  React.useEffect(() => {
    if (menuState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuState]);

  return (
    <>
      <main className="overflow-hidden">
        <section>
          <div className="relative pt-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="max-w-3xl text-center sm:mx-auto lg:mr-auto lg:mt-0 lg:w-4/5">
                <div className="rounded-lg mx-auto flex w-fit items-center gap-2 border p-1 pr-3">
                  <span className="bg-muted rounded-md px-2 py-1 text-xs">
                    Consultoria
                  </span>
                  <span className="text-sm">gfi.consultoria.com</span>
                  <span className="bg-border block h-4 w-px"></span>
                  <ArrowDown className="size-4" />
                </div>

                <h1 className="text-4xl font-semibold lg:text-5xl mt-8">
                  Dashboard Inteligente & Consultoria Especializada
                </h1>
                <p className="text-muted-foreground mx-auto mt-8 hidden max-w-2xl text-wrap text-lg sm:block">
                  Transforme dados operacionais em decisões estratégicas por
                  meio de dashboards intuitivos e consultoria contínua. Monitore
                  a saúde financeira do município através de gráficos dinâmicos,
                  indicadores fiscais atualizados e análises comparativas que
                  simplificam o acompanhamento orçamentário.
                </p>
                <p className="mx-auto mt-6 max-w-2xl text-wrap sm:hidden">
                  Transforme dados operacionais em decisões estratégicas por
                  meio de dashboards intuitivos e consultoria contínua.
                </p>

                <div className="mt-8">
                  <Button size="lg" asChild>
                    <a href="#start">
                      <span className="text-nowrap">Entrar em Contato</span>
                      <IconBrandWhatsapp className="relative size-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div
              className="relative mx-auto mt-16 max-w-6xl overflow-hidden px-4"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 55%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 55%, transparent 100%)",
              }}
            >
              <img
                className="z-2 border-border/25 relative hidden rounded-2xl border dark:block"
                src={bannerDark}
                alt="app screen"
                width="2796"
                height="2008"
                loading="lazy"
              />
              <img
                className="z-2 border-border/25 relative rounded-2xl border dark:hidden"
                src={bannerLight}
                alt="app screen"
                width="2796"
                height="2008"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
