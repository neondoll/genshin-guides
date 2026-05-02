import { ArtifactSetIds } from "@/types/artifact-sets";
import { CharacterRoleIds } from "@/types/character-roles";
import { CharacterIds } from "@/types/characters";
import type { CharacterRecommendations } from "@/types/characters-recommendations";
import { Stats } from "@/types/stats";
import { VideoSourceIds } from "@/types/video-sources";
import { WeaponIds } from "@/types/weapons";

export default {
  id: CharacterIds.ILLUGA,
  artifacts: {
    sets: [{ ids: [ArtifactSetIds.SILKEN_MOONS_SERENADE] }],
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
    { id: WeaponIds.FAVONIUS_LANCE },
    { id: WeaponIds.DRAGONS_BANE },
    { id: WeaponIds.KITAIN_CROSS_SPEAR },
  ],
} as CharacterRecommendations;
