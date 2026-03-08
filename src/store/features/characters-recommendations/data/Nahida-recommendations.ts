import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [
      { ids: [ArtifactSetIds.DEEPWOOD_MEMORIES], best: true },
      { ids: [ArtifactSetIds.GOLDEN_TROUPE] },
      { ids: [ArtifactSetIds.GILDED_DREAMS] },
      { ids: [ArtifactSetIds.INSTRUCTOR] },
    ],
    stats: {
      sands: [{ name: Stats.ELEMENTAL_MASTERY }],
      goblet: [{ name: Stats.ELEMENTAL_MASTERY }, { name: Stats.DENDRO_DMG_BONUS }],
      circlet: [{ name: Stats.CRIT_RATE }, { name: Stats.CRIT_DMG }, { name: Stats.ELEMENTAL_MASTERY }],
      additional: [
        { name: Stats.CRIT_RATE },
        { name: Stats.CRIT_DMG },
        { name: Stats.ELEMENTAL_MASTERY },
        { name: Stats.ATK_PERCENTAGE },
      ],
    },
  },
  constellationOrSignatureWeapon: "С1 < Сигна < С2",
  keyConstellations: [2],
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS, CharacterRoleIds.SUPPORT],
  signatureWeaponIds: [WeaponIds.A_THOUSAND_FLOATING_DREAMS],
  talents: [
    { type: "combat1", priority: "По необходимости", referenceLevel: "6-8" },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: "6-8" },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.GUIDE_TO_NAHIDA_IN_5_1,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_2,
  ],
  weapons: {
    Вегетация: [
      { id: WeaponIds.A_THOUSAND_FLOATING_DREAMS, best: "Лучшее решение", r: 1, percent: 1.0000 },
      { id: WeaponIds.WANDERING_EVENSTAR, r: 5, percent: 0.9841 },
      { id: WeaponIds.THE_WIDSITH, best: "Лучшее доступное решение", r: 5, percent: 0.9705 },
      { id: WeaponIds.WANDERING_EVENSTAR, r: 1, percent: 0.9702 },
      { id: WeaponIds.SURFS_UP, r: 1, percent: 0.9679 },
      { id: WeaponIds.KAGURAS_VERITY, r: 1, percent: 0.9668 },
      { id: WeaponIds.TOME_OF_THE_ETERNAL_FLOW, r: 1, percent: 0.9664 },
      { id: WeaponIds.SACRIFICIAL_JADE, r: 5, percent: 0.9654 },
      { id: WeaponIds.THE_WIDSITH, r: 1, percent: 0.9646 },
      { id: WeaponIds.SOLAR_PEARL, r: 1, percent: 0.9628 },
    ],
    Стимуляция: [
      { id: WeaponIds.A_THOUSAND_FLOATING_DREAMS, best: "Лучшее решение", r: 1, percent: 1.0000 },
      { id: WeaponIds.WANDERING_EVENSTAR, r: 5, percent: 0.9789 },
      { id: WeaponIds.WANDERING_EVENSTAR, r: 1, percent: 0.9718 },
      { id: WeaponIds.MAGIC_GUIDE, best: "Лучшее доступное решение", r: 5, percent: 0.9552 },
      { id: WeaponIds.THE_WIDSITH, r: 5, percent: 0.9522 },
      { id: WeaponIds.SACRIFICIAL_JADE, r: 5, percent: 0.9518 },
      { id: WeaponIds.KAGURAS_VERITY, r: 1, percent: 0.9502 },
      { id: WeaponIds.SACRIFICIAL_FRAGMENTS, r: 5, percent: 0.9489 },
      { id: WeaponIds.MAPPA_MARE, r: 5, percent: 0.9484 },
      { id: WeaponIds.SURFS_UP, r: 1, percent: 0.9471 },
    ],
  },
} as CharacterRecommendations;
