import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { ArtifactSetNames } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponNames } from "@/types/weapons.types";
import { Stats } from "@/types/stats.types";

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.MARECHAUSSEE_HUNTER, best: "Лучше с Фуриной" },
      { type: "complete", name: ArtifactSetNames.NIGHT_OF_THE_SKYS_UNVEILING, best: "Лучше в лунных отрядах" },
    ],
    stats: {
      sands: [{ name: Stats.HP_PERCENTAGE }],
      goblet: [
        { name: Stats.HP_PERCENTAGE, notes: ["Если в команде Фурина"] },
        { name: Stats.HYDRO_DMG_BONUS, notes: ["Если в команде нет Фурины"] },
      ],
      circlet: [
        { name: Stats.CRIT_RATE },
        { name: Stats.CRIT_DMG, notes: ["Чаще всего"] },
        { name: Stats.HP_PERCENTAGE, notes: ["Иногда, особенно с Сигной"] },
      ],
      additional: [
        { name: Stats.HP_PERCENTAGE, notes: ["от 30000"] },
        {
          name: Stats.CRIT_RATE,
          notes: [
            "от 65% в обычной ситуации",
            "от 35% при использовании полного комплекта Охотник Сумеречного двора и стремимся к 64%",
          ],
        },
        { name: Stats.CRIT_DMG, notes: ["от 160%"] },
        { name: Stats.ENERGY_RECHARGE, notes: ["Специально не охотиться", "от 120%"] },
      ],
    },
  },
  constellationOrSignatureWeapon: "Сигна < C1. Лучше Сигна и С1",
  keyConstellations: [1],
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponNames: [WeaponNames.TOME_OF_THE_ETERNAL_FLOW],
  talents: [
    { type: "combat1", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat2", priority: "Во вторую очередь", referenceLevel: "6-8" },
    { type: "combat3", priority: "По необходимости", referenceLevel: "6-8" },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.GUIDE_TO_NEUVILLETTE_IN_5_2,
    VideoSourceIds.GUIDE_TO_NEUVILLETTE_IN_6_3_AnimeCool,
    VideoSourceIds.GUIDE_TO_NEUVILLETTE_IN_6_3_MironMinMax,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { name: WeaponNames.TOME_OF_THE_ETERNAL_FLOW, best: "Лучшее оружие", percent: 1.1537 },
    { name: WeaponNames.SACRIFICIAL_JADE, r: 5, percent: 1.1458 },
    { name: WeaponNames.SURFS_UP, percent: 1.0764 },
    { name: WeaponNames.SACRIFICIAL_JADE, r: 1, percent: 1.0690 },
    { name: WeaponNames.NOCTURNES_CURTAIN_CALL, percent: 1.0544 },
    { name: WeaponNames.RELIQUARY_OF_TRUTH, percent: 1.0531 },
    { name: WeaponNames.CASHFLOW_SUPERVISION, percent: 1.0225 },
    { name: WeaponNames.KAGURAS_VERITY, percent: 1.0186 },
    { name: WeaponNames.THE_WIDSITH, best: "Лучшее доступное оружие", r: 5, percent: 1.0000 },
    { name: WeaponNames.LOST_PRAYER_TO_THE_SACRED_WINDS, percent: 0.9932 },
    { name: WeaponNames.ASH_GRAVEN_DRINKING_HORN, r: 5, percent: 0.9853 },
    { name: WeaponNames.DAWNING_FROST, percent: 0.9733 },
    { name: WeaponNames.BLACKCLIFF_AGATE, postfix: "без стаков", percent: 0.9732 },
    { name: WeaponNames.SOLAR_PEARL, percent: 0.9705 },
    { name: WeaponNames.JADEFALLS_SPLENDOR, percent: 0.9665 },
    { name: WeaponNames.EVERLASTING_MOONGLOW, percent: 0.9655 },
    { name: WeaponNames.PROTOTYPE_AMBER, r: 5, percent: 0.9579 },
    { name: WeaponNames.VIViD_NOTIONS, percent: 0.9537 },
    { name: WeaponNames.TULAYTULLAHS_REMEMBRANCE, percent: 0.9522 },
    { name: WeaponNames.RING_OF_YAXCHE, r: 5, percent: 0.9478 },
    { name: WeaponNames.FLOWING_PURITY, r: 5, percent: 0.9395 },
  ],
} as CharacterRecommendations;
