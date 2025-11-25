import { ArrowUp } from "lucide-react";

export default function ScrollUpButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToTop}
      className="p-2 rounded-lg border border-zinc-300 dark:border-zinc-600 
                 bg-white dark:bg-zinc-800 
                 text-zinc-700 dark:text-zinc-300
                 hover:bg-zinc-50 dark:hover:bg-zinc-700
                 transition-colors duration-200"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
