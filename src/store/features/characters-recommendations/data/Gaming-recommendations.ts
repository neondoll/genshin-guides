import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  talents: [
    { type: "combat1", priority: "Не качаем", recommendedLevel: 1, overallLevel: 1 },
    { type: "combat2", priority: "В первую очередь", recommendedLevel: "9 - 10", overallLevel: 10 },
    { type: "combat3", priority: "Во вторую очередь", recommendedLevel: "6 - 10", overallLevel: 9 },
  ],
  videoSourceIds: [
    VideoSourceIds.TALENT_GAINS_PYRO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { id: WeaponIds.SERPENT_SPINE, best: "Лучшее оружие", r: 5 },
    { id: WeaponIds.REDHORN_STONETHRESHER, r: 1 },
    { id: WeaponIds.WOLFS_GRAVESTONE, r: 1 },
    { id: WeaponIds.EARTH_SHAKER, best: "Лучшее доступное оружие", r: 5 },
    { id: WeaponIds.RAINSLASHER, best: "Лучшее доступное оружие", r: 5 },
    { id: WeaponIds.TIDAL_SHADOW, r: 5 },
  ],
} as CharacterRecommendations;
