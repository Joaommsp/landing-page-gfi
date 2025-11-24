import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";
import { Header } from "@/components/header";
import { Particles } from "@/components/ui/particles";
import { useTheme } from "@/hooks/useTheme";

export default function AppLayout() {
  const { theme } = useTheme();

  return (
    <>
      <Particles 
        className="fixed inset-0 -z-10" 
        quantity={150} 
        size={0.5}
        color={theme === "dark" ? "#ffffff" : "#808080"}
      />
      <Header />
      <main className="2xl:max-w-[1365px] mx-auto min-h-screen relative">
        <Outlet />
        <div className="fixed right-4 bottom-4">
          <ThemeToggle />
        </div>
      </main>
    </>
  );
}
