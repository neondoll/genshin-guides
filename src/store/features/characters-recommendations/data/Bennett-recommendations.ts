import type { CharacterRecommendations } from "../types";
import { ArtifactSetNames } from "../../artifact-sets";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";
import { Stats } from "@/types/base.types";

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.NOBLESSE_OBLIGE, best: true },
      { type: "complete", name: ArtifactSetNames.EMBLEM_OF_SEVERED_FATE },
    ],
    stats: {
      sands: [{ name: Stats.ENERGY_RECHARGE }, { name: Stats.HP_PERCENTAGE }, { name: Stats.ATK_PERCENTAGE }],
      goblet: [{ name: Stats.HP_PERCENTAGE }, { name: Stats.ATK_PERCENTAGE }, { name: Stats.PYRO_DMG_BONUS }],
      circlet: [
        { name: Stats.HEALING_BONUS },
        { name: Stats.HP_PERCENTAGE },
        { name: Stats.CRIT_RATE },
        { name: Stats.CRIT_DMG },
      ],
      additional: [
        { name: Stats.HP_PERCENTAGE, notes: ["Приоритетно", "от 25000"] },
        { name: Stats.ENERGY_RECHARGE, notes: ["Приоритетно", "от 220%"] },
        {
          name: Stats.CRIT_RATE,
          notes: ["от 50% (при использовании меча Фавония или если Беннет будет наносить дополнительный урон)"],
        },
        { name: Stats.CRIT_DMG, notes: ["от 120% (если Беннет будет наносить дополнительный урон)"] },
      ],
    },
  },
  keyConstellations: [6],
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat3", priority: "В первую очередь", referenceLevel: 10 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: [
    { name: WeaponNames.MISTSPLITTER_REFORGED, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.AQUILA_FAVONIA, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.SKYWARD_BLADE, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.SAPWOOD_BLADE, best: "Лучшее доступное оружие", r: 5 },
  ],
} as CharacterRecommendations;
