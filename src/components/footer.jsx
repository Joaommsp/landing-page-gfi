import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

import { useTheme } from "@/hooks/UseTheme";

import logoLight from "@/assets/img/logo-footer-light.png";
import logoDark from "@/assets/img/logo-footer-dark.png";

export function Footer() {
  // const company = [
  // 	{
  // 		title: "About Us",
  // 		href: "#",
  // 	},
  // 	{
  // 		title: "Careers",
  // 		href: "#",
  // 	},
  // 	{
  // 		title: "Brand assets",
  // 		href: "#",
  // 	},
  // 	{
  // 		title: "Privacy Policy",
  // 		href: "#",
  // 	},
  // 	{
  // 		title: "Terms of Service",
  // 		href: "#",
  // 	},
  // ];

  // const resources = [
  // 	{
  // 		title: "Blog",
  // 		href: "#",
  // 	},
  // 	{
  // 		title: "Help Center",
  // 		href: "#",
  // 	},
  // 	{
  // 		title: "Contact Support",
  // 		href: "#",
  // 	},
  // 	{
  // 		title: "Community",
  // 		href: "#",
  // 	},
  // 	{
  // 		title: "Security",
  // 		href: "#",
  // 	},
  // ];

  // const socialLinks = [
  // 	{
  // 		icon: FacebookIcon,
  // 		link: "#",
  // 	},
  // 	{
  // 		icon: GithubIcon,
  // 		link: "#",
  // 	},
  // 	{
  // 		icon: InstagramIcon,
  // 		link: "#",
  // 	},
  // 	{
  // 		icon: LinkedinIcon,
  // 		link: "#",
  // 	},
  // 	{
  // 		icon: TwitterIcon,
  // 		link: "#",
  // 	},
  // 	{
  // 		icon: YoutubeIcon,
  // 		link: "#",
  // 	},
  // ];

  const { theme } = useTheme();

  const getLogo = () => {
    return theme === "dark" ? logoLight : logoDark;
  };

  return (
    <footer className="relative">
      <div
        className={cn(
          "mx-auto max-w-5xl lg:border-x",
          "dark:bg-[radial-gradient(35%_80%_at_30%_0%,--theme(--color-foreground/.1),transparent)]"
        )}
      >
        <div className="absolute inset-x-0 h-px w-full bg-border" />
        <div className="grid max-w-5xl grid-cols-6 gap-6 p-4">
          <div className="col-span-6 flex flex-col gap-4 pt-5 md:col-span-4">
            <img
              src={getLogo()}
              alt="GFI Consultoria Especializada"
              className="max-w-[206px]"
            />
            <p className="max-w-sm text-balance font-mono text-muted-foreground text-sm">
              Tecnologia e inovação para transformar a gestão pública.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 h-px w-full bg-border" />
        <div className="flex max-w-4xl flex-col justify-between gap-2 py-4">
          <p className="text-center font-light text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} GFI Consultoria Especializada,
            todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
