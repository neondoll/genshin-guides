import type { CharacterRecommendations } from "../types";
import { ArtifactSetNames } from "../../artifact-sets";
import { CharacterRoleIds } from "../../character-roles";
import { CharacterNames } from "../../characters";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";
import { Stats } from "@/types/base.types";

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.SCROLL_OF_THE_HERO_OF_CINDER_CITY, best: true },
      { type: "complete", name: ArtifactSetNames.TENACITY_OF_THE_MILLELITH },
      { type: "complete", name: ArtifactSetNames.NOBLESSE_OBLIGE },
      { type: "complete", name: ArtifactSetNames.INSTRUCTOR },
      {
        type: "complete",
        name: ArtifactSetNames.ARCHAIC_PETRA,
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
  signatureWeaponNames: [WeaponNames.STARCALLERS_WATCH],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: "6-8" },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: "6-8" },
  ],
  videoSourceIds: [VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON, VideoSourceIds.GUIDE_TO_CITLALI_IN_5_8],
  weapons: [
    { name: WeaponNames.STARCALLERS_WATCH, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.FAVONIUS_CODEX, r: 5 },
    { name: WeaponNames.THRILLING_TALES_OF_DRAGON_SLAYERS, r: 5 },
    { name: WeaponNames.SACRIFICIAL_FRAGMENTS, best: "Лучшее доступное оружие", r: 5 },
    { name: WeaponNames.PROTOTYPE_AMBER, r: 5 },
    { name: WeaponNames.WANDERING_EVENSTAR, r: 5 },
  ],
} as CharacterRecommendations;
