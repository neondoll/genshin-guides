import { CharacterRoleIds } from "@/store/features/character-roles";
import { WeaponNames } from "@/store/features/weapons";
import { VideoSourceIds } from "@/types/base.types";
import type { CharacterRecommendations } from "@/types/recommendations.types";

export default {
  constellationOrSignatureWeapon: "Сигна",
  roleIds: [CharacterRoleIds.ON_FIELD, CharacterRoleIds.DPS],
  signatureWeaponNames: [WeaponNames.FANG_OF_THE_MOUNTAIN_KING],
  videoSourceIds: [
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { name: WeaponNames.FANG_OF_THE_MOUNTAIN_KING, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.EARTH_SHAKER, best: "Лучшее доступное оружие", r: 5 },
  ],
} as CharacterRecommendations;
