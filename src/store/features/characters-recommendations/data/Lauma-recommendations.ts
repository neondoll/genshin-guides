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
      { type: "complete", name: ArtifactSetNames.GILDED_DREAMS },
      { type: "complete", name: ArtifactSetNames.DEEPWOOD_MEMORIES },
      { type: "complete", name: ArtifactSetNames.SILKEN_MOONS_SERENADE },
      { type: "combined", names: [ArtifactSetNames.GILDED_DREAMS, ArtifactSetNames.WANDERERS_TROUPE] },
    ],
    stats: {
      sands: [{ name: Stats.ELEMENTAL_MASTERY }, { name: Stats.ENERGY_RECHARGE }],
      goblet: [{ name: Stats.ELEMENTAL_MASTERY }],
      circlet: [
        { name: Stats.ELEMENTAL_MASTERY, notes: ["Лучше"] },
        { name: Stats.CRIT_RATE },
        { name: Stats.CRIT_DMG },
      ],
      additional: [
        { name: Stats.ELEMENTAL_MASTERY, notes: ["~ 1100"] },
        { name: Stats.ENERGY_RECHARGE, notes: ["~ 160%-200%"] },
        { name: Stats.CRIT_RATE },
        { name: Stats.CRIT_DMG },
      ],
    },
  },
  attackCombinations: {
    "В одну цель": ["Взрыв стихий", "к концу бонуса", "Элем. навык"],
    "В несколько целей": ["Элем. навык (Долгое нажатие)", "Взрыв стихий"],
  },
  constellationOrSignatureWeapon: "C1 < Сигна < C2",
  detachments: [
    {
      description: "Бутонизация",
      template: [
        { type: "element", name: ElementNames.HYDRO },
        { type: "character", name: CharacterNames.NILOU },
        { type: "character", name: CharacterNames.LAUMA },
        { type: "element", name: ElementNames.DENDRO },
      ],
    },
    {
      description: "Цветение",
      template: [
        { type: "character", name: CharacterNames.LAUMA },
        { type: "element", name: ElementNames.HYDRO },
        { type: "element", name: ElementNames.PYRO },
        { type: "other", title: `${ElementNames.DENDRO}/${ElementNames.HYDRO}/${ElementNames.PYRO} персонаж` },
      ],
    },
    {
      description: "Вегетация",
      template: [
        { type: "character", name: CharacterNames.LAUMA },
        { type: "element", name: ElementNames.HYDRO },
        { type: "element", name: ElementNames.ELECTRO },
        { type: "other", title: `${ElementNames.DENDRO}/${ElementNames.HYDRO}/${ElementNames.ELECTRO} персонаж` },
      ],
    },
  ],
  keyConstellations: [2],
  recommendedLevel: "90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS, CharacterRoleIds.SUPPORT],
  signatureWeaponNames: [WeaponNames.NIGHTWEAVERS_LOOKING_GLASS],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: 10 },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_LAUMA_IN_6_0_AnimeCool, VideoSourceIds.GUIDE_TO_LAUMA_IN_6_0_MironMinMax],
  weapons: [
    { name: WeaponNames.NIGHTWEAVERS_LOOKING_GLASS, best: "Лучшее оружие" },
    { name: WeaponNames.A_THOUSAND_FLOATING_DREAMS },
    { name: WeaponNames.SUNNY_MORNING_SLEEP_IN },
    { name: WeaponNames.STARCALLERS_WATCH },
    { name: WeaponNames.ETHERLIGHT_SPINDLELUTE, best: "Лучшее эвентовое оружие" },
    { name: WeaponNames.BLACKMARROW_LANTERN, best: "Лучшее доступное оружие" },
    { name: WeaponNames.SACRIFICIAL_FRAGMENTS },
    { name: WeaponNames.FAVONIUS_CODEX },
    { name: WeaponNames.THRILLING_TALES_OF_DRAGON_SLAYERS },
  ],
} as CharacterRecommendations;
