export const Stats = {
  ATK_PERCENTAGE: "Сила атаки %",
  CRIT_DMG: "Крит. урон",
  CRIT_RATE: "Шанс крит. попадания",
  CRYO_DMG_BONUS: "Бонус Крио урона",
  ELECTRO_DMG_BONUS: "Бонус Электро урона",
  ELEMENTAL_MASTERY: "Мастерство стихий",
  ENERGY_RECHARGE: "Восст. энергии",
  HEALING_BONUS: "Бонус лечения",
  HP_PERCENTAGE: "HP %",
  PYRO_DMG_BONUS: "Бонус Пиро урона",
} as const;

export type Rarity = 1 | 2 | 3 | 4 | 5;
export type Stat = typeof Stats[keyof typeof Stats];
