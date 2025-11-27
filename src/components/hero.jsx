import {
  Banknote,
  NotebookPen,
  Zap,
  MessageSquareWarning,
  InfoIcon,
} from "lucide-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { useTheme } from "@/hooks/useTheme";

import logoDark from "@/assets/img/svg/logo-hero-dark.svg";
import logoLight from "@/assets/img/svg/logo-hero-light.svg";

import { BorderBeam } from "./ui/border-beam";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Hero = ({
  badge = "gfi.consultoria.com",
  heading = "Gestão Financeira Inteligente para Prefeituras que Buscam Transparência e Eficiência",
  description = "Otimize o controle orçamentário, reduza custos operacionais e garanta conformidade com a Lei de Responsabilidade Fiscal através de um sistema completo e integrado.",
  button = {
    text: "Fale com um Especialista",
    icon: <IconBrandWhatsapp className="ml-2 size-4" />,
    url: "https://www.shadcnblocks.com",
  },
  trustText = "Gestão Contábil confiável",
  features = [
    {
      icon: <MessageSquareWarning className="h-auto w-5" />,
      title: "Relatórios Gerenciais",
      description:
        "Indicadores de desempenho fiscal, dashboards intuitivos e relatórios personalizados.",
      tooltipTitle: "Relatórios Gerenciais",
      tooltipContent:
        "Relatórios claros e objetivos que facilitam a tomada de decisões informadas, com suporte de consultor especializado para análise e interpretação dos dados financeiros.",
    },
    {
      icon: <Banknote className="h-auto w-5" />,
      title: "Gestão Contábil",
      description:
        "Sistema contábil integrado que atende às normativas da STN e SICONFI, facilitando a prestação de contas aos tribunais",
      tooltipTitle: "Gestão Contábil",
      tooltipContent:
        "Conformidade total com as exigências legais para prefeituras.",
    },
    {
      icon: <NotebookPen className="h-auto w-5" />,
      title: "Planejamento Orçamentário",
      description:
        "Processo de elaboração, execução, controle de orçamento, previsão financeira detalhada de receitas, despesas e investimentos.",
      tooltipTitle: "Planejamento Orçamentário",
      tooltipContent:
        "Processo de elaboração, execução e controle de orçamento, com previsão financeira detalhada de receitas, despesas e investimentos, apoiado por consultor especializado em gestão financeira municipal.",
    },
  ],
}) => {
  const { theme } = useTheme();
  const getLogo = () => {
    return theme === "dark" ? logoDark : logoLight;
  };

  return (
    <TooltipProvider delayDuration={200}>
      <section className="container">
        <div className="overflow-hidden">
          <div className="mb-20 flex flex-col items-center gap-6 text-center">
            <Badge data-usal="fade duration-500" variant="outline">
              {badge}
            </Badge>
            <h1
              data-usal="fade duration-600"
              className="text-4xl font-semibold lg:text-5xl"
            >
              {heading}
            </h1>
            <p
              data-usal="fade duration-600"
              className="text-muted-foreground mx-auto max-w-3xl text-center md:text-lg"
            >
              {description}
            </p>
            <div
              data-usal="fade duration-700"
              className="flex flex-col items-center justify-center gap-3 pb-12 pt-3"
            >
              <Button size="lg" asChild>
                <a href={button.url} className="text-primary">
                  {button.text} {button.icon}
                </a>
              </Button>
              {trustText && <div className="text-xs">{trustText}</div>}
            </div>
          </div>

          <div className="relative mx-auto">
            <div className="bg-linear-to-t from-background absolute inset-0 via-transparent to-transparent"></div>
            <div className="absolute -right-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
            <div className="absolute -left-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
          </div>

          <div className="mx-auto mt-10 flex flex-col md:flex-row gap-4">
            {features.map((feature, index) => (
              <Tooltip key={feature.title}>
                <TooltipTrigger asChild>
                  <div
                    data-usal="flip duration-500"
                    className="bg-muted dark:bg-zinc-950 flex grow basis-0 flex-col rounded-xl p-4 relative overflow-hidden cursor-help" // ✅ Adicione cursor-help para indicar que é interativo
                  >
                    <div className="bg-background mb-6 flex size-10 items-center justify-center rounded-full drop-shadow-lg text-primary relative z-10">
                      {feature.icon}
                    </div>
                    <h4 className="mb-2 font-semibold relative z-10">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm relative z-10">
                      {feature.description}
                    </p>

                    <BorderBeam
                      duration={12}
                      size={250}
                      colorFrom="#f4d58f"
                      colorTo="#4d4d4d"
                      delay={index * 2}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  className="max-w-64 py-3 text-pretty dark:bg-zinc-950"
                  side="top"
                >
                  {" "}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <InfoIcon className="size-4" />
                      <span className="text-sm font-medium">
                        {feature.tooltipTitle}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-xs">
                      {feature.tooltipContent}
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export { Hero };
