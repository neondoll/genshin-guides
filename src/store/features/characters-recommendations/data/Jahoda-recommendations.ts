import type { CharacterRecommendations } from "../types";
import { ArtifactSetNames } from "../../artifact-sets";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";
import { Stats } from "@/types/base.types";

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.VIRIDESCENT_VENERER, notes: ["если играем c Флинсом"] },
      { type: "complete", name: ArtifactSetNames.SILKEN_MOONS_SERENADE, notes: ["если играем c Нефер"] },
      { type: "complete", name: ArtifactSetNames.DEEPWOOD_MEMORIES, notes: ["если играем c Нефер"] },
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
    { name: WeaponNames.ELEGY_FOR_THE_END, best: "Лучшее оружие" },
    { name: WeaponNames.FAVONIUS_WARBOW },
    { name: WeaponNames.SACRIFICIAL_BOW },
    { name: WeaponNames.SNARE_HOOK, best: "Лучшее доступное оружие" },
  ],
} as CharacterRecommendations;
