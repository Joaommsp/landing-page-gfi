"use client";
import { Logo } from "@/components/logo";
import { Activity, Map as MapIcon, MessageCircle, User } from "lucide-react";
import DottedMap from "dotted-map";
import { Area, AreaChart, CartesianGrid } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function FeaturesSolutions() {
  return (
    <section className="px-4 py-16 md:py-32">
      <div className="mx-auto grid max-w-5xl border md:grid-cols-2">
        <div>
          <div className="p-6 sm:p-12">
            <span className="text-muted-foreground flex items-center gap-2">
              <MapIcon className="size-4" />
              Acesso Web de Qualquer Local e Dispositivo
            </span>

            <p className="mt-8 text-2xl font-semibold">
              Sistema 100% web, acessível por meio de navegadores e por
              aplicativo móvel.
            </p>
          </div>

          <div aria-hidden className="relative">
            <div className="absolute inset-0 z-10 m-auto size-fit"></div>

            <div className="relative overflow-hidden">
              <div className="bg-radial z-1 to-background absolute inset-0 from-transparent to-75%"></div>
              <Map />
            </div>
          </div>
        </div>
        <div className="overflow-hidden border-t bg-zinc-50 p-6 sm:p-12 md:border-0 md:border-l dark:bg-transparent">
          <div className="relative z-10">
            <span className="text-muted-foreground flex items-center gap-2">
              <MessageCircle className="size-4" />
              Suporte e comunicação
            </span>

            <p className="my-8 text-2xl font-semibold">
              Suporte por Ticket, Mensagens e E-mail.
            </p>
          </div>
          <div aria-hidden className="flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex size-5 rounded-full border">
                  <User className="m-auto size-3" />
                </span>
                <span className="text-muted-foreground text-xs">
                  Sáb 22 Fev
                </span>
              </div>
              <div className="rounded-(--radius) bg-background mt-1.5 w-3/5 border p-3 text-xs">
                Bom dia! Estou tentando acessar o módulo de saldos mas está
                aparecendo uma mensagem de erro.
              </div>
            </div>

            <div>
              <div className="rounded-(--radius) mb-1 ml-auto w-3/5 bg-blue-600 dark:bg-[#fad993] p-3 text-xs text-white dark:text-black">
                Entendi! Esse erro está relacionado à permissão de usuário. Qual
                é o seu nome de usuário no sistema?
              </div>
              <span className="text-muted-foreground block text-right text-xs">
                Agora
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-full border-y p-12">
          <p className="text-center text-4xl font-semibold lg:text-7xl">
            {/* 99.99% Uptime */}
          </p>
        </div>
        <div className="relative col-span-full">
          <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-12">
            <span className="text-muted-foreground flex items-center gap-2">
              <Activity className="size-4" />
              Análise Comparativa
            </span>

            <p className="my-8 text-2xl font-semibold">
              Compare e identifique tendências de{" "}
              <span className="text-muted-foreground">
                {" "}
                crescimento ou redução em diferentes áreas.
              </span>
            </p>
          </div>
          <MonitoringChart />
        </div>
      </div>
    </section>
  );
}

const map = new DottedMap({ height: 55, grid: "diagonal" });

const points = map.getPoints();

const svgOptions = {
  backgroundColor: "var(--color-background)",
  color: "currentColor",
  radius: 0.15,
};

const Map = () => {
  const viewBox = `0 0 120 60`;
  return (
    <svg viewBox={viewBox} style={{ background: svgOptions.backgroundColor }}>
      {points.map((point, index) => (
        <circle
          key={index}
          cx={point.x}
          cy={point.y}
          r={svgOptions.radius}
          fill={svgOptions.color}
        />
      ))}
    </svg>
  );
};

const chartConfig = {
  desktop: {
    label: "Saúde",
    color: "#2563eb",
  },
  mobile: {
    label: "Educação",
    color: "#60a5fa",
  },
};

const chartData = [
  { month: "Maio", desktop: 56, mobile: 224 },
  { month: "Junho", desktop: 56, mobile: 224 },
  { month: "Janeiro", desktop: 126, mobile: 252 },
  { month: "Fevereiro", desktop: 205, mobile: 410 },
  { month: "Março", desktop: 200, mobile: 126 },
  { month: "Abril", desktop: 400, mobile: 800 },
];

const MonitoringChart = () => {
  // Função para formatar valores monetários
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <ChartContainer className="h-120 aspect-auto md:h-96" config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 0,
          right: 0,
        }}
      >
        <defs>
          <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="var(--color-desktop)"
              stopOpacity={0.8}
            />
            <stop
              offset="55%"
              stopColor="var(--color-desktop)"
              stopOpacity={0.1}
            />
          </linearGradient>
          <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="var(--color-mobile)"
              stopOpacity={0.8}
            />
            <stop
              offset="55%"
              stopColor="var(--color-mobile)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} />
        <ChartTooltip
          active
          cursor={false}
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-3 shadow-lg dark:bg-muted">
                  <div className="mb-2 font-semibold">
                    {payload[0].payload.month}
                  </div>
                  {payload.map((entry, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: entry.color }}
                      />
                      <span className="font-medium">
                        {chartConfig[entry.dataKey].label}:
                      </span>
                      <span className="font-semibold">
                        {formatCurrency(entry.value)}
                      </span>
                    </div>
                  ))}
                </div>
              );
            }
            return null;
          }}
        />
        <Area
          strokeWidth={2}
          dataKey="mobile"
          type="stepBefore"
          fill="url(#fillMobile)"
          fillOpacity={0.1}
          stroke="var(--color-mobile)"
          stackId="a"
        />
        <Area
          strokeWidth={2}
          dataKey="desktop"
          type="stepBefore"
          fill="url(#fillDesktop)"
          fillOpacity={0.1}
          stroke="var(--color-desktop)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  );
};
