import type { CharacterRecommendations } from "../types";
import { ArtifactSetNames } from "../../artifact-sets";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";
import { Stats } from "@/types/base.types";

export default {
  artifacts: {
    sets: [
      { type: "complete", name: ArtifactSetNames.NOBLESSE_OBLIGE },
      {
        type: "complete",
        name: ArtifactSetNames.SONG_OF_DAYS_PAST,
        notes: ["Не рекомендуется, слишком нестабильна и требует овер хил"],
      },
      {
        type: "complete",
        name: ArtifactSetNames.SCROLL_OF_THE_HERO_OF_CINDER_CITY,
        notes: [`Если ${ArtifactSetNames.NOBLESSE_OBLIGE} занята`],
      },
      {
        type: "complete",
        name: ArtifactSetNames.EMBLEM_OF_SEVERED_FATE,
        notes: [`Если ${ArtifactSetNames.NOBLESSE_OBLIGE} и ${ArtifactSetNames.SCROLL_OF_THE_HERO_OF_CINDER_CITY} заняты`],
      },
    ],
    stats: {
      sands: [{ name: Stats.HP_PERCENTAGE }],
      goblet: [{ name: Stats.HP_PERCENTAGE }],
      circlet: [
        { name: Stats.HP_PERCENTAGE },
        { name: Stats.CRIT_RATE, notes: [`Если в руках ${WeaponNames.FAVONIUS_LANCE}`] },
      ],
      additional: [{ name: Stats.HP_PERCENTAGE }, { name: Stats.ENERGY_RECHARGE }],
    },
  },
  recommendedLevel: "90",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.SUPPORT, CharacterRoleIds.SURVIVABILITY],
  talents: [
    { type: "combat1", priority: "Не качаем", referenceLevel: 1 },
    { type: "combat2", priority: "В первую очередь", referenceLevel: 8 },
    { type: "combat3", priority: "Во вторую очередь", referenceLevel: 8 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { name: WeaponNames.STAFF_OF_HOMA, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.DIALOGUES_OF_THE_DESERT_SAGES, best: "Лучшее доступное оружие", r: 5 },
    { name: WeaponNames.RIGHTFUL_REWARD, best: "Лучшее доступное оружие", r: 5 },
    { name: WeaponNames.FAVONIUS_LANCE, r: 5 },
  ],
} as CharacterRecommendations;
