import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { CharacterIds } from "@/types/characters.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { ElementIds } from "@/types/elements.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [
      { ids: [ArtifactSetIds.AUBADE_OF_MORNINGSTAR_AND_MOON], best: true, percent: 1.0827 },
      { ids: [ArtifactSetIds.GILDED_DREAMS], percent: 1.000 },
      { ids: [ArtifactSetIds.GLADIATORS_FINALE], percent: 0.9640 },
      { ids: [ArtifactSetIds.GLADIATORS_FINALE, ArtifactSetIds.GILDED_DREAMS], percent: 0.9817 },
      { ids: [ArtifactSetIds.WANDERERS_TROUPE, ArtifactSetIds.GILDED_DREAMS], percent: 0.9734 },
    ],
    stats: {
      sands: [{ name: Stats.ATK_PERCENTAGE, notes: ["Лучше"] }, { name: Stats.ELEMENTAL_MASTERY }],
      goblet: [{ name: Stats.ATK_PERCENTAGE, notes: ["Лучше"] }, { name: Stats.ELEMENTAL_MASTERY }],
      circlet: [{ name: Stats.CRIT_RATE }, { name: Stats.CRIT_DMG }],
      additional: [
        { name: Stats.CRIT_RATE, notes: ["Приоритетно", "от 60%"] }, // Приоритетно
        { name: Stats.CRIT_DMG, notes: ["Приоритетно", "от 120%"] }, // Приоритетно
        { name: Stats.ATK_PERCENTAGE, notes: ["Важна, но не первостепенна", "от 2000"] }, // Приоритетно
        { name: Stats.ELEMENTAL_MASTERY, notes: ["Будет хорошо, если не в ущерб атаке и критам", "от 150"] },
        { name: Stats.ENERGY_RECHARGE, notes: ["Специально не собирать"] },
      ],
    },
  },
  constellationOrSignatureWeapon: "Сигна > C1 > C2",
  detachments: [
    {
      description: "Лучшие",
      template: [
        { type: "character", id: CharacterIds.KYRYLL_CHUDOMIROVICH_FLINS },
        { type: "character", id: CharacterIds.INEFFA },
        { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
        { type: "character", id: CharacterIds.SUCROSE },
      ],
    },
    {
      description: "Сильные",
      template: [
        { type: "character", id: CharacterIds.INEFFA },
        { type: "character", id: CharacterIds.SUCROSE },
        { type: "character", id: CharacterIds.COLUMBINA_HYPOSELENIA },
        { type: "other", title: "Колясочник" },
      ],
    },
    {
      description: "Рабочие",
      template: [
        { type: "other", title: "Мейн-ДД" },
        { type: "character", id: CharacterIds.INEFFA },
        { type: "element", id: ElementIds.HYDRO },
      ],
    },
  ],
  keyConstellations: [1, 2, 6],
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  signatureWeaponIds: [WeaponIds.FRACTURED_HALO],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 8 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: 8 },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_INEFFA_IN_5_8, VideoSourceIds.GUIDE_TO_INEFFA_IN_6_3],
  weapons: {
    "Отряд Флинса": [
      { id: WeaponIds.FRACTURED_HALO, best: "Лучшее оружие", percent: 1.1689 },
      { id: WeaponIds.STAFF_OF_THE_SCARLET_SANDS, percent: 1.0622 },
      { id: WeaponIds.SYMPHONIST_OF_SCENTS, percent: 1.0562 },
      { id: WeaponIds.STAFF_OF_HOMA, percent: 1.0469 },
      { id: WeaponIds.LUMIDOUCE_ELEGY, percent: 1.0451 },
      { id: WeaponIds.DEATHMATCH, r: 5, percent: 1.0421 },
      { id: WeaponIds.CALAMITY_QUELLER, percent: 1.0410 },
      { id: WeaponIds.BLOODSOAKED_RUINS, percent: 1.0358 },
      { id: WeaponIds.SACRIFICERS_STAFF, r: 5, percent: 1.0279 },
      { id: WeaponIds.BALLAD_OF_THE_FJORDS, r: 5, percent: 1.0262 },
      { id: WeaponIds.PRIMORDIAL_JADE_WINGED_SPEAR, percent: 1.0258 },
      { id: WeaponIds.CRIMSON_MOONS_SEMBLANCE, percent: 1.0186 },
      { id: WeaponIds.DEATHMATCH, r: 1, percent: 1.0169 },
      { id: WeaponIds.VORTEX_VANQUISHER, percent: 1.0075 },
      { id: WeaponIds.BALLAD_OF_THE_FJORDS, r: 1, percent: 1.0065 },
      { id: WeaponIds.SACRIFICERS_STAFF, r: 1, percent: 1.0041 },
      { id: WeaponIds.PROSPECTORS_SHOVEL, best: "Лучшее доступное оружие", r: 5, percent: 1.0000 },
      { id: WeaponIds.MISSIVE_WINDSPEAR, r: 5, percent: 0.9914 },
      { id: WeaponIds.BLACKCLIFF_POLE, postfix: "без стаков", percent: 0.9890 },
      { id: WeaponIds.SKYWARD_SPINE, percent: 0.9890 },
      { id: WeaponIds.ENGULFING_LIGHTNING, percent: 0.9757 },
    ],
    "Коляска": [
      { id: WeaponIds.FRACTURED_HALO, best: "Лучшее оружие", percent: 1.0726 },
      { id: WeaponIds.STAFF_OF_THE_SCARLET_SANDS, percent: 1.0382 },
      { id: WeaponIds.SYMPHONIST_OF_SCENTS, percent: 1.0308 },
      { id: WeaponIds.STAFF_OF_HOMA, percent: 1.0308 },
      { id: WeaponIds.CALAMITY_QUELLER, percent: 1.0273 },
      { id: WeaponIds.BLOODSOAKED_RUINS, percent: 1.0254 },
      { id: WeaponIds.SACRIFICERS_STAFF, r: 5, percent: 1.0243 },
      { id: WeaponIds.DEATHMATCH, r: 5, percent: 1.0200 },
      { id: WeaponIds.BALLAD_OF_THE_FJORDS, r: 5, percent: 1.0193 },
      { id: WeaponIds.LUMIDOUCE_ELEGY, percent: 1.0174 },
      { id: WeaponIds.PRIMORDIAL_JADE_WINGED_SPEAR, percent: 1.0139 },
      { id: WeaponIds.LITHIC_SPEAR, r: 5, percent: 1.0138 },
      { id: WeaponIds.VORTEX_VANQUISHER, percent: 1.0119 },
      { id: WeaponIds.CRIMSON_MOONS_SEMBLANCE, percent: 1.0079 },
      { id: WeaponIds.BALLAD_OF_THE_FJORDS, r: 1, percent: 1.0047 },
      { id: WeaponIds.SACRIFICERS_STAFF, r: 1, percent: 1.0031 },
      { id: WeaponIds.MISSIVE_WINDSPEAR, best: "Лучшее эвентовое оружие", r: 5, percent: 1.0000 },
      { id: WeaponIds.DEATHMATCH, r: 1, percent: 0.9975 },
      { id: WeaponIds.PROSPECTORS_SHOVEL, best: "Лучшее доступное оружие", r: 5, percent: 0.9971 },
      { id: WeaponIds.SKYWARD_SPINE, percent: 0.9929 },
      { id: WeaponIds.LITHIC_SPEAR, r: 1, percent: 0.9908 },
    ],
    "Иное": [
      { id: WeaponIds.FRACTURED_HALO, best: "Лучшее оружие", percent: 1.0847 },
      { id: WeaponIds.STAFF_OF_THE_SCARLET_SANDS, percent: 1.0493 },
      { id: WeaponIds.STAFF_OF_HOMA, percent: 1.0456 },
      { id: WeaponIds.BALLAD_OF_THE_FJORDS, r: 5, percent: 1.0412 },
      { id: WeaponIds.SYMPHONIST_OF_SCENTS, percent: 1.0383 },
      { id: WeaponIds.LUMIDOUCE_ELEGY, percent: 1.0295 },
      { id: WeaponIds.DEATHMATCH, r: 5, percent: 1.0291 },
      { id: WeaponIds.CALAMITY_QUELLER, percent: 1.0279 },
      { id: WeaponIds.BLOODSOAKED_RUINS, percent: 1.0218 },
      { id: WeaponIds.BALLAD_OF_THE_FJORDS, r: 1, percent: 1.0203 },
      { id: WeaponIds.SACRIFICERS_STAFF, r: 5, percent: 1.0180 },
      { id: WeaponIds.PRIMORDIAL_JADE_WINGED_SPEAR, percent: 1.0170 },
      { id: WeaponIds.CRIMSON_MOONS_SEMBLANCE, percent: 1.0138 },
      { id: WeaponIds.DEATHMATCH, r: 1, percent: 1.0135 },
      { id: WeaponIds.VORTEX_VANQUISHER, percent: 1.0074 },
      { id: WeaponIds.SACRIFICERS_STAFF, r: 1, percent: 1.0028 },
      { id: WeaponIds.ENGULFING_LIGHTNING, percent: 1.0006 },
      { id: WeaponIds.MISSIVE_WINDSPEAR, best: "Лучшее эвентовое оружие", r: 5, percent: 1.0000 },
      { id: WeaponIds.BLACKCLIFF_POLE, postfix: "без стаков", percent: 0.9970 },
      { id: WeaponIds.PROSPECTORS_SHOVEL, best: "Лучшее доступное оружие", r: 5, percent: 0.9959 },
      { id: WeaponIds.SKYWARD_SPINE, percent: 0.9943 },
    ],
  },
} as CharacterRecommendations;
