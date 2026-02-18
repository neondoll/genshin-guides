import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponNames } from "@/types/weapons.types";

export default {
  constellationOrSignatureWeapon: "С1",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponNames: [WeaponNames.SURFS_UP],
  videoSourceIds: [
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.GUIDE_TO_MUALANI_IN_5_8,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { name: WeaponNames.SURFS_UP, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.RING_OF_YAXCHE, best: "Лучшее доступное оружие", r: 5 },
  ],
} as CharacterRecommendations;
