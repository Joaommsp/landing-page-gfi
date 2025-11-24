import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";
import { Header } from "@/components/header";

export default function AppLayout() {
  return (
    <>
    <Header/>
      <main className="2xl:max-w-[1365px] mx-auto min-h-screen relative">
        <Outlet />
        <div className="fixed right-4 bottom-4">
          <ThemeToggle />
        </div>
      </main>
    </>
  );
}
