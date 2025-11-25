import React from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/UseTheme";

import WorldMap from "./ui/world-map";
import BrazilMap from "./ui/brazil-map";

export default function FeaturesSection01() {
  const { theme } = useTheme();

  return (
    <div className="relative z-20 container max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-4xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Acesso de Qualquer Lugar.
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          Sistema 100% web responsivo com aplicativo mobile nativo. Acompanhe as
          finanças do município do escritório, em reuniões ou fiscalizações de
          campo com a mesma experiência fluida.
        </p>
      </div>
      <div className="relative ">
        <div className="flex w-full mt-12 rounded-lg overflow-hidden dark:bg-black bg-white">
          <WorldMap
            lineColor={theme === "dark" ? "#fad993" : "#0ea5e9"}
            dots={[
              // ✅ Bahia → América do Norte
              {
                start: { lat: -28.9714, lng: -40.5014 }, // Salvador, Bahia
                end: { lat: 40.7128, lng: -74.006 }, // Nova York, EUA
              },
              {
                start: { lat: -28.9714, lng: -40.5014 }, // Salvador, Bahia
                end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles, EUA
              },

              // ✅ Bahia → Europa
              {
                start: { lat: -28.9714, lng: -40.5014 }, // Salvador, Bahia
                end: { lat: 51.5074, lng: -0.1278 }, // Londres, Reino Unido
              },
              {
                start: { lat: -28.9714, lng: -40.5014 }, // Salvador, Bahia
                end: { lat: 38.7223, lng: -9.1393 }, // Lisboa, Portugal
              },
              {
                start: { lat: -28.9714, lng: -40.5014 }, // Salvador, Bahia
                end: { lat: 48.8566, lng: 2.3522 }, // Paris, França
              },

              // ✅ Bahia → Ásia
              {
                start: { lat: -28.9714, lng: -40.5014 }, // Salvador, Bahia
                end: { lat: 35.6762, lng: 139.6503 }, // Tóquio, Japão
              },
              {
                start: { lat: -28.9714, lng: -40.5014 }, // Salvador, Bahia
                end: { lat: 28.6139, lng: 77.209 }, // Nova Delhi, Índia
              },
              {
                start: { lat: -28.9714, lng: -40.5014 }, // Salvador, Bahia
                end: { lat: 1.3521, lng: 103.8198 }, // Singapura
              },

              // ✅ Bahia → África
              {
                start: { lat: -28.9714, lng: -40.5014 }, // Salvador, Bahia
                end: { lat: -1.2921, lng: 36.8219 }, // Nairóbi, Quênia
              },
              {
                start: { lat: -28.9714, lng: -40.5014 }, // Salvador, Bahia
                end: { lat: -33.9249, lng: 18.4241 }, // Cidade do Cabo, África do Sul
              },

              // ✅ Bahia → Oceania
              {
                start: { lat: -28.9714, lng: -40.5014 }, // Salvador, Bahia
                end: { lat: -33.8688, lng: 151.2093 }, // Sydney, Austrália
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ children, className }) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};
