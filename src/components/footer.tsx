import { type FC } from "react";

import { cn } from "@/lib/utils";

export const Footer: FC<{ className?: string }> = ({ className }) => {
  return (
    <footer
      className={cn([
        "flex flex-col gap-2 justify-center items-center py-4 text-sm text-gray-500 text-center dark:text-gray-400",
      ], className)}
    >
      <p>Источник: Genshin Impact DB • Неофициальный фанатский проект</p>
    </footer>
  );
};
