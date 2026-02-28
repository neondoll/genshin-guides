import { ArtifactSetIds } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [
      { ids: [ArtifactSetIds.MARECHAUSSEE_HUNTER], best: "Лучше с Фуриной" },
      { ids: [ArtifactSetIds.NIGHT_OF_THE_SKYS_UNVEILING], best: "Лучше в лунных отрядах" },
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
  signatureWeaponIds: [WeaponIds.TOME_OF_THE_ETERNAL_FLOW],
  talents: [
    { type: "combat1", priority: "В первую очередь", recommendedLevel: "8 - 10", overallLevel: 10 },
    { type: "combat2", priority: "Во вторую очередь", recommendedLevel: "1 - 9", overallLevel: "6 - 8" },
    { type: "combat3", priority: "По необходимости", recommendedLevel: "1 - 9", overallLevel: "6 - 8" },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.GUIDE_TO_NEUVILLETTE_IN_5_2,
    VideoSourceIds.GUIDE_TO_NEUVILLETTE_IN_6_3_AnimeCool,
    VideoSourceIds.GUIDE_TO_NEUVILLETTE_IN_6_3_MironMinMax,
    VideoSourceIds.TALENT_GAINS_HYDRO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { id: WeaponIds.TOME_OF_THE_ETERNAL_FLOW, best: "Лучшее оружие", percent: 1.1537 },
    { id: WeaponIds.SACRIFICIAL_JADE, r: 5, percent: 1.1458 },
    { id: WeaponIds.SURFS_UP, percent: 1.0764 },
    { id: WeaponIds.SACRIFICIAL_JADE, r: 1, percent: 1.0690 },
    { id: WeaponIds.NOCTURNES_CURTAIN_CALL, percent: 1.0544 },
    { id: WeaponIds.RELIQUARY_OF_TRUTH, percent: 1.0531 },
    { id: WeaponIds.CASHFLOW_SUPERVISION, percent: 1.0225 },
    { id: WeaponIds.KAGURAS_VERITY, percent: 1.0186 },
    { id: WeaponIds.THE_WIDSITH, best: "Лучшее доступное оружие", r: 5, percent: 1.0000 },
    { id: WeaponIds.LOST_PRAYER_TO_THE_SACRED_WINDS, percent: 0.9932 },
    { id: WeaponIds.ASH_GRAVEN_DRINKING_HORN, r: 5, percent: 0.9853 },
    { id: WeaponIds.DAWNING_FROST, percent: 0.9733 },
    { id: WeaponIds.BLACKCLIFF_AGATE, postfix: "без стаков", percent: 0.9732 },
    { id: WeaponIds.SOLAR_PEARL, percent: 0.9705 },
    { id: WeaponIds.JADEFALLS_SPLENDOR, percent: 0.9665 },
    { id: WeaponIds.EVERLASTING_MOONGLOW, percent: 0.9655 },
    { id: WeaponIds.PROTOTYPE_AMBER, r: 5, percent: 0.9579 },
    { id: WeaponIds.VIViD_NOTIONS, percent: 0.9537 },
    { id: WeaponIds.TULAYTULLAHS_REMEMBRANCE, percent: 0.9522 },
    { id: WeaponIds.RING_OF_YAXCHE, r: 5, percent: 0.9478 },
    { id: WeaponIds.FLOWING_PURITY, r: 5, percent: 0.9395 },
  ],
} as CharacterRecommendations;
