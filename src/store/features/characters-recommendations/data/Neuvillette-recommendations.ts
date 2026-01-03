import type { CharacterRecommendations } from "../types";
import { ArtifactSetNames } from "../../artifact-sets";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";
import { Stats } from "@/types/base.types";

export default {
  artifacts: {
    sets: [{ type: "complete", name: ArtifactSetNames.MARECHAUSSEE_HUNTER }],
    stats: {
      sands: [{ name: Stats.HP_PERCENTAGE }],
      goblet: [{ name: Stats.HP_PERCENTAGE, notes: ["Если в команде Фурина"] }, { name: "Бонус Гидро урона" }],
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
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponNames: [WeaponNames.TOME_OF_THE_ETERNAL_FLOW],
  talents: [
    { type: "combat1", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat2", priority: "Во вторую очередь", referenceLevel: "6 | 8" },
    { type: "combat3", priority: "По необходимости", referenceLevel: "6 | 8" },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.GUIDE_TO_NEUVILLETTE_IN_5_2,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { name: WeaponNames.TOME_OF_THE_ETERNAL_FLOW, best: "Лучшее оружие", percent: 1.000 },
    { name: WeaponNames.SACRIFICIAL_JADE, r: 5, percent: 0.998 },
    { name: WeaponNames.SURFS_UP, percent: 0.917 },
    { name: WeaponNames.SACRIFICIAL_JADE, r: 1, percent: 0.914 },
    { name: WeaponNames.ASH_GRAVEN_DRINKING_HORN, r: 5, percent: 0.874 },
    { name: WeaponNames.LOST_PRAYER_TO_THE_SACRED_WINDS, percent: 0.847 },
    { name: WeaponNames.CASHFLOW_SUPERVISION, percent: 0.831 },
    { name: WeaponNames.ASH_GRAVEN_DRINKING_HORN, r: 1, percent: 0.808 },
    { name: WeaponNames.KAGURAS_VERITY, percent: 0.807 },
    { name: WeaponNames.THE_WIDSITH, best: "Лучшее доступное оружие", r: 5, percent: 0.805 },
    { name: WeaponNames.JADEFALLS_SPLENDOR, percent: 0.796 },
    { name: WeaponNames.THE_WIDSITH, r: 1, percent: 0.791 },
    { name: WeaponNames.EVERLASTING_MOONGLOW, percent: 0.765 },
    { name: WeaponNames.TULAYTULLAHS_REMEMBRANCE, percent: 0.752 },
    { name: WeaponNames.PROTOTYPE_AMBER, percent: 0.745 },
    { name: WeaponNames.RING_OF_YAXCHE, percent: 0.745 },
  ],
} as CharacterRecommendations;
