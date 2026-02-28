import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { CharacterNames } from "@/types/characters.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { Stats } from "@/types/stats.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [{ ids: [ArtifactSetIds.GOLDEN_TROUPE], best: true }, { ids: [ArtifactSetIds.BLIZZARD_STRAYER] }],
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
  signatureWeaponIds: [WeaponIds.SYMPHONIST_OF_SCENTS],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: 9 },
  ],
  weapons: [
    { id: WeaponIds.SYMPHONIST_OF_SCENTS, percent: 1.2991 },
    { id: WeaponIds.STAFF_OF_HOMA, percent: 1.2247 },
    { id: WeaponIds.LUMIDOUCE_ELEGY, percent: 1.1820 },
    { id: WeaponIds.DEATHMATCH, r: 5, percent: 1.1568 },
    { id: WeaponIds.PRIMORDIAL_JADE_WINGED_SPEAR, percent: 1.1435 },
    { id: WeaponIds.CRIMSON_MOONS_SEMBLANCE, percent: 1.1126 },
    { id: WeaponIds.STAFF_OF_THE_SCARLET_SANDS, percent: 1.0994 },
    { id: WeaponIds.DEATHMATCH, r: 1, percent: 1.0637 },
    { id: WeaponIds.SKYWARD_SPINE, percent: 1.0356 },
    { id: WeaponIds.PROSPECTORS_DRILL, r: 5, percent: 1.0309 },
    { id: WeaponIds.LITHIC_SPEAR, r: 5, percent: 1.0118 },
    { id: WeaponIds.BLACKCLIFF_POLE, percent: 1.0000 },
    { id: WeaponIds.BALLAD_OF_THE_FJORDS, r: 5, percent: 0.9927 },
    { id: WeaponIds.BALLAD_OF_THE_FJORDS, r: 1, percent: 0.9926 },
    { id: WeaponIds.PROSPECTORS_DRILL, r: 1, percent: 0.9819 },
    { id: WeaponIds.MISSIVE_WINDSPEAR, percent: 0.9801 },
    { id: WeaponIds.KITAIN_CROSS_SPEAR, r: 5, percent: 0.8818 },
    { id: WeaponIds.FAVONIUS_LANCE, r: 5, percent: 0.8526 },
  ],
} as CharacterRecommendations;
