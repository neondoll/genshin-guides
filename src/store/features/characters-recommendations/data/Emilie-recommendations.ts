import { type CharacterRecommendations } from "@/types/characters-recommendations.types";
import { CharacterRoleIds } from "@/types/character-roles.types";
import { VideoSourceIds } from "@/types/video-sources.types";
import { WeaponNames } from "@/types/weapons.types";

export default {
  constellationOrSignatureWeapon: "Сигна",
  roleIds: [CharacterRoleIds.OFF_FIELD, CharacterRoleIds.DPS],
  signatureWeaponNames: [WeaponNames.LUMIDOUCE_ELEGY],
  videoSourceIds: [
    VideoSourceIds.FIRST_CONSTELLATION_OR_SIGNATURE_WEAPON,
    VideoSourceIds.THE_BEST_AVAILABLE_WEAPONS_FOR_EVERY_CHARACTER,
    VideoSourceIds.THE_BEST_WEAPONS_FOR_EVERY_CHARACTER,
  ],
  weapons: [
    { name: WeaponNames.LUMIDOUCE_ELEGY, best: "Лучшее оружие", r: 1 },
    { name: WeaponNames.BLACKCLIFF_POLE, r: 5 },
    { name: WeaponNames.FAVONIUS_LANCE, best: "Лучшее доступное оружие", r: 5 },
  ],
} as CharacterRecommendations;
