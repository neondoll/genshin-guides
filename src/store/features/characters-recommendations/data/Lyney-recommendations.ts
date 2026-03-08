import { CharacterRoleIds } from "@/types/character-roles.types";
import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponIds } from "@/types/weapons.types";

export default {
  constellationOrSignatureWeapon: "Сигна",
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponIds: [WeaponIds.THE_FIRST_GREAT_MAGIC],
  talents: [
    { type: "combat1", priority: "В первую очередь", recommendedLevel: "9 - 10", overallLevel: 10 },
    { type: "combat2", priority: "По необходимости", recommendedLevel: "8 - 10", overallLevel: 10 },
    { type: "combat3", priority: "Во вторую очередь", recommendedLevel: "8 - 10", overallLevel: 10 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.TALENT_GAINS_PYRO,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_2,
  ],
  weapons: [
    { id: WeaponIds.THE_FIRST_GREAT_MAGIC, best: "Лучшее решение", r: 1 },
    { id: WeaponIds.SONG_OF_STILLNESS, best: "Лучшее доступное решение", r: 5 },
    { id: WeaponIds.PROTOTYPE_CRESCENT, r: 5 },
  ],
} as CharacterRecommendations;
