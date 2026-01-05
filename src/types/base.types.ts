export const Stats = {
  ANEMO_DMG_BONUS: "Бонус Анемо урона",
  ATK_PERCENTAGE: "Сила атаки %",
  CRIT_DMG: "Крит. урон",
  CRIT_RATE: "Шанс крит. попадания",
  CRYO_DMG_BONUS: "Бонус Крио урона",
  DEF_PERCENTAGE: "Защита %",
  DENDRO_DMG_BONUS: "Бонус Дендро урона",
  ELECTRO_DMG_BONUS: "Бонус Электро урона",
  ELEMENTAL_MASTERY: "Мастерство стихий",
  ENERGY_RECHARGE: "Восст. энергии",
  GEO_DMG_BONUS: "Бонус Гео урона",
  HEALING_BONUS: "Бонус лечения",
  HP_PERCENTAGE: "HP %",
  HYDRO_DMG_BONUS: "Бонус Гидро урона",
  PYRO_DMG_BONUS: "Бонус Пиро урона",
} as const;
export const STATS_CRIT = [Stats.CRIT_DMG, Stats.CRIT_RATE] as const;
export const STATS_ELEMENT_DMG_BONUS = [
  Stats.ANEMO_DMG_BONUS, Stats.CRYO_DMG_BONUS, Stats.DENDRO_DMG_BONUS, Stats.ELECTRO_DMG_BONUS,
  Stats.GEO_DMG_BONUS, Stats.HYDRO_DMG_BONUS, Stats.PYRO_DMG_BONUS,
] as const;

export type Rarity = 1 | 2 | 3 | 4 | 5;
export type Stat = typeof Stats[keyof typeof Stats];

export const RARITY_GRADIENTS: Record<0 | Rarity, string> = {
  0: "bg-linear-to-b from-[#323947] to-[#4a5366]",
  1: "bg-gradient-to-b from-[#6a6d74] to-[#868586]",
  2: "bg-gradient-to-b from-[#4b6c67] to-[#519072]",
  3: "bg-gradient-to-b from-[#567496] to-[#5392b8]",
  4: "bg-gradient-to-b from-[#5e5789] to-[#9c75b7]",
  5: "bg-gradient-to-b from-[#945c2c] to-[#b27330]",
} as const;
