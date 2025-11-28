import {
  DollarSign,
  Shield,
  Eye,
  Network,
  Lock,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Redução de Custos",
    description:
      "Eliminação de despesas com papelada, impressões, armazenamento físico de documentos e correção de erros manuais.",
  },
  {
    icon: Eye,
    title: "Controle e Transparência",
    description:
      "Registro de todas as operações com identificação do usuário responsável, data e horário",
  },
  {
    icon: Shield,
    title: "Conformidade",
    description:
      "Facilitando no cumprimento das exigências legais, normas contábeis e obrigações.",
  },
  {
    icon: Network,
    title: "Integração entre Setores",
    description:
      "Acelere a comunicação e colaboração entre diferentes departamentos.",
  },
  {
    icon: Lock,
    title: "Segurança da Informação",
    description: "Garantia de proteção dos dados financeiros e backup seguro.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidade e Crescimento",
    description:
      "Buscamos a constante evolução e adaptação para atender às necessidades da administração municipal.",
  },
];

const FeaturesBenefits = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center">
          Vantagens que impactam
        </h2>
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-(--breakpoint-lg) mx-auto px-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col border rounded-xl py-6 px-5"
            >
              <div className="mb-4 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                <feature.icon className="size-5" />
              </div>
              <span className="text-lg font-semibold">{feature.title}</span>
              <p className="mt-1 text-foreground/80 text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesBenefits;
