import { ArtifactSetIds, ArtifactSetNames } from "@/types/artifact-sets.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { Stats } from "@/types/stats.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds, WeaponNames } from "@/types/weapons.types";

export default {
  artifacts: {
    sets: [
      { ids: [ArtifactSetIds.NOBLESSE_OBLIGE] },
      { ids: [ArtifactSetIds.SONG_OF_DAYS_PAST], notes: ["Не рекомендуется, слишком нестабильна и требует овер хил"] },
      {
        ids: [ArtifactSetIds.SCROLL_OF_THE_HERO_OF_CINDER_CITY],
        notes: [`Если ${ArtifactSetNames.NOBLESSE_OBLIGE} занята`],
      },
      {
        ids: [ArtifactSetIds.EMBLEM_OF_SEVERED_FATE],
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
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1, overallLevel: 1 },
    { type: "combat2", priority: "В первую очередь", recommendedLevel: "1 - 8", overallLevel: 8 },
    { type: "combat3", priority: "Во вторую очередь", recommendedLevel: "1 - 8", overallLevel: 8 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.TALENT_GAINS_PYRO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { id: WeaponIds.STAFF_OF_HOMA, best: "Лучшее решение", r: 1 },
    { id: WeaponIds.DIALOGUES_OF_THE_DESERT_SAGES, best: "Лучшее доступное решение", r: 5 },
    { id: WeaponIds.RIGHTFUL_REWARD, best: "Лучшее доступное решение", r: 5 },
    { id: WeaponIds.FAVONIUS_LANCE, r: 5 },
  ],
} as CharacterRecommendations;
