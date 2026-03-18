import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [
      { ids: [ArtifactSetIds.GOLDEN_TROUPE], best: true },
      { ids: [ArtifactSetIds.BLIZZARD_STRAYER] },
      { ids: [ArtifactSetIds.SCROLL_OF_THE_HERO_OF_CINDER_CITY] },
      { ids: [ArtifactSetIds.NOBLESSE_OBLIGE] },
      { ids: [ArtifactSetIds.TENACITY_OF_THE_MILLELITH] },
    ],
    stats: {
      sands: [
        { name: Stats.ENERGY_RECHARGE, notes: ["Если ультовать надо и без часов не получается"] },
        { name: Stats.ATK_PERCENTAGE, notes: ["Если ультовать не надо или это можно сделать без часов"] },
      ],
      goblet: [{ name: Stats.CRYO_DMG_BONUS }],
      circlet: [{ name: Stats.CRIT_RATE }, { name: Stats.CRIT_DMG }],
      additional: [
        { name: Stats.CRIT_RATE, notes: ["Приоритетно"] },
        { name: Stats.CRIT_DMG, notes: ["Приоритетно"] },
        { name: Stats.ATK_PERCENTAGE },
        { name: Stats.ENERGY_RECHARGE, notes: ["145-200%", "~160% в отрядах Скирк"] },
      ],
    },
  },
  constellationOrSignatureWeapon: "Для лучшего отряда С1 > Сигны\nДля аккаунта в целом Сигна > С1",
  keyConstellations: [1],
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  signatureWeaponIds: [WeaponIds.SYMPHONIST_OF_SCENTS],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1 },
    { type: "combat2", priority: "В первую очередь", recommendedLevel: "8 - 10" },
    { type: "combat3", priority: "Во вторую очередь", recommendedLevel: "6 - 8" },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_ESCOFFIER_IN_6_4],
  weapons: [
    { id: WeaponIds.SYMPHONIST_OF_SCENTS, best: "Лучшее решение", percent: 1.0492 },
    { id: WeaponIds.SACRIFICERS_STAFF, r: 5, percent: 1.0180 },
    { id: WeaponIds.ENGULFING_LIGHTNING, percent: 1.0117 },
    { id: WeaponIds.CALAMITY_QUELLER, percent: 1.0066 },
    { id: WeaponIds.STAFF_OF_HOMA, percent: 1.0055 },
    { id: WeaponIds.FRACTURED_HALO, percent: 1.0023 },
    { id: WeaponIds.FAVONIUS_LANCE, best: "Лучшее доступное решение", percent: 1.0000 },
    { id: WeaponIds.LUMIDOUCE_ELEGY, percent: 0.9988 },
    { id: WeaponIds.DEATHMATCH, r: 5, percent: 0.9986 },
    { id: WeaponIds.SKYWARD_SPINE, percent: 0.9960 },
    { id: WeaponIds.MOUNTAIN_BRACING_BOLT, r: 5, percent: 0.9958 },
    { id: WeaponIds.SACRIFICERS_STAFF, r: 1, percent: 0.9946 },
    { id: WeaponIds.STAFF_OF_THE_SCARLET_SANDS, percent: 0.9934 },
    { id: WeaponIds.CRIMSON_MOONS_SEMBLANCE, percent: 0.9925 },
    { id: WeaponIds.PRIMORDIAL_JADE_WINGED_SPEAR, percent: 0.9920 },
  ],
} as CharacterRecommendations;
