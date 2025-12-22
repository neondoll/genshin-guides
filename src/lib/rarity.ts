import type { Rarity } from "@/types/base.types";

export const RARITY_GRADIENTS: Record<0 | Rarity, string> = {
  0: "bg-linear-to-b from-[#323947] to-[#4a5366]",
  1: "bg-gradient-to-b from-[#6a6d74] to-[#868586]",
  2: "bg-gradient-to-b from-[#4b6c67] to-[#519072]",
  3: "bg-gradient-to-b from-[#567496] to-[#5392b8]",
  4: "bg-gradient-to-b from-[#5e5789] to-[#9c75b7]",
  5: "bg-gradient-to-b from-[#945c2c] to-[#b27330]",
} as const;
