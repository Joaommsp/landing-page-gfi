import printer from "../assets/img/section-benefits/benefits-printer.jpg";
import security from "../assets/img/section-benefits/benefits-security.jpg";
import plan from "../assets/img/section-benefits/benefits-plan.jpg";
import integration from "../assets/img/section-benefits/benefits-integration.jpg";

const BenefitsCards = ({
  features = [
    {
      id: "feature-1",
      heading: "Redução de Custos Operacionais",
      description:
        "Elimine gastos com papelada, infraestrutura local e processos manuais.",
      image: printer,
      url: "https://shadcnblocks.com",
    },
    {
      id: "feature-2",
      heading: "Transparência e Controle",
      description:
        "Centralize todas as informações financeiras em plataforma única com rastreabilidade completa de ações.",
      image: security,
      url: "https://shadcnblocks.com",
    },
    {
      id: "feature-3",
      heading: "Tomada de Decisão",
      description:
        "Acesse dashboards executivos com KPIs fiscais atualizados instantaneamente.",
      image: plan,
      url: "https://shadcnblocks.com",
    },
    {
      id: "feature-4",
      heading: "Integração",
      description:
        "Conecte todas as secretarias, setores e locais de trabalho em um ambiente único.",
      image: integration,
      url: "https://shadcnblocks.com",
    },
  ],
}) => {
  return (
    <section className="">
      <div className="">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="border-zinc-300 dark:border-zinc-600 flex flex-col overflow-clip rounded-xl border"
            >
              <a href={feature.url}>
                <img
                  src={feature.image}
                  alt={feature.heading}
                  className="aspect-16/9 h-full max-h-[256px] w-full object-cover object-center transition-opacity hover:opacity-80"
                />
              </a>
              <div className="px-6 py-6 md:px-8 md:py-8 lg:px-8">
                <h3 className="mb-2 text-lg font-semibold md:mb-4 md:text-xl">
                  {feature.heading}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { BenefitsCards };
