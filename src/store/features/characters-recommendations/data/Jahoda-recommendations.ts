import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [
      { ids: [ArtifactSetIds.VIRIDESCENT_VENERER], notes: ["если играем c Флинсом"] },
      { ids: [ArtifactSetIds.SILKEN_MOONS_SERENADE], notes: ["если играем c Нефер"] },
      { ids: [ArtifactSetIds.DEEPWOOD_MEMORIES], notes: ["если играем c Нефер"] },
    ],
    stats: {
      sands: [{ name: Stats.ENERGY_RECHARGE }],
      goblet: [{ name: Stats.ATK_PERCENTAGE }],
      circlet: [{ name: Stats.ATK_PERCENTAGE }, { name: Stats.CRIT_RATE }],
      additional: [
        { name: Stats.ENERGY_RECHARGE, notes: ["180%-200%"] },
        { name: Stats.ATK_PERCENTAGE },
        { name: Stats.CRIT_RATE },
      ],
    },
  },
  attackCombinations: {
    "В случае, если играем без героев Нод-Края": ["Элем. навык", "Элем. навык (Не дожидаемся заполнения колбочки)", "Взрыв стихий"],
    "В случае, если играем в Высшем сиянии (2+ героя Нод-Края)": ["Элем. навык", "Элем. навык (Заполняем колбу)", "Взрыв стихий"],
  },
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  talents: [
    { type: "combat1", priority: "По необходимости" },
    { type: "combat2", priority: "Во вторую очередь" },
    { type: "combat3", priority: "В первую очередь" },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_JAHODA_IN_6_2],
  weapons: [
    { id: WeaponIds.ELEGY_FOR_THE_END, best: "Лучшее решение" },
    { id: WeaponIds.FAVONIUS_WARBOW },
    { id: WeaponIds.SACRIFICIAL_BOW },
    { id: WeaponIds.SNARE_HOOK, best: "Лучшее доступное решение" },
  ],
} as CharacterRecommendations;
