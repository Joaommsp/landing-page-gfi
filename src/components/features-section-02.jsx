import { cn } from "@/lib/utils";
import {
  IconBrandChrome,
  IconWorldUpload,
  IconDeviceMobileCheck,
  IconUserCheck,
} from "@tabler/icons-react";

export default function FeaturesSection02() {
  const features = [
    {
      title: "Sem necessidade de instalação de software local",
      description:
        "O sistema funciona 100% através do navegador web, eliminando completamente a necessidade de instalar programas.",
      icon: <IconWorldUpload />,
    },
    {
      title: "Compatível com Chrome, Firefox, Safari e Edge",
      description:
        "Compatível com os principais navegadores para garantir a melhor experiência.",
      icon: <IconBrandChrome />,
    },
    {
      title: "Interface responsiva que se adapta ao tamanho da tela",
      description:
        "Sistema funcional em diferentes dispositivos e tamanhos de tela, incluindo smartphones, tablets e desktops.",
      icon: <IconDeviceMobileCheck />,
    },
    {
      title: "Acesso simultâneo de múltiplos usuários",
      description:
        "Múltiplos usuários podem acessar o sistema simultaneamente, com controle de permissões personalizadas.",
      icon: <IconUserCheck />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10  container mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-semibold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
