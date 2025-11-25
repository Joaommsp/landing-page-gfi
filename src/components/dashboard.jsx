import { User, TriangleAlert } from "lucide-react";
import chartDark from "@/assets/img/section-dashboard/chart-dark.png";
import chartLight from "@/assets/img/section-dashboard/chart-light.png";

import { useTheme } from "@/hooks/useTheme";

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export default function DashBoard() {
  const { theme } = useTheme();

  return (
    <section data-usal="fade-u once" className="container flex flex-col gap-6">
      <div className="mx-auto relative space-y-8 px-16 md:space-y-16 bg-white dark:bg-[#0F0E0E] rounded-lg py-16 overflow-hidden">
        <h2 className="relative z-10 max-w-xl text-2xl font-medium lg:text-3xl">
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
      {/* <div className="grid md:grid-cols-2 gap-6 w-full">
  
        <CardContainer className="w-full">
          <CardBody className="bg-white dark:bg-[#0F0E0E] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-md p-6">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Tabelas Modernas Interativas
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
            >
              Visualize e gerencie dados com tabelas responsivas, filtros
              avançados, ordenação dinâmica e exportação.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2560&auto=format&fit=crop"
                className="h-60 w-full object-cover rounded-md group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer className="w-full">
          <CardBody className="bg-white dark:bg-[#0F0E0E] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-md p-6 ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Menu intuitivo e Navegação Simplificada
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
            >
              Navegue facilmente por todos os módulos do sistema através de um
              menu intuitivo e organizado por funcionalidades.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2560&auto=format&fit=crop"
                className="h-60 w-full object-cover rounded-md group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div> */}
    </section>
  );
}
