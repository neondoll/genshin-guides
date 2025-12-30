import { ArtifactSetNames } from "@/store/features/artifact-sets";
import { CharacterRoleIds, VideoSourceIds, WeaponNames } from "@/types/base.types";
import type { CharacterRecommendations } from "@/types/recommendations.types";

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.VIRIDESCENT_VENERER, notes: ["если играем c Флинсом"] },
      { type: "complete", name: ArtifactSetNames.SILKEN_MOONS_SERENADE, notes: ["если играем c Нефер"] },
      { type: "complete", name: ArtifactSetNames.DEEPWOOD_MEMORIES, notes: ["если играем c Нефер"] },
    ],
    stats: {
      sands: [{ name: "Восст. энергии" }],
      goblet: [{ name: "Сила атаки %" }],
      circlet: [{ name: "Сила атаки %" }, { name: "Шанс крит. попадания" }],
      additional: [
        { name: "Восст. энергии", notes: ["180%-200%"] },
        { name: "Сила атаки %" },
        { name: "Шанс крит. попадания" },
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
    { name: WeaponNames.ELEGY_FOR_THE_END, best: "Лучшее оружие" },
    { name: WeaponNames.FAVONIUS_WARBOW },
    { name: WeaponNames.SACRIFICIAL_BOW },
    { name: WeaponNames.SNARE_HOOK, best: "Лучшее доступное оружие" },
  ],
} as CharacterRecommendations;
