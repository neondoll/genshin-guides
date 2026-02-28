export const Stats = {
  ANEMO_DMG_BONUS: "Бонус Анемо урона",
  ATK: "Сила атаки",
  ATK_PERCENTAGE: "Сила атаки %",
  CRIT_DMG: "Крит. урон",
  CRIT_RATE: "Шанс крит. попадания",
  CRYO_DMG_BONUS: "Бонус Крио урона",
  DEF: "Защита",
  DEF_PERCENTAGE: "Защита %",
  DENDRO_DMG_BONUS: "Бонус Дендро урона",
  ELECTRO_DMG_BONUS: "Бонус Электро урона",
  ELEMENTAL_MASTERY: "Мастерство стихий",
  ENERGY_RECHARGE: "Восст. энергии",
  GEO_DMG_BONUS: "Бонус Гео урона",
  HEALING_BONUS: "Бонус лечения",
  HP: "HP",
  HP_PERCENTAGE: "HP %",
  HYDRO_DMG_BONUS: "Бонус Гидро урона",
  PHYSICAL_DMG_BONUS: "Бонус физ. урона",
  PYRO_DMG_BONUS: "Бонус Пиро урона",
} as const;
export type Stat = typeof Stats[keyof typeof Stats];

export const StatsCrit = [Stats.CRIT_DMG, Stats.CRIT_RATE] as const;
export const StatsElementDmgBonus = [
  Stats.ANEMO_DMG_BONUS, Stats.CRYO_DMG_BONUS, Stats.DENDRO_DMG_BONUS, Stats.ELECTRO_DMG_BONUS,
  Stats.GEO_DMG_BONUS, Stats.HYDRO_DMG_BONUS, Stats.PYRO_DMG_BONUS,
] as const;
