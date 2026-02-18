import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponNames } from "@/types/weapons.types";

export default {
  constellationOrSignatureWeapon: "Сигна",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponNames: [WeaponNames.ABSOLUTION],
  videoSourceIds: [
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { name: WeaponNames.ABSOLUTION, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.FINALE_OF_THE_DEEP, best: "Лучшее доступное оружие", r: 5 },
  ],
} as CharacterRecommendations;
