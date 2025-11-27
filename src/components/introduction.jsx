import { Button } from "@/components/ui/button";
import banner from "@/assets/img/banner-introduction.png";
import bannerLight from "@/assets/img/banner-introduction-light.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Footer } from "./footer";
import React from "react";
import { motion } from "motion/react";

import CardHoverEffect from "./ui/cards-hover-effect";

import { useTheme } from "@/hooks/UseTheme";

import logoDark from "@/assets/img/logo-header-dark.png";
import logoLight from "@/assets/img/logo-header-light.png";

import { LayoutTextFlip } from "./ui/layout-text-flip";

const menuItems = [
  { name: "Soluções", href: "#features" },
  { name: "Benefícios", href: "#solution" },
  { name: "Como funciona", href: "#pricing" },
  { name: "Sobre", href: "#about" },
];

export default function IntroSection() {
  const [menuState, setMenuState] = useState(false);

  const { theme } = useTheme();

  const getLogo = () => {
    return theme === "dark" ? logoLight : logoDark;
  };

  return (
    <>
      <main className="relative overflow-hidden bg-muted/50 dark:bg-background w-full flex flex-col">
        {/* Máscaras decorativas de fundo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 hidden opacity-50 lg:block"
        >
          <div
            className="absolute left-0 top-0 h-[80rem] w-[35rem] -translate-y-[21.875rem] -rotate-45 rounded-full"
            style={{
              background:
                "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0,0%,85%,.08) 0, hsla(0,0%,55%,.02) 50%, hsla(0,0%,45%,0) 80%)",
            }}
          />
          <div
            className="absolute left-0 top-0 h-[80rem] w-60 -rotate-45 rounded-full"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, hsla(0,0%,85%,.06) 0, hsla(0,0%,45%,.02) 80%, transparent 100%)",
              transform: "translate(5%, -50%) rotate(-45deg)",
            }}
          />
          <div
            className="absolute left-0 top-0 h-[80rem] w-60 -translate-y-[21.875rem] -rotate-45"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, hsla(0,0%,85%,.04) 0, hsla(0,0%,45%,.02) 80%, transparent 100%)",
            }}
          />
        </div>

        <header>
          <nav
            data-state={menuState ? "active" : "inactive"}
            className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
          >
            <div className="m-auto max-w-5xl px-6">
              <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                <div className="flex w-full justify-between lg:w-auto">
                  <a
                    href="/"
                    aria-label="home"
                    className="flex items-center space-x-2"
                  >
                    <img src={getLogo()} alt="Logo" className="max-w-[150px]" />
                  </a>

                  <button
                    onClick={() => setMenuState(!menuState)}
                    aria-label={menuState ? "Close Menu" : "Open Menu"}
                    className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                  >
                    <Menu
                      className={`m-auto size-6 transition-all duration-200 ${
                        menuState
                          ? "rotate-180 scale-0 opacity-0"
                          : "rotate-0 scale-100 opacity-100"
                      }`}
                    />
                    <X
                      className={`absolute inset-0 m-auto size-6 transition-all duration-200 ${
                        menuState
                          ? "rotate-0 scale-100 opacity-100"
                          : "-rotate-180 scale-0 opacity-0"
                      }`}
                    />
                  </button>
                </div>

                <div
                  className={`
                    bg-background mb-6 w-full flex-wrap items-center justify-end space-y-8 
                    rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 
                    md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 
                    lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none 
                    dark:shadow-none dark:lg:bg-transparent
                    ${menuState ? "flex" : "hidden lg:flex"}
                  `}
                >
                  <div className="lg:pr-4">
                    <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                      {menuItems.map((item, index) => (
                        <li key={index}>
                          <a
                            href={item.href}
                            className="text-muted-foreground hover:text-accent-foreground block duration-150"
                          >
                            <span>{item.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                    <Button asChild size="sm">
                      <a href="#signup">
                        <span>Contato</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* Seção de conteúdo */}
        <section className="relative mb-32">
          <div className="relative mx-auto max-w-5xl px-6 pt-28 lg:pt-24">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
                <LayoutTextFlip
                  text="especializada"
                  words={[
                    "Consultoria",
                    "Tecnologia",
                    "Inovação",
                    "Eficiência",
                  ]}
                />
              </motion.div>
              <h1 className="text-2xl font-semibold tracking-tight drop-shadow-lg md:text-4xl">
                {" "}
                em gestão financeira pública
              </h1>
              <p className="text-muted-foreground mx-auto my-8 max-w-2xl text-lg">
                Potencialize a eficiência da gestão financeira com consultoria
                especializada e dashboards inteligentes que monitoram receitas,
                despesas e indicadores de performance. Decisões mais rápidas,
                gestão mais transparente.
              </p>

              <Button asChild size="lg">
                <a href="#start">
                  <span className="btn-label">Saiba mais</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Container da imagem com efeito 3D */}
          <div className="mx-auto mt-16 2xl:max-w-7xl">
            <div className="pl-8 lg:pl-44" style={{ perspective: "1200px" }}>
              <div
                className="pl-6 pt-6 lg:h-[44rem]"
                style={{
                  transform: "rotateX(20deg) skewX(12deg)",
                  maskImage:
                    "linear-gradient(to bottom, black 55%, transparent 100%), linear-gradient(to right, black 75%, transparent 100%)",
                  maskComposite: "intersect",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 55%, transparent 100%), linear-gradient(to right, black 75%, transparent 100%)",
                  WebkitMaskComposite: "source-in",
                }}
              >
                <img
                  className="rounded-lg border shadow-xl dark:hidden"
                  src={bannerLight}
                  alt="Tailark hero section"
                  width="2880"
                  height="2074"
                  loading="lazy"
                />
                <img
                  className="hidden rounded-lg border border-zinc-700 shadow-xl dark:block"
                  src={banner}
                  alt="Tailark hero section"
                  width="2880"
                  height="2074"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div>
            <CardHoverEffect />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
