import { Target, Telescope, Award } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import mainImgDark from "@/assets/img/section-about/main-img-dark.png";
import mainImgLight from "@/assets/img/section-about/main-img-light.png";

import { useTheme } from "@/hooks/UseTheme";

import { BorderBeam } from "./ui/border-beam";

const About = ({
  heading = "Sobre a GFI",

  features = [
    {
      icon: <Target className="h-auto w-5" />,
      title: "Missão",
      description:
        "Transformar a gestão financeira municipal através de soluções tecnológicas inteligentes que promovam transparência, eficiência e conformidade.",
    },
    {
      icon: <Telescope className="h-auto w-5" />,
      title: "Visão",
      description:
        "Ser referência nacional em soluções de gestão financeira para o setor público municipal.",
    },
    {
      icon: <Award className="h-auto w-5" />,
      title: "Valores",
      description:
        "Compromisso com a ética, transparência e inovação para garantir a excelência na gestão financeira municipal.",
    },
  ],
}) => {
  const { theme } = useTheme();
  const mainImg = theme === "dark" ? mainImgDark : mainImgLight;

  return (
    <section className="">
      <div className="container overflow-hidden">
        <div className="mb-8 flex flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-semibold lg:text-5xl">{heading}</h1>
        </div>
        <div className="relative mx-auto">
          <img
            src={mainImg}
            alt="Escritório GFI"
            className="aspect-video max-h-[500px] w-full rounded-xl object-cover"
          />
          <div className="bg-linear-to-t from-background absolute inset-0 via-transparent to-transparent"></div>
          <div className="absolute -right-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
          <div className="absolute -left-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
        </div>
        <div className="mx-auto mt-10 flex flex-col md:flex-row gap-4">
          {features.map((feature, index) => (
            <React.Fragment key={feature.title}>
              <div
                data-usal="flip duration-500"
                key={index}
                className="bg-muted  dark:bg-zinc-950 flex grow basis-0 flex-col rounded-xl p-4 relative overflow-hidden"
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
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export { About };
