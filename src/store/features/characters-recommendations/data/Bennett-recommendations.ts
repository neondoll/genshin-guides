import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [{ ids: [ArtifactSetIds.NOBLESSE_OBLIGE], best: true }, { ids: [ArtifactSetIds.EMBLEM_OF_SEVERED_FATE] }],
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
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1, overallLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", recommendedLevel: "1 - 6", overallLevel: 1 },
    { type: "combat3", priority: "В первую очередь", recommendedLevel: 10, overallLevel: 10 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.TALENT_GAINS_PYRO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_1,
  ],
  weapons: [
    { id: WeaponIds.MISTSPLITTER_REFORGED, best: "Лучшее оружие", r: 1 },
    { id: WeaponIds.AQUILA_FAVONIA, best: "Лучшее оружие", r: 1 },
    { id: WeaponIds.SKYWARD_BLADE, best: "Лучшее оружие", r: 1 },
    { id: WeaponIds.SAPWOOD_BLADE, best: "Лучшее доступное оружие", r: 5 },
  ],
} as CharacterRecommendations;
