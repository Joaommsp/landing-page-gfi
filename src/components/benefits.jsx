import { useState } from "react";

import { Button } from "@/components/ui/button";

import benefitsImg_01 from "@/assets/img/section-benefits/benefits-01.png";
import benefitsImg_02 from "@/assets/img/section-benefits/benefits-02.png";

import { useTheme } from "@/hooks/useTheme";

import logoDark from "@/assets/img/svg/logo-minimal-dark.svg";
import logoLight from "@/assets/img/svg/logo-minimal-light.svg";

import { CircleMinus, GitCompareArrows, Crosshair, Blocks } from "lucide-react";

import { BorderBeam } from "./ui/border-beam";

import { Lens } from "./ui/lens";

import { BenefitsCards } from "./benefits-cards";

const defaultCompanies = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
    alt: "Arc",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
    alt: "Descript",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
    alt: "Mercury",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
    alt: "Ramp",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
    alt: "Retool",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
    alt: "Watershed",
  },
];

const defaultAchievements = [
  { label: "Redução de Custos Operacionais ", icon: <CircleMinus /> },
  { label: "Transparência e Controle", icon: <GitCompareArrows /> },
  { label: "Tomada de Decisão", icon: <Crosshair /> },
  { label: "Integração", icon: <Blocks /> },
];

const Benefits = ({
  title = "Benefícios",
  description = "Transforme a Gestão Financeira do seu Município. Reduza desperdícios, atenda às exigências da Lei de Responsabilidade Fiscal e Utilize análises preditivas para antecipar desafios econômicos",

  mainImage = {
    src: benefitsImg_01,
    alt: "placeholder",
  },

  secondaryImage = {
    src: benefitsImg_02,
    alt: "placeholder",
  },

  breakout = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "logo",
    title:
      "Centralize todas as informações financeiras em um único sistema multiplataforma.",
    description:
      "Acesse dados financeiros em tempo real através de relatórios e dashboards.",
    buttonText: "Saiba mais",
    buttonUrl: "https://shadcnblocks.com",
  },

  companiesTitle = "Valued by clients worldwide",
  companies = defaultCompanies,
  achievementsTitle = "Nossa Solução",
  achievementsDescription = "Elimine processos manuais, reduza gastos com papelada e infraestrutura através da digitalização completa dos fluxos financeiros. Equipe técnica capacitada em gestão pública municipal disponível para treinamento, implantação e suporte contínuo",
  achievements = defaultAchievements,
} = {}) => {
  const { theme } = useTheme();

  const getLogo = () => {
    return theme === "dark" ? logoLight : logoDark;
  };

  const [hovering, setHovering] = useState(false);

  return (
    <section className="">
      <div className="container">
        <div className="mb-2 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl font-semibold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          <img
            data-usal="fade-u delay-0 duration-800 once"
            src={mainImage.src}
            alt={mainImage.alt}
            className="size-full max-h-[820px] rounded-xl object-cover lg:col-span-2"
          />

          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div
              data-usal="zoomin delay-200 duration-1000 once"
              className="bg-muted flex flex-col justify-between gap-6 rounded-xl p-7 md:w-1/2 lg:w-auto"
            >
              <img
                src={getLogo()}
                alt={breakout.alt}
                className="mr-auto h-10"
              />
              <div>
                <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                <p className="text-muted-foreground">{breakout.description}</p>
              </div>
              <Button className="mr-auto" asChild>
                <a href={breakout.buttonUrl} target="_blank">
                  {breakout.buttonText}
                </a>
              </Button>
            </div>

            <div
              data-usal="flip-r delay-400 duration-1200 once"
              className="grow md:w-1/2 lg:w-auto relative min-h-[400px]"
            >
              <Lens
                hovering={hovering}
                setHovering={setHovering}
                className="w-full h-full"
              >
                <img
                  src={secondaryImage.src}
                  alt={secondaryImage.alt}
                  className="w-full h-full rounded-xl object-cover"
                  style={{ display: "block" }}
                />
              </Lens>
            </div>
          </div>
        </div>
        {/* <div className="py-32">
          <p className="text-center">{companiesTitle} </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {companies.map((company, idx) => (
              <div className="flex items-center gap-3" key={company.src + idx}>
                <img
                  src={company.src}
                  alt={company.alt}
                  className="h-6 w-auto md:h-8 dark:invert"
                />
              </div>
            ))}
          </div>
        </div> */}
        <div
          data-usal="fade-u once"
          className="bg-muted relative overflow-hidden rounded-xl p-7 md:p-16 mt-6"
        >
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-3xl font-semibold md:text-4xl">
              {achievementsTitle}
            </h2>
            <p className="text-muted-foreground max-w-xl">
              {achievementsDescription}
            </p>
          </div>
          <BenefitsCards />
          <BorderBeam
            duration={12}
            size={550}
            colorFrom="#f4d58f"
            colorTo="#4d4d4d"
            delay={2}
          />
        </div>
      </div>
    </section>
  );
};

export { Benefits };
