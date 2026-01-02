import type { CharacterRecommendations } from "../types";
import { ArtifactSetNames } from "../../artifact-sets";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.DEEPWOOD_MEMORIES, best: true },
      { type: "complete", name: ArtifactSetNames.GOLDEN_TROUPE },
      { type: "complete", name: ArtifactSetNames.GILDED_DREAMS },
      { type: "complete", name: ArtifactSetNames.INSTRUCTOR },
    ],
    stats: {
      sands: [{ name: "Мастерство стихий" }],
      goblet: [{ name: "Мастерство стихий" }, { name: "Бонус Дендро урона" }],
      circlet: [{ name: "Шанс крит. попадания" }, { name: "Крит. урон" }, { name: "Мастерство стихий" }],
      additional: [
        { name: "Шанс крит. попадания" },
        { name: "Крит. урон" },
        { name: "Мастерство стихий" },
        { name: "Сила атаки %" },
      ],
    },
  },
  constellationOrSignatureWeapon: "С1 < Сигна < С2",
  keyConstellations: [2],
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS, CharacterRoleIds.SUPPORT],
  signatureWeaponNames: [WeaponNames.A_THOUSAND_FLOATING_DREAMS],
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
      { name: WeaponNames.A_THOUSAND_FLOATING_DREAMS, best: "Лучшее оружие", r: 1, percent: 1.0000 },
      { name: WeaponNames.WANDERING_EVENSTAR, r: 5, percent: 0.9841 },
      { name: WeaponNames.THE_WIDSITH, best: "Лучшее доступное оружие", r: 5, percent: 0.9705 },
      { name: WeaponNames.WANDERING_EVENSTAR, r: 1, percent: 0.9702 },
      { name: WeaponNames.SURFS_UP, r: 1, percent: 0.9679 },
      { name: WeaponNames.KAGURAS_VERITY, r: 1, percent: 0.9668 },
      { name: WeaponNames.TOME_OF_THE_ETERNAL_FLOW, r: 1, percent: 0.9664 },
      { name: WeaponNames.SACRIFICIAL_JADE, r: 5, percent: 0.9654 },
      { name: WeaponNames.THE_WIDSITH, r: 1, percent: 0.9646 },
      { name: WeaponNames.SOLAR_PEARL, r: 1, percent: 0.9628 },
    ],
    Стимуляция: [
      { name: WeaponNames.A_THOUSAND_FLOATING_DREAMS, best: "Лучшее оружие", r: 1, percent: 1.0000 },
      { name: WeaponNames.WANDERING_EVENSTAR, r: 5, percent: 0.9789 },
      { name: WeaponNames.WANDERING_EVENSTAR, r: 1, percent: 0.9718 },
      { name: WeaponNames.MAGIC_GUIDE, best: "Лучшее доступное оружие", r: 5, percent: 0.9552 },
      { name: WeaponNames.THE_WIDSITH, r: 5, percent: 0.9522 },
      { name: WeaponNames.SACRIFICIAL_JADE, r: 5, percent: 0.9518 },
      { name: WeaponNames.KAGURAS_VERITY, r: 1, percent: 0.9502 },
      { name: WeaponNames.SACRIFICIAL_FRAGMENTS, r: 5, percent: 0.9489 },
      { name: WeaponNames.MAPPA_MARE, r: 5, percent: 0.9484 },
      { name: WeaponNames.SURFS_UP, r: 1, percent: 0.9471 },
    ],
  },
} as CharacterRecommendations;
