import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { CharacterNames } from "@/types/characters.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds, WeaponNames } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [
      { ids: [ArtifactSetIds.SCROLL_OF_THE_HERO_OF_CINDER_CITY], best: true },
      { ids: [ArtifactSetIds.TENACITY_OF_THE_MILLELITH] },
      { ids: [ArtifactSetIds.NOBLESSE_OBLIGE] },
      { ids: [ArtifactSetIds.INSTRUCTOR] }, {
        ids: [ArtifactSetIds.ARCHAIC_PETRA],
        notes: [`Если в отряде есть ${CharacterNames.XILONEN}`, "Носитель должен подбирать осколок"],
      },
    ],
    stats: {
      sands: [{ name: Stats.ENERGY_RECHARGE, notes: ["в 99% случаев"] }, { name: Stats.ELEMENTAL_MASTERY }],
      goblet: [{ name: Stats.ELEMENTAL_MASTERY }],
      circlet: [
        { name: Stats.ELEMENTAL_MASTERY, notes: ["всегда"] },
        { name: Stats.CRIT_RATE, notes: [`можно рассмотреть, если в руках ${WeaponNames.FAVONIUS_CODEX}`] },
      ],
      additional: [
        { name: Stats.ENERGY_RECHARGE, notes: ["Приоритетно", "от 170%"] },
        { name: Stats.ELEMENTAL_MASTERY, notes: ["от 800"] },
      ],
    },
  },
  attackCombinations: ["Элем. навык (E)", "Взрыв стихий (Q)", "можно сделать 1 удар, чтобы точно наложить Крио статус"],
  constellationOrSignatureWeapon: "C1 < Сигна < C2",
  keyConstellations: [2],
  recommendedLevel: "80/80",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  signatureWeaponIds: [WeaponIds.STARCALLERS_WATCH],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: "6-8" },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: "6-8" },
  ],
  videoSourceIds: [VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON, VideoSourceIds.GUIDE_TO_CITLALI_IN_5_8],
  weapons: [
    { id: WeaponIds.STARCALLERS_WATCH, best: "Лучшее оружие", r: 1 },
    { id: WeaponIds.FAVONIUS_CODEX, r: 5 },
    { id: WeaponIds.THRILLING_TALES_OF_DRAGON_SLAYERS, r: 5 },
    { id: WeaponIds.SACRIFICIAL_FRAGMENTS, best: "Лучшее доступное оружие", r: 5 },
    { id: WeaponIds.PROTOTYPE_AMBER, r: 5 },
    { id: WeaponIds.WANDERING_EVENSTAR, r: 5 },
  ],
} as CharacterRecommendations;
