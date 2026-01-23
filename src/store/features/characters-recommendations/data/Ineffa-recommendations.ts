import type { CharacterRecommendations } from "../types";
import { ArtifactSetNames } from "../../artifact-sets";
import { CharacterRoleIds } from "../../character-roles";
import { CharacterNames } from "../../characters";
import { ElementNames } from "../../elements";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";
import { Stats } from "@/types/base.types";

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.AUBADE_OF_MORNINGSTAR_AND_MOON, best: true, percent: 1.0827 },
      { type: "complete", name: ArtifactSetNames.GILDED_DREAMS, percent: 1.000 },
      { type: "complete", name: ArtifactSetNames.GLADIATORS_FINALE, percent: 0.9640 },
      {
        type: "combined",
        names: [ArtifactSetNames.GLADIATORS_FINALE, ArtifactSetNames.GILDED_DREAMS],
        percent: 0.9817,
      },
      {
        type: "combined",
        names: [ArtifactSetNames.WANDERERS_TROUPE, ArtifactSetNames.GILDED_DREAMS],
        percent: 0.9734,
      },
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
        { type: "character", name: CharacterNames.KYRYLL_CHUDOMIROVICH_FLINS },
        { type: "character", name: CharacterNames.INEFFA },
        { type: "character", name: CharacterNames.COLUMBINA_HYPOSELENIA },
        { type: "character", name: CharacterNames.SUCROSE },
      ],
    },
    {
      description: "Сильные",
      template: [
        { type: "character", name: CharacterNames.INEFFA },
        { type: "character", name: CharacterNames.SUCROSE },
        { type: "character", name: CharacterNames.COLUMBINA_HYPOSELENIA },
        { type: "other", title: "Колясочник" },
      ],
    },
    {
      description: "Рабочие",
      template: [
        { type: "other", title: "Мейн-ДД" },
        { type: "character", name: CharacterNames.INEFFA },
        { type: "element", name: ElementNames.HYDRO },
      ],
    },
  ],
  keyConstellations: [1, 2, 6],
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  signatureWeaponNames: [WeaponNames.FRACTURED_HALO],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 8 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: 8 },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_INEFFA_IN_5_8, VideoSourceIds.GUIDE_TO_INEFFA_IN_6_3],
  weapons: {
    "Отряд Флинса": [
      { name: WeaponNames.FRACTURED_HALO, best: "Лучшее оружие", percent: 1.1689 },
      { name: WeaponNames.STAFF_OF_THE_SCARLET_SANDS, percent: 1.0622 },
      { name: WeaponNames.SYMPHONIST_OF_SCENTS, percent: 1.0562 },
      { name: WeaponNames.STAFF_OF_HOMA, percent: 1.0469 },
      { name: WeaponNames.LUMIDOUCE_ELEGY, percent: 1.0451 },
      { name: WeaponNames.DEATHMATCH, r: 5, percent: 1.0421 },
      { name: WeaponNames.CALAMITY_QUELLER, percent: 1.0410 },
      { name: WeaponNames.BLOODSOAKED_RUINS, percent: 1.0358 },
      { name: WeaponNames.SACRIFICERS_STAFF, r: 5, percent: 1.0279 },
      { name: WeaponNames.BALLAD_OF_THE_FJORDS, r: 5, percent: 1.0262 },
      { name: WeaponNames.PRIMORDIAL_JADE_WINGED_SPEAR, percent: 1.0258 },
      { name: WeaponNames.CRIMSON_MOONS_SEMBLANCE, percent: 1.0186 },
      { name: WeaponNames.DEATHMATCH, r: 1, percent: 1.0169 },
      { name: WeaponNames.VORTEX_VANQUISHER, percent: 1.0075 },
      { name: WeaponNames.BALLAD_OF_THE_FJORDS, r: 1, percent: 1.0065 },
      { name: WeaponNames.SACRIFICERS_STAFF, r: 1, percent: 1.0041 },
      { name: WeaponNames.PROSPECTORS_SHOVEL, best: "Лучшее доступное оружие", r: 5, percent: 1.0000 },
      { name: WeaponNames.MISSIVE_WINDSPEAR, r: 5, percent: 0.9914 },
      { name: WeaponNames.BLACKCLIFF_POLE, postfix: "без стаков", percent: 0.9890 },
      { name: WeaponNames.SKYWARD_SPINE, percent: 0.9890 },
      { name: WeaponNames.ENGULFING_LIGHTNING, percent: 0.9757 },
    ],
    "Коляска": [
      { name: WeaponNames.FRACTURED_HALO, best: "Лучшее оружие", percent: 1.0726 },
      { name: WeaponNames.STAFF_OF_THE_SCARLET_SANDS, percent: 1.0382 },
      { name: WeaponNames.SYMPHONIST_OF_SCENTS, percent: 1.0308 },
      { name: WeaponNames.STAFF_OF_HOMA, percent: 1.0308 },
      { name: WeaponNames.CALAMITY_QUELLER, percent: 1.0273 },
      { name: WeaponNames.BLOODSOAKED_RUINS, percent: 1.0254 },
      { name: WeaponNames.SACRIFICERS_STAFF, r: 5, percent: 1.0243 },
      { name: WeaponNames.DEATHMATCH, r: 5, percent: 1.0200 },
      { name: WeaponNames.BALLAD_OF_THE_FJORDS, r: 5, percent: 1.0193 },
      { name: WeaponNames.LUMIDOUCE_ELEGY, percent: 1.0174 },
      { name: WeaponNames.PRIMORDIAL_JADE_WINGED_SPEAR, percent: 1.0139 },
      { name: WeaponNames.LITHIC_SPEAR, r: 5, percent: 1.0138 },
      { name: WeaponNames.VORTEX_VANQUISHER, percent: 1.0119 },
      { name: WeaponNames.CRIMSON_MOONS_SEMBLANCE, percent: 1.0079 },
      { name: WeaponNames.BALLAD_OF_THE_FJORDS, r: 1, percent: 1.0047 },
      { name: WeaponNames.SACRIFICERS_STAFF, r: 1, percent: 1.0031 },
      { name: WeaponNames.MISSIVE_WINDSPEAR, best: "Лучшее эвентовое оружие", r: 5, percent: 1.0000 },
      { name: WeaponNames.DEATHMATCH, r: 1, percent: 0.9975 },
      { name: WeaponNames.PROSPECTORS_SHOVEL, best: "Лучшее доступное оружие", r: 5, percent: 0.9971 },
      { name: WeaponNames.SKYWARD_SPINE, percent: 0.9929 },
      { name: WeaponNames.LITHIC_SPEAR, r: 1, percent: 0.9908 },
    ],
    "Иное": [
      { name: WeaponNames.FRACTURED_HALO, best: "Лучшее оружие", percent: 1.0847 },
      { name: WeaponNames.STAFF_OF_THE_SCARLET_SANDS, percent: 1.0493 },
      { name: WeaponNames.STAFF_OF_HOMA, percent: 1.0456 },
      { name: WeaponNames.BALLAD_OF_THE_FJORDS, r: 5, percent: 1.0412 },
      { name: WeaponNames.SYMPHONIST_OF_SCENTS, percent: 1.0383 },
      { name: WeaponNames.LUMIDOUCE_ELEGY, percent: 1.0295 },
      { name: WeaponNames.DEATHMATCH, r: 5, percent: 1.0291 },
      { name: WeaponNames.CALAMITY_QUELLER, percent: 1.0279 },
      { name: WeaponNames.BLOODSOAKED_RUINS, percent: 1.0218 },
      { name: WeaponNames.BALLAD_OF_THE_FJORDS, r: 1, percent: 1.0203 },
      { name: WeaponNames.SACRIFICERS_STAFF, r: 5, percent: 1.0180 },
      { name: WeaponNames.PRIMORDIAL_JADE_WINGED_SPEAR, percent: 1.0170 },
      { name: WeaponNames.CRIMSON_MOONS_SEMBLANCE, percent: 1.0138 },
      { name: WeaponNames.DEATHMATCH, r: 1, percent: 1.0135 },
      { name: WeaponNames.VORTEX_VANQUISHER, percent: 1.0074 },
      { name: WeaponNames.SACRIFICERS_STAFF, r: 1, percent: 1.0028 },
      { name: WeaponNames.ENGULFING_LIGHTNING, percent: 1.0006 },
      { name: WeaponNames.MISSIVE_WINDSPEAR, best: "Лучшее эвентовое оружие", r: 5, percent: 1.0000 },
      { name: WeaponNames.BLACKCLIFF_POLE, postfix: "без стаков", percent: 0.9970 },
      { name: WeaponNames.PROSPECTORS_SHOVEL, best: "Лучшее доступное оружие", r: 5, percent: 0.9959 },
      { name: WeaponNames.SKYWARD_SPINE, percent: 0.9943 },
    ],
  },
} as CharacterRecommendations;
