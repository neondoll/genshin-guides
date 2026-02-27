import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponNames } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [{ type: "complete", id: ArtifactSetIds.SILKEN_MOONS_SERENADE }],
    stats: {
      sands: [{ name: Stats.ELEMENTAL_MASTERY }, { name: Stats.ENERGY_RECHARGE }],
      goblet: [{ name: Stats.ELEMENTAL_MASTERY }],
      circlet: [{ name: Stats.ELEMENTAL_MASTERY }],
      additional: [
        { name: Stats.ELEMENTAL_MASTERY },
        { name: Stats.ENERGY_RECHARGE, notes: ["160% - 200%"] },
      ],
    },
  },
  attackCombinations: ["Навык (Даёт энергию)", "Взрыв стихий (Даёт 21 заряд бонуса +5 зарядов за каждую конструкцию)"],
  keyConstellations: [2, 6],
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SUPPORT],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь (опционально)", referenceLevel: 1 },
    { type: "combat3", priority: "В первую очередь", referenceLevel: 10 },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_ILLUGA_IN_6_3],
  weapons: [
    { name: WeaponNames.FAVONIUS_LANCE },
    { name: WeaponNames.DRAGONS_BANE },
    { name: WeaponNames.KITAIN_CROSS_SPEAR },
  ],
} as CharacterRecommendations;
