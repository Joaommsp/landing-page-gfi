import {
  ClipboardList,
  Settings,
  Database,
  GraduationCap,
  Users,
  Headphones,
} from "lucide-react";

export default function Implementation() {
  return (
    <section className="container">
      <div className="mx-auto space-y-8 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            Processo de Implementação.
          </h2>
          <p className="text-muted-foreground">
            Metodologia em 6 etapas que garante implementação rápida, segura e
            sem interrupção dos serviços municipais.
          </p>
        </div>

        <div className="relative mx-auto grid divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <ClipboardList className="size-4" />
              <h3 className="text-sm font-medium">Planejamento</h3>
            </div>
            <p className="text-sm">
              Mapeamento completo e construção do roadmap personalizado.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Settings className="size-4" />
              <h3 className="text-sm font-medium">
                Configurações personalizadas{" "}
              </h3>
            </div>
            <p className="text-sm">
              Sistema moldado especificamente à realidade e legislação do
              município.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Database className="size-4" />

              <h3 className="text-sm font-medium">Migração de Dados</h3>
            </div>
            <p className="text-sm">
              Transferência segura de históricos e informações financeiras com
              integridade.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <GraduationCap className="size-4" />

              <h3 className="text-sm font-medium">Capacitação</h3>
            </div>
            <p className="text-sm">
              Capacitar equipes para utilização eficiente do sistema.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Users className="size-4" />

              <h3 className="text-sm font-medium">Acompanhamento Presencial</h3>
            </div>
            <p className="text-sm">
              Acompanhamento presencial para garantir a correta utilização e
              adaptação ao sistema.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Headphones className="size-4" />

              <h3 className="text-sm font-medium">Suporte Contínuo</h3>
            </div>
            <p className="text-sm">
              Atualizações, melhorias e suporte especializado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
