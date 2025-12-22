import type { FC } from "react";

import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";

const Header: FC = () => {
  return (
    <header
      className={cn([
        "bg-gradient-to-r from-amber-100/30 to-blue-100/30 border-b border-slate-300/50 dark:from-amber-900/30",
        "dark:to-blue-900/30 dark:border-slate-700/50",
      ])}
    >
      <div className="flex gap-x-4 justify-between items-center px-4 py-6 mx-auto container">
        <h1
          className={cn([
            "font-(family-name:--font-genshin-drip) text-4xl font-bold text-left text-transparent bg-clip-text",
            "bg-gradient-to-r from-amber-700 via-black to-emerald-700 dark:from-amber-300 dark:via-white",
            "dark:to-emerald-300",
          ])}
        >
          Genshin Impact Guides
        </h1>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
