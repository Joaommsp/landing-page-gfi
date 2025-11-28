import { useState } from "react";

import { Button } from "@/components/ui/button";

import benefitsImg_01 from "@/assets/img/section-benefits/benefits-01.png";
import benefitsImg_02 from "@/assets/img/section-benefits/benefits-02.png";

import { useTheme } from "@/hooks/useTheme";

import logoDark from "@/assets/img/svg/logo-minimal-dark.svg";
import logoLight from "@/assets/img/svg/logo-minimal-light.svg";

import { BorderBeam } from "./ui/border-beam";

import { Lens } from "./ui/lens";

const Benefits02 = ({
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
      "Centralize todas as informações financeiras em um único sistema multiplataforma",
    description:
      "Acesse dados financeiros em tempo real através de relatórios e dashboards.",
    buttonText: "Saiba mais",
    buttonUrl: "https://shadcnblocks.com",
  },
} = {}) => {
  const { theme } = useTheme();

  const getLogo = () => {
    return theme === "dark" ? logoLight : logoDark;
  };

  const [hovering, setHovering] = useState(false);

  return (
    <section className="">
      <div className="container">
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
              className="bg-muted dark:bg-zinc-950 flex flex-col justify-between gap-6 rounded-xl p-7 md:w-1/2 lg:w-auto relative"
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
              <BorderBeam
                duration={12}
                size={550}
                colorFrom="#f4d58f"
                colorTo="#4d4d4d"
                delay={2}
              />
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
      </div>
    </section>
  );
};

export { Benefits02 };
