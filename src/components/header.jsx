import { useScroll } from "@/hooks/use-scroll";
import { Logo } from "@/components/logo";
import { MenuToggleIcon } from "@/components/menu-toggle-icon";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { createPortal } from "react-dom";

import { useTheme } from "@/hooks/useTheme";

import logoDark from "@/assets/img/logo-header-dark.png";
import logoLight from "@/assets/img/logo-header-light.png";

export function Header() {
  const { theme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  const getLogo = () => {
    return theme === "dark" ? logoLight : logoDark;
  };

  const links = [
    {
      label: "Soluções",
      href: "#",
    },
    {
      label: "Benefícios",
      href: "#",
    },
    {
      label: "Como Funciona",
      href: "#",
    },
    {
      label: "Recursos",
      href: "#",
    },
    {
      label: "Sobre Nós",
      href: "#",
    },
  ];

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-[var(--border-color)] backdrop-blur-lg"
          : "border-transparent"
      )}
      style={{
        backgroundColor: scrolled ? "var(--bg-secondary)" : "transparent",
        boxShadow: scrolled ? "0 2px 8px var(--shadow-sm)" : "none",
      }}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <div className="rounded-md p-2 transition-colors hover:opacity-80">
          <img src={getLogo()} alt="Logo" className="max-w-[150px]" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200"
              style={{
                color: "var(--text-primary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--bg-tertiary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}

          <Button
            className="shadow-md transition-all hover:opacity-90"
            style={{
              backgroundColor: "var(--text-primary)",
              color: "var(--bg-primary)",
            }}
          >
            Contato
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          size="icon"
          variant="outline"
          style={{
            borderColor: "var(--border-color)",
            backgroundColor: "transparent",
            color: "var(--text-primary)",
          }}
        >
          <MenuToggleIcon className="size-5" duration={300} open={open} />
        </Button>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu className="flex flex-col justify-between gap-2" open={open}>
        <div className="grid gap-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="justify-start px-4 py-3 rounded-md text-sm font-medium transition-colors"
              style={{
                color: "var(--text-primary)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--bg-tertiary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <Button className="w-full hover:opacity-90 transition-opacity">
            Contato
          </Button>
        </div>
      </MobileMenu>
    </header>
  );
}

function MobileMenu({ open, children, className, ...props }) {
  if (!open || typeof window === "undefined") {
    return null;
  }

  return createPortal(
    <div
      className={cn(
        "fixed top-16 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden md:hidden",
        "animate-in fade-in-0 slide-in-from-top-5 duration-300"
      )}
      id="mobile-menu"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-color)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        className={cn("size-full p-4", className)}
        data-slot={open ? "open" : "closed"}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
