import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: {
      "Прожарка | Перегрузка": [
        { ids: [ArtifactSetIds.FRAGMENT_OF_HARMONIC_WHIMSY], best: true, percent: 1.051 },
        { ids: [ArtifactSetIds.GLADIATORS_FINALE], percent: 1.000 },
        { ids: [ArtifactSetIds.DESERT_PAVILION_CHRONICLE], percent: 0.973 },
        { ids: [ArtifactSetIds.ECHOES_OF_AN_OFFERING], percent: 0.971 },
        { ids: [ArtifactSetIds.CRIMSON_WITCH_OF_FLAMES, ArtifactSetIds.MARECHAUSSEE_HUNTER], percent: 0.952 },
        { ids: [ArtifactSetIds.CRIMSON_WITCH_OF_FLAMES, ArtifactSetIds.GLADIATORS_FINALE], percent: 0.946 },
        { ids: [ArtifactSetIds.SHIMENAWAS_REMINISCENCE, ArtifactSetIds.GLADIATORS_FINALE], percent: 0.933 },
      ],
      "Пар | Таяние": [
        { ids: [ArtifactSetIds.FRAGMENT_OF_HARMONIC_WHIMSY], best: true, percent: 1.042 },
        { ids: [ArtifactSetIds.GLADIATORS_FINALE], percent: 1.000 },
        { ids: [ArtifactSetIds.GILDED_DREAMS], percent: 0.983 },
        { ids: [ArtifactSetIds.DESERT_PAVILION_CHRONICLE], percent: 0.968 },
        { ids: [ArtifactSetIds.ECHOES_OF_AN_OFFERING], percent: 0.956 },
        { ids: [ArtifactSetIds.WANDERERS_TROUPE, ArtifactSetIds.GILDED_DREAMS], percent: 0.953 },
        { ids: [ArtifactSetIds.CRIMSON_WITCH_OF_FLAMES, ArtifactSetIds.GILDED_DREAMS], percent: 0.952 },
        { ids: [ArtifactSetIds.GLADIATORS_FINALE, ArtifactSetIds.GILDED_DREAMS], percent: 0.949 },
        { ids: [ArtifactSetIds.CRIMSON_WITCH_OF_FLAMES, ArtifactSetIds.MARECHAUSSEE_HUNTER], percent: 0.945 },
      ],
    },
    stats: {
      sands: [{ name: Stats.ATK_PERCENTAGE }],
      goblet: [{ name: Stats.PYRO_DMG_BONUS, notes: ["Лучше"] }, { name: Stats.ATK_PERCENTAGE }],
      circlet: [{ name: Stats.CRIT_RATE }, { name: Stats.CRIT_DMG }],
      additional: [
        { name: Stats.CRIT_RATE, notes: ["Приоритетно", "от 65%"] },
        { name: Stats.CRIT_DMG, notes: ["Приоритетно", "от 150%"] },
        { name: Stats.ATK_PERCENTAGE, notes: ["от 2000"] },
        { name: Stats.ELEMENTAL_MASTERY, notes: ["от 150 (если Арлекино активирует реакции)"] },
        { name: Stats.ENERGY_RECHARGE, notes: ["Специально не собирать"] },
      ],
    },
  },
  constellationOrSignatureWeapon: "Сигна ~ C1. Лучше С1 и Сигна",
  keyConstellations: [1, 2, 3, 6],
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponIds: [WeaponIds.CRIMSON_MOONS_SEMBLANCE],
  talents: [
    { type: "combat1", priority: "В первую очередь", recommendedLevel: "9 - 10", overallLevel: 10 },
    { type: "combat2", priority: "По необходимости", recommendedLevel: "1 - 8", overallLevel: 6 },
    { type: "combat3", priority: "Во вторую очередь", recommendedLevel: "1 - 8", overallLevel: 6 },
  ],
  videoSourceIds: [
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.GUIDE_TO_ARLECCHINO_IN_5_3,
    VideoSourceIds.TALENT_GAINS_PYRO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: {
    "Гиперкери | Прожарка | Перегрузка": [
      { id: WeaponIds.CRIMSON_MOONS_SEMBLANCE, best: "Лучшее оружие", percent: 1.316 },
      { id: WeaponIds.PRIMORDIAL_JADE_WINGED_SPEAR, percent: 1.124 },
      { id: WeaponIds.STAFF_OF_THE_SCARLET_SANDS, percent: 1.112 },
      { id: WeaponIds.LUMIDOUCE_ELEGY, percent: 1.103 },
      { id: WeaponIds.DEATHMATCH, postfix: "1 враг", r: 5, percent: 1.087 },
      { id: WeaponIds.STAFF_OF_HOMA, percent: 1.085 },
      { id: WeaponIds.CALAMITY_QUELLER, percent: 1.063 },
      { id: WeaponIds.DEATHMATCH, postfix: "1 враг", r: 1, percent: 1.032 },
      { id: WeaponIds.WHITE_TASSEL, best: "Лучшее доступное оружие", percent: 1.000 },
      { id: WeaponIds.BALLAD_OF_THE_FJORDS, percent: 0.968 },
      { id: WeaponIds.SKYWARD_SPINE, percent: 0.948 },
      { id: WeaponIds.BLACKCLIFF_POLE, percent: 0.899 },
      { id: WeaponIds.MISSIVE_WINDSPEAR, percent: 0.875 },
    ],
    "Пар | Таяние": [
      { id: WeaponIds.CRIMSON_MOONS_SEMBLANCE, best: "Лучшее оружие", percent: 1.309 },
      { id: WeaponIds.STAFF_OF_THE_SCARLET_SANDS, percent: 1.156 },
      { id: WeaponIds.PRIMORDIAL_JADE_WINGED_SPEAR, percent: 1.114 },
      { id: WeaponIds.DEATHMATCH, postfix: "1 враг", r: 5, percent: 1.105 },
      { id: WeaponIds.LUMIDOUCE_ELEGY, percent: 1.103 },
      { id: WeaponIds.BALLAD_OF_THE_FJORDS, r: 5, percent: 1.098 },
      { id: WeaponIds.STAFF_OF_HOMA, percent: 1.086 },
      { id: WeaponIds.CALAMITY_QUELLER, percent: 1.062 },
      { id: WeaponIds.VORTEX_VANQUISHER, percent: 1.044 },
      { id: WeaponIds.DEATHMATCH, postfix: "1 враг", r: 1, percent: 1.043 },
      { id: WeaponIds.LITHIC_SPEAR, postfix: "2 стака", r: 5, percent: 1.043 },
      { id: WeaponIds.BALLAD_OF_THE_FJORDS, r: 1, percent: 1.023 },
      { id: WeaponIds.WHITE_TASSEL, best: "Лучшее доступное оружие", percent: 1.000 },
      { id: WeaponIds.MISSIVE_WINDSPEAR, percent: 0.990 },
      { id: WeaponIds.DRAGONS_BANE, percent: 0.965 },
      { id: WeaponIds.LITHIC_SPEAR, postfix: "2 стака", r: 1, percent: 0.965 },
      { id: WeaponIds.SKYWARD_SPINE, percent: 0.943 },
      { id: WeaponIds.BLACKCLIFF_POLE, percent: 0.938 },
    ],
  },
} as CharacterRecommendations;
