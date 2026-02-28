import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [{ ids: [ArtifactSetIds.NOBLESSE_OBLIGE] }],
    stats: {
      sands: [
        { name: Stats.ATK_PERCENTAGE, notes: ["в большинстве случаев"] },
        { name: Stats.ELEMENTAL_MASTERY, notes: ["если играем в Бутонах"] },
      ],
      goblet: [
        { name: Stats.PYRO_DMG_BONUS, notes: ["если силы атаки больше или равно 2500"] },
        { name: Stats.ATK_PERCENTAGE, notes: ["если силы атаки меньше или равно 2000"] },
      ],
      circlet: [{ name: Stats.CRIT_RATE }, { name: Stats.CRIT_DMG }],
      additional: [
        { name: Stats.CRIT_RATE },
        { name: Stats.CRIT_DMG },
        { name: Stats.ATK_PERCENTAGE },
        { name: Stats.ENERGY_RECHARGE },
        { name: Stats.ELEMENTAL_MASTERY },
      ],
    },
  },
  constellationOrSignatureWeapon: "С1 < Сигна, но С2 > Сигна (при наличии Легендарной альтернативы)",
  keyConstellations: [2, 6],
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS, CharacterRoleIds.SUPPORT],
  signatureWeaponIds: [WeaponIds.ATHAME_ARTIS],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1, overallLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", recommendedLevel: "6 - 10", overallLevel: 9 },
    { type: "combat3", priority: "В первую очередь", recommendedLevel: "9 - 10", overallLevel: 10 },
  ],
  videoSourceIds: [
    VideoSourceIds.GUIDE_TO_DURIN_IN_6_2_AnimeCool,
    VideoSourceIds.GUIDE_TO_DURIN_IN_6_2_MironMinMax,
    VideoSourceIds.TALENT_GAINS_PYRO,
  ],
  weapons: [
    { id: WeaponIds.ATHAME_ARTIS, best: "Лучшее оружие", percent: 1.24 },
    { id: WeaponIds.PRIMORDIAL_JADE_CUTTER, percent: 1.17 },
    { id: WeaponIds.MISTSPLITTER_REFORGED, percent: 1.15 },
    { id: WeaponIds.HARAN_GEPPAKU_FUTSU, percent: 1.11 },
    { id: WeaponIds.WOLF_FANG, r: 5, percent: 1.09 },
    { id: WeaponIds.AZURELIGHT, percent: 1.09 },
    { id: WeaponIds.ABSOLUTION, percent: 1.07 },
    { id: WeaponIds.MOONWEAVERS_DAWN, r: 5, percent: 1.05 },
    { id: WeaponIds.LIGHT_OF_FOLIAR_INCISION, percent: 1.04 },
    { id: WeaponIds.URAKU_MISUGIRI, percent: 1.03 },
    { id: WeaponIds.LIONS_ROAR, r: 5, percent: 1.03 },
    { id: WeaponIds.WOLF_FANG, r: 1, percent: 1.01 },
    { id: WeaponIds.FINALE_OF_THE_DEEP, best: "Лучшее доступное оружие", r: 5, percent: 1.00 },
    { id: WeaponIds.MOONWEAVERS_DAWN, r: 1, percent: 0.97 },
    { id: WeaponIds.THE_BLACK_SWORD, percent: 0.93 },
  ],
} as CharacterRecommendations;
