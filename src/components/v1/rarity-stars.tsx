import { type FC } from "react";

import { cn } from "@/lib/utils";
import { type Rarity } from "@/types/rarities.types";

export const RarityStars: FC<{ className?: string; length: Rarity }> = ({ className, length }) => {
  return (
    <div className={cn("flex", className)}>
      {[...Array(length)].map((_, i) => (
        <span className="leading-none text-amber-400" key={i}>★</span>
      ))}
    </div>
  );
};
