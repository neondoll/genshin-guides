import type { CharacterRecommendations } from "../types";
import { ArtifactSetNames } from "../../artifact-sets";
import { CharacterRoleIds } from "../../character-roles";
import { CharacterNames } from "../../characters";
import { WeaponNames } from "../../weapons";
import { Stats } from "@/types/base.types";

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.GOLDEN_TROUPE, best: true },
      { type: "complete", name: ArtifactSetNames.BLIZZARD_STRAYER },
    ],
    stats: {
      sands: [
        { name: Stats.ATK_PERCENTAGE, notes: ["Личный урон важнее, чем ульта по откату"] },
        {
          name: Stats.ENERGY_RECHARGE,
          notes: [`В меньшинстве случаев, когда есть ${CharacterNames.FURINA}, лечение нужно и лечить больше некому`],
        },
      ],
      goblet: [
        { name: Stats.CRYO_DMG_BONUS, notes: ["В 99% случаев"] },
        { name: Stats.ATK_PERCENTAGE, notes: ["В 1% случаев"] },
      ],
      circlet: [{ name: Stats.CRIT_RATE }, { name: Stats.CRIT_DMG, notes: ["Почти всегда"] }],
      additional: [
        { name: Stats.CRIT_RATE, notes: ["Приоритетно"] },
        { name: Stats.CRIT_DMG, notes: ["Приоритетно"] },
        { name: Stats.ATK_PERCENTAGE },
        { name: Stats.ENERGY_RECHARGE },
      ],
    },
  },
  constellationOrSignatureWeapon: "С1 лучше",
  recommendedLevel: "90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  signatureWeaponNames: [WeaponNames.SYMPHONIST_OF_SCENTS],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: 9 },
  ],
  weapons: [
    { name: WeaponNames.SYMPHONIST_OF_SCENTS, percent: 1.2991 },
    { name: WeaponNames.STAFF_OF_HOMA, percent: 1.2247 },
    { name: WeaponNames.LUMIDOUCE_ELEGY, percent: 1.1820 },
    { name: WeaponNames.DEATHMATCH, r: 5, percent: 1.1568 },
    { name: WeaponNames.PRIMORDIAL_JADE_WINGED_SPEAR, percent: 1.1435 },
    { name: WeaponNames.CRIMSON_MOONS_SEMBLANCE, percent: 1.1126 },
    { name: WeaponNames.STAFF_OF_THE_SCARLET_SANDS, percent: 1.0994 },
    { name: WeaponNames.DEATHMATCH, r: 1, percent: 1.0637 },
    { name: WeaponNames.SKYWARD_SPINE, percent: 1.0356 },
    { name: WeaponNames.PROSPECTORS_DRILL, r: 5, percent: 1.0309 },
    { name: WeaponNames.LITHIC_SPEAR, r: 5, percent: 1.0118 },
    { name: WeaponNames.BLACKCLIFF_POLE, percent: 1.0000 },
    { name: WeaponNames.BALLAD_OF_THE_FJORDS, r: 5, percent: 0.9927 },
    { name: WeaponNames.BALLAD_OF_THE_FJORDS, r: 1, percent: 0.9926 },
    { name: WeaponNames.PROSPECTORS_DRILL, r: 1, percent: 0.9819 },
    { name: WeaponNames.MISSIVE_WINDSPEAR, percent: 0.9801 },
    { name: WeaponNames.KITAIN_CROSS_SPEAR, r: 5, percent: 0.8818 },
    { name: WeaponNames.FAVONIUS_LANCE, r: 5, percent: 0.8526 },
  ],
} as CharacterRecommendations;
