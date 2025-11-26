import { TrendingDown, Eye, BarChart3, GitMerge } from "lucide-react";
import { Benefits02 } from "./benefits02";

const Benefits = () => {
  const services = [
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: "Redução de Custos Operacionais",
      description:
        "Elimine gastos com papelaria, infraestrutura local e processos manuais.",
      items: [
        "Eliminação de processos físicos",
        "Redução de infraestrutura local",
        "Automação de tarefas repetitivas",
      ],
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Transparência e Controle",
      description:
        "Centralize todas as informações financeiras em plataforma única com rastreabilidade completa de ações.",
      items: [
        "Rastreabilidade de todas as operações",
        "Auditoria em tempo real",
        "Conformidade com Lei de Responsabilidade Fiscal",
      ],
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Tomada de Decisão",
      description:
        "Acesse dashboards executivos com KPIs fiscais atualizados instantaneamente.",
      items: [
        "Indicadores financeiros em tempo real",
        "Análises preditivas de receitas",
        "Relatórios personalizados por secretaria",
      ],
    },
    {
      icon: <GitMerge className="h-6 w-6" />,
      title: "Integração",
      description:
        "Conecte todas as secretarias, setores e locais de trabalho em um ambiente único.",
      items: [
        "Unificação de bases cadastrais",
        "Sincronização entre departamentos",
        "Comunicação interdepartamental fluida",
      ],
    },
  ];

  return (
    <section className="flex flex-col gap-6">
      <div className="container">
        <div className="mx-auto w-full space-y-12">
          <div data-usal="fade-d" className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Benefícios
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
              Transforme a Gestão Financeira do seu Município. Reduza
              desperdícios, atenda às exigências da Lei de Responsabilidade
              Fiscal e Utilize análises preditivas para antecipar desafios
              econômicos.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                data-usal="flip-u duration-500"
                key={index}
                className="border-border space-y-6 rounded-lg border p-8 transition-shadow hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-full p-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      <div className="bg-foreground h-1.5 w-1.5 rounded-full" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Benefits02 />
    </section>
  );
};

export { Benefits };
