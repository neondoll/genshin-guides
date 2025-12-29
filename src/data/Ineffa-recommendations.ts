import {
  ArtifactSetNames,
  CharacterNames,
  CharacterRoleIds,
  ElementNames,
  VideoSourceIds,
  WeaponNames,
} from "@/types/base.types";
import type { CharacterRecommendations } from "@/types/recommendations.types";

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.GILDED_DREAMS, best: true, percent: 1.000 },
      {
        type: "combined",
        names: [ArtifactSetNames.WANDERERS_TROUPE, ArtifactSetNames.GLADIATORS_FINALE],
        percent: 0.9573,
      },
      { type: "complete", name: ArtifactSetNames.WANDERERS_TROUPE, percent: 0.9567 },
      {
        type: "combined",
        names: [ArtifactSetNames.SHIMENAWAS_REMINISCENCE, ArtifactSetNames.GLADIATORS_FINALE],
        percent: 0.9516,
      },
      { type: "complete", name: ArtifactSetNames.THUNDERING_FURY, percent: 0.9245 },
      { type: "complete", name: ArtifactSetNames.TENACITY_OF_THE_MILLELITH, percent: 0.9051 },
      { type: "complete", name: ArtifactSetNames.GOLDEN_TROUPE, percent: 0.8997 },
      { type: "complete", name: ArtifactSetNames.EMBLEM_OF_SEVERED_FATE, percent: 0.8785 },
    ],
    stats: {
      sands: [{ name: "Мастерство стихий" }, { name: "Сила атаки %" }],
      goblet: [{ name: "Мастерство стихий" }, { name: "Сила атаки %" }],
      circlet: [{ name: "Шанс крит. попадания" }, { name: "Крит. урон" }],
      additional: [
        { name: "Шанс крит. попадания", notes: ["от 60%"] },
        { name: "Крит. урон", notes: ["от 120%"] },
        { name: "Сила атаки %", notes: ["от 2000"] },
        { name: "Мастерство стихий", notes: ["от 150"] },
      ],
    },
  },
  constellationOrSignatureWeapon: "C1 < Сигна ~ C2",
  detachments: [
    {
      template: [
        { type: "character", name: CharacterNames.INEFFA },
        { type: "element", name: ElementNames.HYDRO },
        { type: "other", title: "Нод-Край персонаж" },
      ],
    },
  ],
  keyConstellations: [2],
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  signatureWeaponNames: [WeaponNames.FRACTURED_HALO],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 8 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: 8 },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_INEFFA_IN_5_8],
  weapons: [
    { name: WeaponNames.FRACTURED_HALO, best: "Лучшее оружие", percent: 1.3130 },
    { name: WeaponNames.STAFF_OF_THE_SCARLET_SANDS, percent: 1.2416 },
    { name: WeaponNames.SYMPHONIST_OF_SCENTS, percent: 1.1403 },
    { name: WeaponNames.BALLAD_OF_THE_FJORDS, r: 5, percent: 1.1307 },
    { name: WeaponNames.CALAMITY_QUELLER, percent: 1.1286 },
    { name: WeaponNames.STAFF_OF_HOMA, percent: 1.1194 },
    { name: WeaponNames.LUMIDOUCE_ELEGY, percent: 1.1068 },
    { name: WeaponNames.DEATHMATCH, r: 5, percent: 1.1004 },
    { name: WeaponNames.BALLAD_OF_THE_FJORDS, r: 1, percent: 1.0341 },
    { name: WeaponNames.PRIMORDIAL_JADE_WINGED_SPEAR, percent: 1.0334 },
    { name: WeaponNames.CRIMSON_MOONS_SEMBLANCE, percent: 1.0334 },
    { name: WeaponNames.DEATHMATCH, r: 1, percent: 1.0230 },
    { name: WeaponNames.MISSIVE_WINDSPEAR, best: "Лучшее эвентовое оружие", r: 5, percent: 1.0000 },
    { name: WeaponNames.VORTEX_VANQUISHER, percent: 0.9735 },
    { name: WeaponNames.SKYWARD_SPINE, percent: 0.9482 },
    { name: WeaponNames.BLACKCLIFF_POLE, percent: 0.9361 },
    { name: WeaponNames.TAMAYURATEI_NO_OHANASHI, r: 5, percent: 0.9249 },
    { name: WeaponNames.WAVEBREAKERS_FIN, r: 5, percent: 0.9090 },
    { name: WeaponNames.ENGULFING_LIGHTNING, percent: 0.9085 },
    { name: WeaponNames.KITAIN_CROSS_SPEAR, r: 5, percent: 0.8866 },
    { name: WeaponNames.DRAGONS_BANE, r: 5, percent: 0.8649 },
    { name: WeaponNames.WHITE_TASSEL, r: 5, percent: 0.8233 },
    { name: WeaponNames.FAVONIUS_LANCE, r: 5, percent: 0.8104 },
  ],
} as CharacterRecommendations;
