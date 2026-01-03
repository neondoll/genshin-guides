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
