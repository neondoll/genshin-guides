import type { CharacterRecommendations } from "../types";
import { CharacterRoleIds } from "../../character-roles";
import { VideoSourceIds } from "../../video-sources";
import { WeaponNames } from "../../weapons";

export default {
  constellationOrSignatureWeapon: "Сигна",
  recommendedLevel: "90/90",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponNames: [WeaponNames.THE_FIRST_GREAT_MAGIC],
  talents: [
    { type: "combat1", priority: "В первую очередь", referenceLevel: 10 },
    { type: "combat2", priority: "Во вторую очередь", referenceLevel: 10 },
    { type: "combat3", priority: "По необходимости", referenceLevel: 10 },
  ],
  videoSourceIds: [
    VideoSourceIds.ALL_ABOUT_ALL_TALENTS,
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.WHO_NEEDS_LEVELING_PART_2,
  ],
  weapons: [
    { name: WeaponNames.THE_FIRST_GREAT_MAGIC, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.SONG_OF_STILLNESS, best: "Лучшее доступное оружие", r: 5 },
    { name: WeaponNames.PROTOTYPE_CRESCENT, r: 5 },
  ],
} as CharacterRecommendations;
