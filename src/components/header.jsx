import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import React from "react";
import { useTheme } from "@/hooks/useTheme";

import logoDark from "@/assets/img/logo-header-dark.png";
import logoLight from "@/assets/img/logo-header-light.png";

export function Header() {
  const { theme } = useTheme();
  const [menuState, setMenuState] = React.useState(false);

  const getLogo = () => {
    return theme === "dark" ? logoLight : logoDark;
  };

  const menuItems = [
    { name: "Soluções", href: "#solucoes" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Sobre", href: "#sobre" },
  ];

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
                <img
                  src={getLogo()}
                  alt="Logo"
                  className="max-w-[150px] transition-opacity hover:opacity-80"
                />
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
                        className="text-muted-foreground hover:text-accent-foreground block transition-colors duration-150"
                        onClick={() => setMenuState(false)}
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                <Button asChild size="sm">
                  <a href="#contato">
                    <span>Contato</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
