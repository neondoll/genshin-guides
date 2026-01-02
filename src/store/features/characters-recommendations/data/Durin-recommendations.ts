import type { CharacterRecommendations } from "../types";
import { ArtifactSetNames } from "../../artifact-sets";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";

export default {
  artifacts: {
    sets: [{ type: "complete", name: ArtifactSetNames.NOBLESSE_OBLIGE }],
    stats: {
      sands: [
        { name: "Сила атаки %", notes: ["в большинстве случаев"] },
        { name: "Мастерство стихий", notes: ["если играем в Бутонах"] },
      ],
      goblet: [
        { name: "Бонус Пиро урона", notes: ["если силы атаки больше или равно 2500"] },
        { name: "Сила атаки %", notes: ["если силы атаки меньше или равно 2000"] },
      ],
      circlet: [{ name: "Шанс крит. попадания" }, { name: "Крит. урон" }],
      additional: [
        { name: "Шанс крит. попадания" },
        { name: "Крит. урон" },
        { name: "Сила атаки %" },
        { name: "Восст. энергии" },
        { name: "Мастерство стихий" },
      ],
    },
  },
  constellationOrSignatureWeapon: "С1 < Сигна, но С2 > Сигна (при наличии Легендарной альтернативы)",
  keyConstellations: [2, 6],
  recommendedLevel: "80/90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS, CharacterRoleIds.SUPPORT],
  signatureWeaponNames: [WeaponNames.ATHAME_ARTIS],
  talents: [
    { type: "combat1", priority: "По необходимости", referenceLevel: 1 },
    { type: "combat2", priority: "Во вторую очередь", referenceLevel: 9 },
    { type: "combat3", priority: "В первую очередь", referenceLevel: 10 },
  ],
  videoSourceIds: [VideoSourceIds.GUIDE_TO_DURIN_IN_6_2_AnimeCool, VideoSourceIds.GUIDE_TO_DURIN_IN_6_2_MironMinMax],
  weapons: [
    { name: WeaponNames.ATHAME_ARTIS, best: "Лучшее оружие", percent: 1.24 },
    { name: WeaponNames.PRIMORDIAL_JADE_CUTTER, percent: 1.17 },
    { name: WeaponNames.MISTSPLITTER_REFORGED, percent: 1.15 },
    { name: WeaponNames.HARAN_GEPPAKU_FUTSU, percent: 1.11 },
    { name: WeaponNames.WOLF_FANG, r: 5, percent: 1.09 },
    { name: WeaponNames.AZURELIGHT, percent: 1.09 },
    { name: WeaponNames.ABSOLUTION, percent: 1.07 },
    { name: WeaponNames.MOONWEAVERS_DAWN, r: 5, percent: 1.05 },
    { name: WeaponNames.LIGHT_OF_FOLIAR_INCISION, percent: 1.04 },
    { name: WeaponNames.URAKU_MISUGIRI, percent: 1.03 },
    { name: WeaponNames.LIONS_ROAR, r: 5, percent: 1.03 },
    { name: WeaponNames.WOLF_FANG, r: 1, percent: 1.01 },
    { name: WeaponNames.FINALE_OF_THE_DEEP, best: "Лучшее доступное оружие", r: 5, percent: 1.00 },
    { name: WeaponNames.MOONWEAVERS_DAWN, r: 1, percent: 0.97 },
    { name: WeaponNames.THE_BLACK_SWORD, percent: 0.93 },
  ],
} as CharacterRecommendations;
